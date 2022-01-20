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
