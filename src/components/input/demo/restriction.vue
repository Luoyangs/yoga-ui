<template>
  <single-demo label="仅输入数字">
    <y-input
      placeholder="Please input number"
      restriction="number">
    </y-input>
  </single-demo>
  <single-demo label="自定义配置">
    <y-input
      placeholder="Please input number"
      restriction-type="value"
      :restriction="restriction">
    </y-input>
  </single-demo>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Restriction",

  setup() {
    const restriction = (val) =>{
      return /^.{1,3}$/.test(val);
    };

    return {
      restriction,
    };
  }
});
</script>
