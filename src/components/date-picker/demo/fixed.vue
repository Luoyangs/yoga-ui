<template>
  <single-demo label="fixed start date range">
    <y-date-picker
      type="daterange"
      fixed="start"
      placeholder="fixed start date range"
      v-model="startRange" />
  </single-demo>

  <single-demo label="fixed end date range">
    <y-date-picker
      type="daterange"
      fixed="end"
      placeholder="fixed end date range"
      v-model="endRange" />
  </single-demo>

  <single-demo label="fixed start month range">
    <y-date-picker
      type="monthrange"
      fixed="start"
      placeholder="fixed start month range"
      v-model="startMonthRange" />
  </single-demo>

  <single-demo label="fixed end month range">
    <y-date-picker
      type="monthrange"
      fixed="end"
      placeholder="fixed end month range"
      v-model="endMonthRange" />
  </single-demo>

  <single-demo label="fixed start year range">
    <y-date-picker
      type="yearrange"
      fixed="start"
      placeholder="fixed start year range"
      v-model="startYearRange" />
  </single-demo>

  <single-demo label="fixed end year range">
    <y-date-picker
      type="yearrange"
      fixed="end"
      placeholder="fixed end year range"
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
