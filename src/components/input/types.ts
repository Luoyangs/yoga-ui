import { ExtractPropTypes, PropType, Ref, ComputedRef } from 'vue';
import { YUISize, YUI_SIZE } from '@base/size';
import { FormItemContext } from '@components/form/types';

export type AutoSize = { minRows?: number; maxRows?: number };
export const RESTRICTION_TYPE = {
  VALUE: 'value',
  INPUT: 'input'
};

export const TEXTAREA_MIN_ROW = 2;

export const inputProps = {
  modelValue: {
    type: [String, Number],
    default: null,
  },
  type: {
    type: String as PropType<'text' | 'textarea' | 'password' | 'numeric'>,
    default: 'text',
    validator: (value): boolean => ['text', 'textarea', 'password', 'numeric'].indexOf(value) >= 0,
  },
  size: {
    type: String as PropType<YUISize>,
    default: 'normal',
    validator: (value: string): boolean => YUI_SIZE.indexOf(value) >= 0,
  },
  name: String,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  /** 默认在clearable状态下点击X会清空value，若为true则不清空 */
  beforeClear: [Boolean, Function] as PropType<boolean | (() => boolean)>,
  /** 控制是否能被用户缩放 */
  resize: {
    type: String as PropType<'vertical' | 'both' | 'horizontal' | 'none'>,
    default: 'vertical',
    validator: (value): boolean => ['vertical', 'both', 'horizontal', 'none'].indexOf(value) >= 0,
  },
  autosize: {
    type: [Boolean, Object] as PropType<AutoSize | boolean>,
    default: false,
  },
  readonly: Boolean,
  required: Boolean,
  /** 输入字段是否应该启用自动完成功能 */
  autocomplete: {
    type: String as PropType<'on' | 'off'>,
    default: 'off',
    validator: (value): boolean => ['on', 'off'].indexOf(value) >= 0,
  },
  maxlength: Number,
  max: {
    type: Number,
    default: Infinity
  },
  min: {
    type: Number,
    default: -Infinity
  },
  error: Boolean,
  errorMessage: String,
  prefixLabel: String,
  prefixIcon: String,
  suffixLabel: String,
  suffixIcon: String,
  restriction: [String, Function, RegExp] as PropType<string | (() => string) | RegExp>,
  restrictionType: {
    type: String as PropType<'input' | 'value'>,
    default: RESTRICTION_TYPE.INPUT,
    validator: (value): boolean => [RESTRICTION_TYPE.INPUT, RESTRICTION_TYPE.VALUE].indexOf(value) >= 0,
  },
  lazy: Boolean,
  helpText: String,
  showWordLimit: Boolean,
  precision: {
    type: Number,
    validator: (value): boolean => value >= 0 && value === parseInt(value, 10),
  },
  isRound: Boolean,
  unicodeNormalized: Boolean,
};

export type InputProps = ExtractPropTypes<typeof inputProps>;

export interface InputState {
  focused: boolean;
  currentValue: string | number;
  textareaCalcStyle: Record<string, string>;
}
export interface InputComputedState {
  focused: Ref<boolean>;
  currentValue: Ref<string | number>;
  textareaCalcStyle: Ref<Record<string, string>>;

  nativeProps: ComputedRef<Record<string, string>>;
  formItem: FormItemContext;
  isNumber: ComputedRef<boolean>;
  innerClass: ComputedRef<string[]>;
  textLength: ComputedRef<number>;
  textareaStyle: ComputedRef<Record<string, string>>;
  isWordLimitVisible: ComputedRef<boolean>;
  computedRestriction: ComputedRef<string | (() => string) | RegExp>;
  computedRestrictionType: ComputedRef<string>;
  computedPlaceholder: ComputedRef<string>;
}
