<template>
  <nav class="dock-nav">
    <ul class="nav-list">
      <router-link
        :to="baseUrl + item.key"
        tag="li"
        v-for="item in navList"
        :key="item.key"
        class="nav-item"
        :class="{ 'line-after' : item.line }"
      >{{ item.title }}</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: () => []
    },
    baseUrl: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.dock-nav {
  max-width: 9.33rem;
  border-radius: 0.2rem;
  background-color: #fff;
  position: fixed;
  top: 6.67rem;
  width: 9.33rem;
  .nav-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.33rem 1rem;
    .nav-item {
      height: 2.58rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.16rem;
      color: #909090;
      padding: 0 1rem;
      border-radius: 0.25rem;
      position: relative;
      cursor: pointer;
      &.router-link-exact-active {
        background-color: #007fff;
        color: #fff;
      }
      &:not(:first-child) {
        margin-top: 0.83rem;
      }
      &.line-after::before {
        position: absolute;
        bottom: -0.5rem;
        content: "";
        width: 7.33rem;
        height: 1px;
        background: rgba(92, 96, 102, 0.1);
      }
    }
  }
}
</style>
