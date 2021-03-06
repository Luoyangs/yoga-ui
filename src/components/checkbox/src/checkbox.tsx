import { h, watch, defineComponent } from 'vue';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@base';
import { checkboxProps } from '@components/checkbox/types';
import { useCheckbox } from '@components/checkbox/src/use-checkbox';
import type { CheckboxProps } from '@components/checkbox/types';

export default defineComponent({
  name: 'YCheckbox',
  props: checkboxProps,
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
  setup(props: CheckboxProps) {
    const checkboxState = useCheckbox(props);

    watch(() => checkboxState.checkboxGroup, checkboxState.updateLabelStyle, {
      deep: true,
      immediate: true,
    });

    return checkboxState;
  },
  render() {
    return (
      <label class={this.checkboxClass}>
        <input
          type="checkbox"
          class="yoga-checkbox__input"
          name={this.name}
          value={this.value}
          checked={this.checkedValue}
          disabled={this.isDisabled}
          onChange={this.handleValueChange}
        />
        <span class="yoga-checkbox__indicator" />
        {this.$slots.default && (
          <span ref="labelRef" class="yoga-checkbox__label" style={[this.fixedLabelStyle, this.labelStyles]}>
            {this.$slots.default?.()}
          </span>
        )}
      </label>
    );
  },
});
