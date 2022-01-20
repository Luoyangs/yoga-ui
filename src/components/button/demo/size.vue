<template>
  <div class="simple-box">
    <y-button type="primary" size="small">小尺寸</y-button>
    <y-button type="primary" size="normal">正常尺寸</y-button>
    <y-button type="primary" size="large">大尺寸</y-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Size",
});
</script>
