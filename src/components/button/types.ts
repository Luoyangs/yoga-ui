import { UISize } from '@base';
import { ExtractPropTypes, PropType } from 'vue';

export type ButtonType = 'primary' | 'secondary' | 'link';
export type ButtonNativeType = 'button' | 'reset' | 'submit';

export const buttonProps = {
  type: String as PropType<ButtonType>,
  size: {
    type: String as PropType<UISize>,
    default: 'normal',
    validator: (value: string = 'normal') => ['large', 'normal', 'small'].indexOf(value) >= 0,
  },
  outline: Boolean,
  disabled: Boolean,
  dashed: Boolean,
  fullWidth: Boolean,
  round: Boolean,
  circle: Boolean,
  icon: String,
  suffixIcon: String,
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
    validator: (value: string = 'button') => ['button', 'reset', 'submit'].indexOf(value) >= 0,
  },
  href: String,
  target: {
    type: String,
    default: 'self',
  },
  onClick: Function as PropType<(e: MouseEvent) => void>,
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
