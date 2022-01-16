<template>
  <single-demo label="date picker">
    <y-date-picker
      placeholder="default"
      v-model="value" />
  </single-demo>

  <single-demo label="year picker">
    <y-date-picker
    type="year"
    placeholder="pick year"
    v-model="year" />
  </single-demo>

  <single-demo label="month picker">
    <y-date-picker
      type="month"
      placeholder="pick month"
      v-model="month" />
  </single-demo>

  <single-demo label="week picker">
    <y-date-picker
      type="week"
      placeholder="pick week"
      v-model="week" />
  </single-demo>

  <single-demo label="date range picker">
    <y-date-picker
      type="daterange"
      placeholder="pick date range"
      v-model="range" />
  </single-demo>

  <single-demo label="month range">
    <y-date-picker
      type="monthrange"
      placeholder="pick month range"
      v-model="monthrange" />
  </single-demo>

  <single-demo label="year range picker">
    <y-date-picker
      type="yearrange"
      placeholder="pick year range"
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
