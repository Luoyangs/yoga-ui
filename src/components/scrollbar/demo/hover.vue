<template>
  <div class="box">
    <y-scrollbar :hover-visible="true">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </y-scrollbar>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Base',
});
</script>

<style scoped>
.box {
  height: 400px;
  width: 400px;
  border: 1px solid;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 500px;
  height: 50px;
  padding: 0 16px;
  margin: 0;
  border-radius: 4px;
  border-bottom: 1px dashed #ddd;
}
</style>
