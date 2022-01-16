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
