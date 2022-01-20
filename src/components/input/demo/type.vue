<template>
  <single-demo label="文本输入框">
    <y-input></y-input>
  </single-demo>
  <single-demo label="密码输入框">
    <y-input type="password"></y-input>
  </single-demo>
  <single-demo label="长文本输入框">
    <y-input type="textarea"></y-input>
  </single-demo>
  <single-demo label="自动调整">
    <y-input type="textarea" autosize></y-input>
  </single-demo>
  <single-demo label="自定义">
    <y-input type="textarea" :autosize="autosizeConfig"></y-input>
  </single-demo>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'Type',

  setup() {
    const autosizeConfig = reactive({
      minRows: 3,
      maxRows: 6,
    });

    return {
      autosizeConfig,
    };
  },
});
</script>
