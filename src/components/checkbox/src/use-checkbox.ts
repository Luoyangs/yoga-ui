import { toRefs, inject, nextTick, reactive, computed, getCurrentInstance } from 'vue';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@base';
import { isNumber } from '@utils/helper';
import { CheckboxGroupKey } from '@components/checkbox/types';
import type { UseCheckbox, CheckboxState, CheckboxProps, CheckboxGroupContext } from '@components/checkbox/types';

export const useCheckbox = (props: CheckboxProps): UseCheckbox => {
  const { emit } = getCurrentInstance();
  const { indeterminate } = toRefs(props);
  const checkboxGroup: CheckboxGroupContext = inject(CheckboxGroupKey, null);
  const state = reactive<CheckboxState>({
    labelRef: null,
    selfModel: false,
    labelStyles: {},
  });
  const checkedValue = computed(() => {
    if (checkboxGroup) {
      return checkboxGroup.modelValue.includes(props.value);
    }

    return props.modelValue ?? state.selfModel;
  });
  const isDisabled = computed(() => (checkboxGroup ? checkboxGroup.disabled || props.disabled : props.disabled));
  const checkboxClass = computed(() => {
    return [
      'yoga-checkbox',
      isDisabled.value ? 'disabled' : '',
      checkedValue.value ? 'checked' : '',
      indeterminate.value ? 'indeterminate' : '',
    ];
  });
  const fixedLabelStyle = computed(() => {
    if (checkboxGroup && isNumber(checkboxGroup.fixedWidth)) {
      return {
        width: `${checkboxGroup.fixedWidth}px`,
        'min-width': `${checkboxGroup.fixedWidth}px`,
        'max-width': `${checkboxGroup.fixedWidth}px`,
      };
    }
  });
  function updateLabelStyle() {
    nextTick(() => {
      if (checkboxGroup && typeof checkboxGroup.fixedWidth === 'number' && state.labelRef?.scrollHeight > 20) {
        state.labelStyles = {
          'vertical-align': 'top',
        };
      }
    });
  }
  function handleValueChange(e: InputEvent) {
    if (isDisabled.value) {
      return;
    }

    const target = e.target as HTMLInputElement;
    const value = target.checked;
    if (checkboxGroup) {
      checkboxGroup.changeEvent({
        key: props.value,
        value,
      });
      return;
    }

    emit(CHANGE_EVENT, value);
    emit(UPDATE_MODEL_EVENT, value);
    state.selfModel = value;
  }

  return {
    ...toRefs(state),
    isDisabled,
    checkedValue,
    checkboxClass,
    checkboxGroup,
    fixedLabelStyle,

    updateLabelStyle,
    handleValueChange,
  };
};
