<template>
  <single-demo label="展示输入限制">
    <y-input :maxlength="300" show-word-limit></y-input>
  </single-demo>
  <single-demo label="最多300字符">
    <y-input type="textarea" :maxlength="300" show-word-limit></y-input>
  </single-demo>
</template>
