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
