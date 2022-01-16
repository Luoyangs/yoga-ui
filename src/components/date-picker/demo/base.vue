<template>
  <single-demo label="default">
    <y-date-picker placeholder="pick date" v-model="value" />
  </single-demo>

  <single-demo label="start of week is monday">
    <y-date-picker
      :start-of-week="1"
      placeholder="start of week is monday"
      v-model="value" />
  </single-demo>

  <single-demo label="not show overflow date">
    <y-date-picker
      :show-overflow-date="false"
      placeholder="not show overflow date"
      v-model="value" />
  </single-demo>

  <single-demo label="define format YYYY-MM-DD hh:mm:ss">
    <y-date-picker
      format="YYYY-MM-DD hh:mm:ss"
      placeholder="define format"
      v-model="value" />
  </single-demo>

  <single-demo label="define format function">
    <y-date-picker
      :format="formatFun"
      placeholder="define format"
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
