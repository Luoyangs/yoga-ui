<template>
  <div :class="['single-demo', vertical ? 'vertical' : '']">
    <div class="single-label">{{label}} </div>
    <div class="single-slot">
      <slot />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SingleDemo',
  props: {
    label: String,
    vertical: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.single-demo {
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  &.vertical {
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 16px;

    .single-label {
      margin-bottom: 8px;
    }
  }

  .single-label {
    font-size: 14px;
    color: #333;
    margin-right: 8px;
  }

  .single-slot {
    width: 100%;
    max-width: 240px;
  }
}
</style>
