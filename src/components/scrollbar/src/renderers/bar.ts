import { h, defineComponent, inject, computed, ref, reactive, unref } from 'vue';
import { SCROLLBAR_KEY } from '@components/scrollbar/types';
import { barProps } from '@components/scrollbar/src/renderers/types';
import type { BarProps, BarState } from '@components/scrollbar/src/renderers/types';
import { debounce } from '@utils/helper';

export default defineComponent({
  name: 'Bar',
  props: barProps,
  setup(props: BarProps) {
    const scrollbar: HTMLElement = inject(SCROLLBAR_KEY);
    if (!scrollbar) {
      throw new Error('can not inject scrollbar context');
    }

    const debounceFn = debounce((n) => n(), 500);
    const root = ref<HTMLElement>(null);
    const state = reactive<BarState>({
      isThumbDrag: false,
      clickOffset: 0,
      visible: false,
    });

    const thumbStyle = computed(() =>
      props.vertical
        ? {
            top: props.offset + 'px',
            height: props.size + 'px',
          }
        : {
            left: props.offset + 'px',
            width: props.size + 'px',
          }
    );
    const rootProps = computed(() => {
      return {
        class: ['yoga-scrollbar__bar', props.vertical ? 'vertical' : 'horizontal'],
        onMouseover: show,
        onMouseleave: hide,
      };
    });
    const thumbProps = computed(() => {
      return {
        class: ['yoga-scrollbar__thumb', state.visible && 'visible'],
        style: unref(thumbStyle),
        onMousedown: onThumbMousedown,
      };
    });

    const show = () => {
      state.visible = true;
      debounceFn(() => (state.visible = true));
    };
    const hide = () => {
      debounceFn(() => (state.visible = false));
    };
    const onThumbMove = (e: MouseEvent) => {
      if (!state.isThumbDrag) {
        return;
      }

      const clickOffset = state.clickOffset;
      const rootRect = root.value?.getBoundingClientRect?.();
      if (props.vertical) {
        const offset = e.clientY - rootRect.top;
        scrollbar.scrollTop = ((offset - clickOffset) * scrollbar.scrollHeight) / scrollbar.clientHeight;
      } else {
        const offset = e.screenX - rootRect.left;
        scrollbar.scrollLeft = ((offset - clickOffset) * scrollbar.scrollWidth) / scrollbar.clientWidth;
      }
    };
    const onThumbMouseUp = () => {
      state.isThumbDrag = false;
      state.clickOffset = 0;
      document.removeEventListener('mousemove', onThumbMove);
      document.removeEventListener('mouseup', onThumbMouseUp);
      document.onselectstart = null;
    };
    const onThumbMousedown = (e: MouseEvent) => {
      // 阻止冒泡和同类型的事件
      e.stopImmediatePropagation();
      state.isThumbDrag = true;
      document.addEventListener('mousemove', onThumbMove);
      document.addEventListener('mouseup', onThumbMouseUp);
      document.onselectstart = () => false;

      const rootRect = root.value?.getBoundingClientRect?.();
      if (props.vertical) {
        state.clickOffset = e.clientY - rootRect.top;
      } else {
        state.clickOffset = e.clientX - rootRect.left;
      }
    };

    return () => h('div', unref(rootProps), [h('div', unref(thumbProps))]);
  },
});
