import { h, defineComponent, reactive, ref, computed, unref } from 'vue';
import type { SetupContext } from 'vue';
import { scrollbarProps, SCROLLBAR_WIDTH, MIN_SCROLL_THUMB_WIDTH } from '../types';
import type { ScrollbarProps, ScrollbarState } from '../types';

export default defineComponent({
  name: 'YScrollbar',
  props: scrollbarProps,
  setup(props: ScrollbarProps, { slots }: SetupContext) {
    const wrapper: HTMLElement = ref(null);
    const content: HTMLElement = ref(null);
    const state = reactive<ScrollbarState>({
      offsetX: 0,
      offsetY: 0,
      heightSize: 0,
      widthSize: 0,
      lastScrollTime: null,
      lastScrollTop: null,
      lastScrollLeft: null,
    });

    const fixedStyle = computed(() => {
      const styles: {
        wrapper: CSSStyleDeclaration;
        content: CSSStyleDeclaration;
      } = {
        wrapper: {} as CSSStyleDeclaration,
        content: {} as CSSStyleDeclaration,
      };

      if (state.heightSize !== 0) {
        styles.wrapper.marginRight = `-${SCROLLBAR_WIDTH}px`;
        styles.wrapper.paddingRight = `${SCROLLBAR_WIDTH}px`;
        styles.content.marginRight = `-${SCROLLBAR_WIDTH}px`;
        styles.content.paddingRight = `${SCROLLBAR_WIDTH}px`;
      }
      if (state.widthSize !== 0) {
        styles.wrapper.marginBottom = `-${SCROLLBAR_WIDTH}px`;
        styles.wrapper.paddingBottom = `${SCROLLBAR_WIDTH}px`;
        styles.content.marginBottom = `-${SCROLLBAR_WIDTH}px`;
        styles.content.paddingBottom = `${SCROLLBAR_WIDTH}px`;
      }

      return styles;
    });

    const update = () => {
      const wrapperEle = unref(wrapper);
      if (!wrapperEle) {
        return;
      }

      if (props.layout.indexOf('vertical') > -1) {
        let clientHeight = wrapper.clientHeight;
        let scrollHeight = wrapper.scrollHeight;
        if (state.heightSize !== 0) {
          clientHeight -= SCROLLBAR_WIDTH;
          scrollHeight -= SCROLLBAR_WIDTH;
        }

        let heightSize = scrollHeight ? clientHeight * (clientHeight / scrollHeight) : 0;
        if (heightSize <= MIN_SCROLL_THUMB_WIDTH) {
          heightSize = MIN_SCROLL_THUMB_WIDTH;
        }
        if (heightSize >= clientHeight) {
          heightSize = 0;
        }

        state.heightSize = heightSize;
      }

      if (props.layout.indexOf('horizontal') > -1) {
        let clientWidth = wrapper.clientWidth;
        let scrollWidth = wrapper.scrollWidth;
        if (state.widthSize !== 0) {
          clientWidth -= SCROLLBAR_WIDTH;
          scrollWidth -= SCROLLBAR_WIDTH;
        }

        let widthSize = scrollWidth ? clientWidth * (clientWidth / scrollWidth) : 0;
        if (widthSize <= MIN_SCROLL_THUMB_WIDTH) {
          widthSize = MIN_SCROLL_THUMB_WIDTH;
        }
        if (widthSize >= clientWidth) {
          widthSize = 0;
        }

        state.widthSize = widthSize;
      }
    };

    const calScrollInfo = (e: MouseEvent) => {
      if (e) {
        const now = +new Date();
        const scrollEle = e.target as HTMLElement;
        const x = scrollEle.scrollLeft;
        const y = scrollEle.scrollTop;
        const dx = x - state.lastScrollLeft;
        const dy = y - state.lastScrollTop;

        let dt = now - state.lastScrollTime;
        if (!state.lastScrollTime || dt > 1000) {
          dt = 1000;
        }
        state.lastScrollTime = now;
        state.lastScrollLeft = x;
        state.lastScrollTop = y;

        return {
          x,
          y,
          vx: Number((dx / dt).toFixed(2)),
          vy: Number((dy / dt).toFixed(2)),
        };
      }
    };

    const onScroll = (e: MouseEvent) => {
      const wrapperEl = wrapper;
    };

    return () => h('div', null, 'sjsjj');
  },
});
