<template>
  <y-scrollbar ref="scrollbar">
    <div class="scrollbar-flex-content">
      <p
        v-for="item in 20"
        :key="item"
        class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </y-scrollbar>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Base',
  setup() {
    const scrollbar = ref(null);

    onMounted(() => {
      console.log('scrollbar', scrollbar.value);
      if (scrollbar) {
        scrollbar.value.scrollLeft(100);
      }
    });

    return {
      scrollbar,
    };
  }
});
</script>

<style scoped>
.scrollbar-flex-content {
  display: flex;
}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  padding: 0 16px;
  margin: 0 16px;
  border-radius: 4px;
  border: 1px dashed #ddd;
}
</style>
