<template>
  <single-demo label="基础">
    <y-input v-model="value11" type="numeric"></y-input>
  </single-demo>
  <single-demo label="配置精度">
    <y-input v-model="value12" type="numeric" :precision="2">
      <template v-slot:help>Input tip: value precision is 2</template>
    </y-input>
  </single-demo>
  <single-demo label="配置最值">
    <y-input v-model="value13" type="numeric" :precision="2" :max="99.98" :min="2">
      <template v-slot:help>Input tip: min value: 2, max value: 99.98, precision is 2</template>
    </y-input>
  </single-demo>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'Type',

  setup() {
    const state = reactive({
      value11: '',
      value12: '',
      value13: '',
    });

    return toRefs(state);
  },
});
</script>
