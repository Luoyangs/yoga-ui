import { UI_SIZE } from '@base';
import type { ExtractPropTypes, PropType } from 'vue';
import type { UISize } from '@base';

export const switchProps = {
  modelValue: {
    type: Boolean,
    default: null,
  },
  disabled: Boolean,
  activeText: String,
  inactiveText: String,
  size: {
    type: String as PropType<UISize>,
    default: 'normal',
    validator: (value: string = 'normal'): boolean => UI_SIZE.indexOf(value) >= 0,
  },
};

export type SwitchProps = ExtractPropTypes<typeof switchProps>;
