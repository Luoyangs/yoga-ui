<template>
  <single-demo label="date panel">
    <y-date-picker-panel placeholder="pick date" v-model="value" />
  </single-demo>

  <single-demo label="date range panel">
    <y-daterange-picker-panel placeholder="pick date" v-model="range" />
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
