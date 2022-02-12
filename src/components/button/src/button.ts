import { h, defineComponent, computed } from 'vue';
import { Icon } from '@components/icon';
import { buttonProps } from '@components/button/types';
import type { SetupContext } from 'vue';
import type { ButtonProps } from '@components/button/types';

export default defineComponent({
  name: 'YButton',
  props: buttonProps,
  components: {
    Icon,
  },
  setup(props: ButtonProps, { slots }: SetupContext) {
    const onClick = (event: MouseEvent) => {
      document.documentElement.removeAttribute('data-focus-visible');
      if (props.disabled) {
        event.preventDefault();
        return;
      }

      props.onClick?.(event);
    };
    const tagName = computed(() => (props.href ? 'a' : 'button'));
    const propsData = computed(() => {
      const type = props.type;
      const size = props.size;
      const href = props.href;
      const target = props.target;
      const disabled = props.disabled;
      const buttonClass = {
        'yoga-button': true,
        [`yoga-button--${type}`]: type,
        [`yoga-button--${size}`]: size,
        'yoga-button--outline': props.outline,
        'yoga-button--dashed': props.dashed,
        'yoga-button--block': props.fullWidth,
        'yoga-button--round': props.round,
        'yoga-button--circle': props.circle,
        'yoga-button--pure': !slots.default,
        'yoga-button--disabled': props.disabled,
        'yoga-button--underline': props.href && type === 'link',
      };

      return href
        ? { class: buttonClass, href: disabled ? null : href, target, onClick }
        : { class: buttonClass, type: props.nativeType, disabled, onClick };
    });

    return () =>
      h(tagName.value, propsData.value, [
        props.icon ? h(Icon, { src: props.icon }) : null,
        slots.default ? h('span', {}, slots.default()) : null,
        props.suffixIcon ? h(Icon, { src: props.suffixIcon }) : null,
      ]);
  },
});
