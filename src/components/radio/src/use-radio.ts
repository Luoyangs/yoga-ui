import { computed, inject, nextTick } from 'vue';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@base';
import { RadioGroupKey } from '@components/radio/types';
import { FormItemKey } from '@components/form/types';
import type { SetupContext } from 'vue';
import type { FormItemContext } from '@components/form/types';
import type { RadioGroupContext, RadioProps, UseRadio } from '@components/radio/types';

export default (props: RadioProps, { emit }: SetupContext): UseRadio => {
  const radioGroup: RadioGroupContext = inject(RadioGroupKey, null);
  const formItem = inject(FormItemKey, {} as FormItemContext);
  const checkedValue = computed(() => {
    const currentValue = radioGroup ? radioGroup.modelValue : props.modelValue;
    return currentValue === props.value;
  });
  const size = computed(() => formItem?.size || (radioGroup && radioGroup.size));
  const isDisabled = computed(() => (radioGroup ? radioGroup.disabled || props.disabled : props.disabled));
  function handleValueChange() {
    nextTick(() => {
      emit(CHANGE_EVENT, props.value);
      if (radioGroup) {
        radioGroup.changeEvent?.(props.value);
        return;
      }
      emit(UPDATE_MODEL_EVENT, props.value);
    });
  }

  return {
    size,
    isDisabled,
    radioGroup,
    checkedValue,
    handleValueChange,
  };
};
