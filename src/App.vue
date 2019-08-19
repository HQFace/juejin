<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from 'components/Header/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
html {
    font-size: 12px;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
    text-rendering: optimizeLegibility;
    color: #333;
    background-color: #f4f5f5;
}
</style>
