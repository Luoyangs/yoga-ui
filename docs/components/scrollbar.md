# Scrollbar


## 基础

<code-wrapper>
<div class="code-source"><ScrollbarBase /></div>

 ```vue
<template>
  <div class="box">
    <y-scrollbar ref="scrollbar">
      <p
        v-for="item in 20"
        :key="item"
        class="scrollbar-demo-item">
        {{ item }}
      </p>
    </y-scrollbar>
  </div>
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
        scrollbar.value.scrollTop(100);
      }
    });

    return {
      scrollbar,
    };
  }
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

```

</code-wrapper>



## 水平滚动

<code-wrapper>
<div class="code-source"><ScrollbarHorizontal /></div>

 ```vue
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

```

</code-wrapper>



## 悬停即现

<code-wrapper>
<div class="code-source"><ScrollbarHover /></div>

 ```vue
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

```

</code-wrapper>




<script>
import ScrollbarBase from '../../src/components/scrollbar/demo/base.vue';
import ScrollbarHorizontal from '../../src/components/scrollbar/demo/horizontal.vue';
import ScrollbarHover from '../../src/components/scrollbar/demo/hover.vue';
export default {
	components: {
		ScrollbarBase,
		ScrollbarHorizontal,
		ScrollbarHover
	}
}
</script>

## API

**Scrollbar props**
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| hidden | 是否隐藏滚动条 | Boolean | - | `false` |
| layout | 显示水平/垂直方向的滚动条 | String | `vertical`/`horizontal`/`vertical, horizontal` | `vertical, horizontal` |
| hover-visible | 是否鼠标悬停展示滚动条 | Boolean | - | `false` |
| noresize | 是否开启加速模式，该模式下不会监听滚动条 | Boolean | - | `false` |
