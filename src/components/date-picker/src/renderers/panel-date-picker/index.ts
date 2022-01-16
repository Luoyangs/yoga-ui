import { h, defineComponent } from 'vue';
import type { SetupContext } from 'vue';
import { UPDATE_MODEL_EVENT } from '@base';
import DatePickerHeader from '@components/date-picker/src/renderers/picker-header';
import DateTable from '@components/date-picker/src/renderers/table-date';
import renderMonthTable from '@components/date-picker/src/renderers/table-month';
import renderYearTable from '@components/date-picker/src/renderers/table-year';
import { datePickerPanelProps } from '@components/date-picker/src/renderers/panel-date-picker/types';
import { useHook } from '@components/date-picker/src/renderers/panel-date-picker/use';
import type { DatePickerPanelProps } from '@components/date-picker/src/renderers/panel-date-picker/types';

export { DatePickerPanelProps };

export default defineComponent({
  name: 'YDatePickerPanel',
  props: datePickerPanelProps,
  emits: [UPDATE_MODEL_EVENT, 'change'],
  setup(props: DatePickerPanelProps, context: SetupContext) {
    const prefixCls = 'yoga-date-picker-panel';

    const {
      showDateTable,
      showYearTable,
      showMonthTable,
      showTimePanel,
      pickerHeaderProps,
      dateTableProps,
      monthTableProps,
      yearTableProps,
    } = useHook(props, context);

    return () =>
      h('div', { class: prefixCls }, [
        h('div', { class: `${prefixCls}__main` }, [
          h('div', { class: `${prefixCls}__date` }, [
            h(DatePickerHeader, pickerHeaderProps.value),
            showDateTable.value ? h(DateTable, dateTableProps.value) : null,
            showYearTable.value ? renderYearTable(yearTableProps.value) : null,
            showMonthTable.value ? renderMonthTable(monthTableProps.value) : null,
          ]),
          showTimePanel.value ? h('div', { class: `${prefixCls}__time` }) : null,
        ]),
        showTimePanel.value ? h('div', { class: `${prefixCls}__footer` }) : null,
      ]);
  },
});
