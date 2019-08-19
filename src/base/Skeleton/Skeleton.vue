<template>
  <div class="skeleton-wrapper">
    <div class="skeleton-content">
      <item :paragraph="paragraph" :active="active"></item>
    </div>
  </div>
</template>

<script>
/** *
 * 由于项目设置了 runtime-only 模式，需要修改递归组件的写法
 * copyright https://gitee.com/Janlaywss/juejin-doc/blob/master/Skeleton.vue
 * document http://janlaywss.gitee.io/doc/components/Skeleton/Skeleton.html
 * */

import item from './item'

export default {
  name: 'Skeleton',
  props: {
    active: {
      default: false
    },
    paragraph: {}
  },
  components: {
    item
  }
}
</script>

<style>

</style>
