
## 基础用法

<code-wrapper>
<div class="code-source"><DatePickerBase /></div>

 ```vue
<template>
  <single-demo label="选择单个日期">
    <y-date-picker placeholder="选择日期" v-model="value" />
  </single-demo>

  <single-demo label="以周一作为一周开始">
    <y-date-picker
      :start-of-week="1"
      placeholder="以周一作为一周开始"
      v-model="value" />
  </single-demo>

  <single-demo label="不显示非本月的日期">
    <y-date-picker
      :show-overflow-date="false"
      placeholder="不显示非本月的日期"
      v-model="value" />
  </single-demo>

  <single-demo label="自定义展示的日期格式 YYYY-MM-DD hh:mm:ss">
    <y-date-picker
      format="YYYY-MM-DD hh:mm:ss"
      placeholder="自定义展示的日期格式"
      v-model="value" />
  </single-demo>

  <single-demo label="使用函数格式化展示日期">
    <y-date-picker
      :format="formatFun"
      placeholder="自定义展示的日期格式"
      v-model="value" />
  </single-demo>
</template>

<script>
import dayjs from "dayjs";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Base",
  setup() {
    const value = ref(null);

    watch(() => value, (val) => {
      console.log('value:', val);
    });

    const formatFun = (date) => {
      if (date.getTime() > Date.now()) {
        return dayjs(date).format('YYYY-MM-DD');
      } else {
        return dayjs(date).format('DD-MM-YYYY');
      }
    };

    return {
      value,
      formatFun,
    };
  }
});
</script>

```

</code-wrapper>



## 其他选择器

<code-wrapper>
<div class="code-source"><DatePickerType /></div>

 ```vue
<template>
  <single-demo label="选择单个日期">
    <y-date-picker
      placeholder="默认类型"
      v-model="value" />
  </single-demo>

  <single-demo label="年选择器">
    <y-date-picker
    type="year"
    placeholder="年选择器"
    v-model="year" />
  </single-demo>

  <single-demo label="月选择器">
    <y-date-picker
      type="month"
      placeholder="月选择器"
      v-model="month" />
  </single-demo>

  <single-demo label="周选择器">
    <y-date-picker
      type="week"
      placeholder="周选择器"
      v-model="week" />
  </single-demo>

  <single-demo label="日期范围选择器">
    <y-date-picker
      type="daterange"
      placeholder="日期范围选择器"
      v-model="range" />
  </single-demo>

  <single-demo label="月范围选择器">
    <y-date-picker
      type="monthrange"
      placeholder="月范围选择器"
      v-model="monthrange" />
  </single-demo>

  <single-demo label="年范围选择器">
    <y-date-picker
      type="yearrange"
      placeholder="年范围选择器"
      v-model="yearrange" />
  </single-demo>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Type",
  setup() {
    const value = ref(null);
    const year = ref(null);
    const month = ref(null);
    const week = ref(null);
    const range = ref({
      startDate: new Date(2021, 11, 9),
      endDate: new Date(2022, 0, 9),
    });
    const monthrange = ref({
      startDate: new Date(2021, 11, 1),
      endDate: new Date(2022, 0, 9),
    });
    const yearrange = ref({});

    return {
      value,
      year,
      month,
      week,
      range,
      yearrange,
      monthrange,
    };
  }
});
</script>

```

</code-wrapper>



## 固定始末

<code-wrapper>
<div class="code-source"><DatePickerFixed /></div>

 ```vue
<template>
  <single-demo label="固定起始日期">
    <y-date-picker
      type="daterange"
      fixed="start"
      placeholder="请选择日期范围"
      v-model="startRange" />
  </single-demo>

  <single-demo label="固定结束日期">
    <y-date-picker
      type="daterange"
      fixed="end"
      placeholder="请选择日期范围"
      v-model="endRange" />
  </single-demo>

  <single-demo label="固定起始月份">
    <y-date-picker
      type="monthrange"
      fixed="start"
      placeholder="请选择日期范围"
      v-model="startMonthRange" />
  </single-demo>

  <single-demo label="固定结束月份">
    <y-date-picker
      type="monthrange"
      fixed="end"
      placeholder="请选择日期范围"
      v-model="endMonthRange" />
  </single-demo>

  <single-demo label="固定起始年份">
    <y-date-picker
      type="yearrange"
      fixed="start"
      placeholder="请选择日期范围"
      v-model="startYearRange" />
  </single-demo>

  <single-demo label="固定结束年份">
    <y-date-picker
      type="yearrange"
      fixed="end"
      placeholder="请选择日期范围"
      v-model="endYearRange" />
  </single-demo>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Fixed",
  setup() {
    const startRange = ref({
      startDate: new Date(2021, 11, 9),
      endDate: new Date(2022, 2, 9),
    });
    const endRange = ref({
      startDate: new Date(2021, 11, 9),
      endDate: new Date(2022, 2, 9),
    });
    const startMonthRange = ref({
      startDate: new Date(2021, 11, 9),
      endDate: new Date(2023, 2, 9),
    });
    const endMonthRange = ref({
      startDate: new Date(2021, 11, 9),
      endDate: new Date(2023, 2, 9),
    });
    const startYearRange = ref({
      startDate: new Date(2021, 11, 9),
      endDate: new Date(2022, 2, 9),
    });
    const endYearRange = ref({
      startDate: new Date(2021, 11, 9),
      endDate: new Date(2022, 2, 9),
    });

    watch(() => startRange, (val) => {
      console.log('startRange:', val);
    });
    watch(() => startRange, (val) => {
      console.log('endRange:', val);
    });

    return {
      startRange,
      endRange,
      startMonthRange,
      endMonthRange,
      startYearRange,
      endYearRange,
    };
  }
});
</script>

```

</code-wrapper>



## 限定

<code-wrapper>
<div class="code-source"><DatePickerLimit /></div>

 ```vue
<template>
  <single-demo label="限定最大最小日期">
    <y-date-picker
      :min="minDate"
      :max="maxDate"
      v-model="value" />
  </single-demo>
  <single-demo label="固定起始日期，并限定最大最小日期">
    <y-date-picker
      type="daterange"
      fixed="start"
      :min="minDate"
      :max="maxDate"
      v-model="range" />
  </single-demo>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Limit",
  setup() {
    const minDate = new Date(2020, 9, 9);
    const maxDate = new Date(2023, 8, 8);
    const value = ref(null);
    const range = ref({
      startDate: minDate,
      endDate: new Date(2022, 0, 9),
    });

    watch(() => value, (val) => {
      console.log('value:', val);
    });

    return {
      value,
      range,
      minDate,
      maxDate,
    };
  }
});
</script>

```

</code-wrapper>



## 禁用

<code-wrapper>
<div class="code-source"><DatePickerDisabled /></div>

 ```vue
<template>
  <single-demo label="disabled date picker">
    <y-date-picker
      disabled
      v-model="value" />
  </single-demo>
  <single-demo label="disabled some date">
    <y-date-picker
      type="daterange"
      :disabled-date="disabledDate"
      v-model="range" />
  </single-demo>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Disabled",
  setup() {
    const value = ref(null);
    const range = ref(null);

    const disabledDate = (date) => {
      return date.getTime() < Date.now();
    };

    return {
      value,
      range,
      disabledDate,
    };
  }
});
</script>

```

</code-wrapper>



## 面板

<code-wrapper>
<div class="code-source"><DatePickerPanel /></div>

 ```vue
<template>
  <single-demo label="日期面板">
    <y-date-picker-panel v-model="value" />
  </single-demo>

  <single-demo label="日期范围面板">
    <y-daterange-picker-panel v-model="range" />
  </single-demo>

</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Panel",
  setup() {
    const value = ref(null);
    const range = ref(null);

    return {
      value,
      range,
    };
  }
});
</script>

```

</code-wrapper>




<script>
import DatePickerBase from '../../src/components/date-picker/demo/base.vue';
import DatePickerType from '../../src/components/date-picker/demo/type.vue';
import DatePickerFixed from '../../src/components/date-picker/demo/fixed.vue';
import DatePickerLimit from '../../src/components/date-picker/demo/limit.vue';
import DatePickerDisabled from '../../src/components/date-picker/demo/disabled.vue';
import DatePickerPanel from '../../src/components/date-picker/demo/panel.vue';
export default {
	components: {
		DatePickerBase,
		DatePickerType,
		DatePickerFixed,
		DatePickerLimit,
		DatePickerDisabled,
		DatePickerPanel
	}
}
</script>

## API

**DatePicker props**
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| modelValue | the value of date picker | Date, Object | if `type` is `week`,`daterange`, `monthrange` or `yearrange`, the value is an object that contains `endDate` and `startDate`, eg `{startDate: ..., endDate: ...}`, otherwise the value is a Date Object | - |
| type | the type of date picker | String | `year`/`month`/`week`/`date`/`datetime`/`yearrange`/`monthrange`/`daterange` | `date` |
| size | the size of date picker input | String | `large`/`normal`/`small` | `normal` |
| placeholder | native placeholder of input | String | - | - |
| disabled | whether date picker is disabled | Boolean | - | `false` |
| clearable | whether the picker in clearable | Boolean | - | `true` |
| format | format of the picker, support with [`dayjs`](https://dayjs.fenxianglu.cn/) | String, Function | year `yyyy` month `MM` day `dd`, hour `HH`, minute `mm`, second `ss` | `DD/MM/YYYY` |
| min | the minimum of date that can be selected | Date, Function | Function only effective when `type` contains `range` | - |
| max | the maximum of date that can be selected | Date, Function | Function only effective when `type` contains `range` | - |
| fixed | whether any or which end of `value` if fixed, only effective when `type` contains `range` | Boolean, String | `false`/`start`/`end` | `false` |
| disabled-date | the function that return a Boolean value to disable the date or not | Function | - | - |
| range-separator | range separator, only effective when `type` contains `range` | String | - | `–` |
| show-overflow-date | whether show the date out of current calendar | Boolean | - | `false` |
| start-of-week | the start of week, 0 stands for Sunday and 6 stands for Saturday | Number | `0` |
| popper-class | custom class of popper | String | - | - |
| popper-flippable | whether popper is flippable | Boolean | - | `true` |
| append-to-body | whether append picker popper to body | Boolean | - | `true` |
| placement | the placement of popper | String | `top`/`top-start`/`top-end`/`bottom`/`bottom-start`/`bottom-end`/`left`/`left-start`/`left-end`/`right`/`right-start`/`right-end` | `bottom-start` |


`RangeDate`:
```json
{
  startDate: Date;
  endDate: Date;
}
```

**DatePicker events**
| Property | Description | Parameters |
|:--|:--|:--|
| change | triggers when input value changed | 	formatted value |

**DatePicker slots**
| Property | Description | Parameters |
|:--|:--|:--|
| date-cell | customized date cell | `dateCell` |

`dateCell` is the setup of date cell info
```json
{
  type: 'normal' | 'current' | 'last-month' | 'next-month';
  date: Date;
  text: string;       // date text of the day
  selected: boolean;
  isStart: boolean;
  isEnd: boolean;
  disabled: boolean;
  inRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
}
```

**DatePickerPanel props**
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| value | value of picker | Date | - | - |
| type | the type of date picker | String | `year`/`month`/`week`/`date`/`datetime` | `date` |
| min | the minimum of date that can be selected | Date | - | - |
| max | the maximum of date that can be selected | Date | - | - |
| disabled-date | the function that return a Boolean value to disable the date or not | Function | - | - |
| show-overflow-date | whether show the date out of current calendar | Boolean | - | `false` |
| start-of-week | the start of week, 0 stands for Sunday and 6 stands for Saturday | Number | - | `0` |

**DatePickerPanel events**
| Property | Description | Parameters |
|:--|:--|:--|
| change | triggers when picker value changes | selected date/range |

**DaterangePickerPanel props**
all of props of DatePickerPanel and following
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| value | value of picker | Object | `{startDate: Date, endDate: Date}` | - |
| type | the type of date picker | String | `yearrange`/`monthrange`/`daterange` | `daterange` |
| min | the minimum of date that can be selected | Date, Function | `Date | (selectingRange, section) => Date` | - |
| max | the maximum of date that can be selected | Date, Function | `Date | (selectingRange, section) => Date` | - |
| fixed | whether any or which end of `value` if fixed | Boolean, String | `false`/`start`/`end` | `false` |
| range-separator | range separator, only effective when `type` contains `range` | String | - | `-` |

**DaterangePickerPanel events**
all of events of DatePickerPanel and following
| Property | Description | Parameters |
|:--|:--|:--|
| range-input | triggers when picker first or last changes | selected range |

