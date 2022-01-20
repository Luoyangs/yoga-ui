import { h, toRefs, inject, provide, reactive, computed, defineComponent } from 'vue';
import mitt from 'mitt';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@base';
import { FormItemKey } from '@components/form/types';
import { checkboxGroupProps, CheckboxGroupKey } from '@components/checkbox/types';
import type { SetupContext } from 'vue';
import type { FormItemContext } from '@components/form/types';
import type { CheckboxGroupProps, CheckboxGroupMittEvent } from '@components/checkbox/types';

export default defineComponent({
  name: 'YCheckboxGroup',
  props: checkboxGroupProps,
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
  setup(props: CheckboxGroupProps, { emit, slots }: SetupContext) {
    const checkboxGroupMitt = mitt<CheckboxGroupMittEvent>();
    const formItem = inject(FormItemKey, {} as FormItemContext);
    const computedSize = computed(() => formItem?.size || props.size);
    const className = computed(() => {
      return [
        'yoga-checkbox-group',
        `yoga-checkbox-group--${computedSize.value}`,
        { 'yoga-checkbox-group--vertical': props.vertical },
        { [`yoga-checkbox-group--${props.type}`]: props.type },
        { [`yoga-checkbox-group--disabled`]: props.disabled },
      ];
    });
    const changeEvent = ({ key, value }) => {
      let newValue = [];
      if (value) {
        // checked
        if (!props.modelValue.includes(key)) {
          newValue = props.modelValue.concat(key);
        }
      } else {
        newValue = props.modelValue.filter((item) => item !== key);
      }

      emit(UPDATE_MODEL_EVENT, newValue);
      if (newValue !== props.modelValue) {
        emit(CHANGE_EVENT, newValue);
        formItem.validate?.(CHANGE_EVENT);
      }
    };
    provide(
      CheckboxGroupKey,
      reactive({
        name: CheckboxGroupKey,
        ...toRefs(props),
        changeEvent,
      })
    );
    checkboxGroupMitt.on('checkboxChange', changeEvent);

    return () => <div class={className.value}>{slots?.default()}</div>;
  },
});
