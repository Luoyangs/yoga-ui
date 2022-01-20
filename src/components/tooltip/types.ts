import { popperProps } from '@components/popper';
import type { ExtractPropTypes, PropType } from 'vue';
import type { Placement } from '@popperjs/core';

export const tooltipProps = {
  ...popperProps,
  modelValue: {
    type: Boolean,
    default: undefined,
    validator: (value) => typeof value === 'boolean',
  },
  tabindex: {
    type: [Number, String],
    default: '0',
  },
  showArrow: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'top',
  },
};

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
