# ConfigProvider


## 基础

<code-wrapper>
<div class="code-source"><ConfigProviderBase /></div>

 ```vue
<template>
  <y-config-provider :locale="locale">
    <single-demo label="日期面板">
      <y-date-picker-panel />
    </single-demo>
  </y-config-provider>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Base',

  setup() {
    const value = ref(null);
    const locale = ref({
      name: 'zh-cn',
      ele: {
        datepicker: {
          year: '年',
          weeks: {
            0: '日',
            1: '一',
            2: '二',
            3: '三',
            4: '四',
            5: '五',
            6: '六',
          },
          months: {
            0: '一月',
            1: '二月',
            2: '三月',
            3: '四月',
            4: '五月',
            5: '六月',
            6: '七月',
            7: '八月',
            8: '九月',
            9: '十月',
            10: '十一月',
            11: '十二月',
          },
          fullmonths: {
            0: '1 月',
            1: '2 月',
            2: '3 月',
            3: '4 月',
            4: '5 月',
            5: '6 月',
            6: '7 月',
            7: '8 月',
            8: '9 月',
            9: '10 月',
            10: '11 月',
            11: '12 月',
          },
        },
      },
    });

    return {
      value,
      locale,
    };
  }
});
</script>

```

</code-wrapper>




<script>
import ConfigProviderBase from '../../src/components/config-provider/demo/base.vue';
export default {
	components: {
		ConfigProviderBase
	}
}
</script>

## API

**ConfigProvider props**
