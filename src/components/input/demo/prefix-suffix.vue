<template>
  <single-demo label="配置prefix label">
    <y-input prefix-label="UserName"></y-input>
  </single-demo>
  <single-demo label="配置prefix icon">
    <y-input :prefix-icon="MaleIcon"></y-input>
  </single-demo>
  <single-demo label="配置prefix slot">
    <y-input><template v-slot:prefix>用户名</template></y-input>
  </single-demo>
  <single-demo label="配置suffix label">
    <y-input suffix-label="@baidu.com"></y-input>
  </single-demo>
  <single-demo label="配置suffix icon">
    <y-input :suffix-icon="SearchIcon"></y-input>
  </single-demo>
  <single-demo label="配置suffix slot">
    <y-input><template v-slot:suffix>RMB</template></y-input>
  </single-demo>
</template>

<script>
import { defineComponent } from 'vue';
import MaleIcon from './male.svg';
import SearchIcon from './search.svg';

export default defineComponent({
  name: 'PrefixAndSuffix',

  setup() {
    return {
      MaleIcon,
      SearchIcon,
    };
  },
});
</script>
