
## 基本输入框

<code-wrapper>
<div class="code-source"><InputBase /></div>

 ```vue
<template>
  <single-demo label="基本输入框">
    <y-input></y-input>
  </single-demo>
</template>

```

</code-wrapper>



## 其他类型

<code-wrapper>
<div class="code-source"><InputType /></div>

 ```vue
<template>
  <single-demo label="文本输入框">
    <y-input></y-input>
  </single-demo>
  <single-demo label="密码输入框">
    <y-input type="password"></y-input>
  </single-demo>
  <single-demo label="长文本输入框">
    <y-input type="textarea"></y-input>
  </single-demo>
  <single-demo label="自动调整">
    <y-input type="textarea" autosize></y-input>
  </single-demo>
  <single-demo label="自定义">
    <y-input type="textarea" :autosize="autosizeConfig"></y-input>
  </single-demo>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'Type',

  setup() {
    const autosizeConfig = reactive({
      minRows: 3,
      maxRows: 6,
    });

    return {
      autosizeConfig,
    };
  },
});
</script>

```

</code-wrapper>



## 不同尺寸

<code-wrapper>
<div class="code-source"><InputSize /></div>

 ```vue
<template>
  <single-demo label="小尺寸">
    <y-input size="small"></y-input>
  </single-demo>
  <single-demo label="正常尺寸">
    <y-input></y-input>
  </single-demo>
  <single-demo label="大尺寸">
    <y-input size="large"></y-input>
  </single-demo>
</template>

```

</code-wrapper>



## 清空态

<code-wrapper>
<div class="code-source"><InputClearable /></div>

 ```vue
<template>
  <single-demo label="可清除">
    <y-input clearable></y-input>
  </single-demo>
</template>

```

</code-wrapper>



## 禁用态

<code-wrapper>
<div class="code-source"><InputDisabled /></div>

 ```vue
<template>
  <single-demo label="禁止输入">
    <y-input disabled placeholder="disabled"></y-input>
  </single-demo>
  <single-demo label="只读模式">
    <y-input readonly placeholder="readonly"></y-input>
  </single-demo>
</template>

```

</code-wrapper>



## 输入前缀/后缀

<code-wrapper>
<div class="code-source"><InputPrefixSuffix /></div>

 ```vue
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

```

</code-wrapper>



## 数量限制

<code-wrapper>
<div class="code-source"><InputWithWordLimit /></div>

 ```vue
<template>
  <single-demo label="展示输入限制">
    <y-input :maxlength="300" show-word-limit></y-input>
  </single-demo>
  <single-demo label="最多300字符">
    <y-input type="textarea" :maxlength="300" show-word-limit></y-input>
  </single-demo>
</template>

```

</code-wrapper>



## 输入框提示

<code-wrapper>
<div class="code-source"><InputHelper /></div>

 ```vue
<template>
  <single-demo label="配置error message">
    <y-input error error-message="校验失败，这是提示语句"></y-input>
  </single-demo>
  <single-demo label="配置help text">
    <y-input help-text="这是辅助文案，请在合适的位置使用"></y-input>
  </single-demo>
  <single-demo label="配置help slot">
    <y-input><template v-slot:help>这是辅助文案，请在合适的位置使用</template></y-input>
  </single-demo>
  <single-demo label="配置error message">
    <y-input type="textarea" error error-message="校验失败，这是提示语句"></y-input>
  </single-demo>
  <single-demo label="配置help text">
    <y-input type="textarea" help-text="这是辅助文案，请在合适的位置使用"></y-input>
  </single-demo>
  <single-demo label="配置help slot">
    <y-input type="textarea"><template v-slot:help>这是辅助文案，请在合适的位置使用</template></y-input>
  </single-demo>
</template>

```

</code-wrapper>



## 校验

<code-wrapper>
<div class="code-source"><InputRestriction /></div>

 ```vue
<template>
  <single-demo label="仅输入数字">
    <y-input
      placeholder="Please input number"
      restriction="number">
    </y-input>
  </single-demo>
  <single-demo label="自定义配置">
    <y-input
      placeholder="Please input number"
      restriction-type="value"
      :restriction="restriction">
    </y-input>
  </single-demo>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Restriction",

  setup() {
    const restriction = (val) =>{
      return /^.{1,3}$/.test(val);
    };

    return {
      restriction,
    };
  }
});
</script>

```

</code-wrapper>



## 数字输入框

<code-wrapper>
<div class="code-source"><InputNumeric /></div>

 ```vue
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

```

</code-wrapper>



## 分组

<code-wrapper>
<div class="code-source"><InputGroup /></div>

 ```vue
<template>
  <single-demo label="输入框组合">
    <y-input-group>
      <y-input style="width: 80px"></y-input>
      <y-input style="width: calc(100% - 80px)"></y-input>
    </y-input-group>
  </single-demo>
  <single-demo label="输入框组合">
    <y-input-group>
      <y-input style="width: 40%"></y-input>
      <y-input style="width: 60%"></y-input>
    </y-input-group>
  </single-demo>
</template>

```

</code-wrapper>




<script>
import InputBase from '../../src/components/input/demo/base.vue';
import InputType from '../../src/components/input/demo/type.vue';
import InputSize from '../../src/components/input/demo/size.vue';
import InputClearable from '../../src/components/input/demo/clearable.vue';
import InputDisabled from '../../src/components/input/demo/disabled.vue';
import InputPrefixSuffix from '../../src/components/input/demo/prefix-suffix.vue';
import InputWithWordLimit from '../../src/components/input/demo/with-word-limit.vue';
import InputHelper from '../../src/components/input/demo/helper.vue';
import InputRestriction from '../../src/components/input/demo/restriction.vue';
import InputNumeric from '../../src/components/input/demo/numeric.vue';
import InputGroup from '../../src/components/input/demo/group.vue';
export default {
	components: {
		InputBase,
		InputType,
		InputSize,
		InputClearable,
		InputDisabled,
		InputPrefixSuffix,
		InputWithWordLimit,
		InputHelper,
		InputRestriction,
		InputNumeric,
		InputGroup
	}
}
</script>

## API

**Input props**
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| type | the type of input | String | native type and `textarea` / `numeric` | `text` |
| modelValue | the value of input | String | - | - |
| placeholder| the placeholder of input | String | - | - |
| name | the native name of input | String | - | - |
| readonly | the native readonly | Boolean | - | - |
| autofocus | the native autofocus | Boolean | - | - |
| autocomplete | the native autocomplete | Boolean | - | - |
| form | the native form | Boolean | - | - |
| minlength | the native min length | Number | - | - |
| maxlength | the native max length | Number | - | - |
| size | the size of input | String | `large`/`normal`/`small` | `normal` |
| suffix-label | the suffix label of input | String | - | - |
| prefix-label | the prefix label of input | String | - | - |
| prefix-icon | the prefix icon, accepts svg | String | - | - |
| suffix-icon | the suffix icon, accepts svg | String | - | - |
| disabled | whether the input is disabled | Boolean | - | `false` |
| clearable | whether the input in clearable | Boolean | - | `false` |
| restriction | the restriction of input. Only effective at inputEvent | String, Function, RegExp | `number` | - |
| restriction-type | the restriction type of input, when the type is `input`, it will only restrict the current input, when the type is `value`, it will restrict the whole value | String | `value`, `input` | `input` |
| error | whether the value of input is invalid | Boolean | - | `false` |
| error-message | the error message of input | String | - | - |
| rows | the native rows of textarea | Number | - | - |
| minrows | the min rows of textarea | Number | - | - |
| maxrows | the max rows of textarea | Number | - | - |
| autosize | whether the textarea will auto adjust its size | Boolean | - | `false` |
| lazy | the same as `v-model.lazy` | Boolean | - | `false` |
| help-text | the help message of input | String | - | - |
| show-word-limit | whether show word limit | Boolean | - | `false` |
| max | the max value of number input, only works for type=numeric | Number | - | - |
| min | the min value of number input, only works for type=numeric  | Number | - | - |
| precision | precision of input value, only works for type=numeric  | Number | - | - |
| is-round | wether use Number.toFixed or direct intercept, only works for type=numeric  | Boolean | - | true(means direct intercept) |
| unicode-normalized| whether to calculate the string by utf-16, instead of the default utf-8 | Boolean | - | `false` |

**Input slot**
All input slots and following
| Slot | Description  |
|:--|:--|
| prefix | the prefix label of input |
| suffix | the suffix label of input |
| error | the error message of input |
| help | the help message of input |

**Input events**
All native input events and following
| Event | Description | Parameters |
|:--|:--|:--|
| value-change | the change event of input value | the value |


**InputGroup props**
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| prepend-width | the width of prepend | Number | - | 120 |

**InputGroup slot**
All input slots and following
| Slot | Description  |
|:--|:--|
| prepend | the prepend of group |
| append | the append of group |
