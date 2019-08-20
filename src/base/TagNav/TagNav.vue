<template>
  <nav class="tag-nav" v-if="tagList">
    <ul class="tag-list" ref="tagUl">
      <li class="tag-item"  :to=" $route.path+ '/全部' " :key="''">全部</li>
      <router-link
        tag="li"
        :to=" $route.path+ '/'+ decodeURIComponent(item.title) "
        class="tag-item"
        v-show="allShow?true:index<=8?true:false"
        v-for="(item,index) in tagList"
        :key="item.tagId"
      >{{ item.title }}</router-link>
      <li class="tag-item" v-if="!allShow" @click="allShow=!allShow">
        展开
        <i class="el-icon-caret-bottom"></i>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['tagList'],
  data () {
    return {
      allShow: true, // 是否全部显示
      tagId: ''
    }
  },
  watch: {
    tagList (newval) {
      if (newval && newval.length >= 9) {
        this.allShow = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-nav {
  width: 960px;
  margin: 0 auto;
  padding: 0 0.8rem;
  box-sizing: border-box;
  .tag-list {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    .tag-item {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      background-color: #fff;
      border-radius: 1rem;
      font-size: 1.1rem;
      color: #8a9aa9;
      padding: 0 0.83rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      cursor: pointer;
      &.router-link-active {
        background-color: #007fff;
        color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05),
          0 1px 2px 0 rgba(0, 0, 0, 0.05);
      }
      &:hover {
        color: #007fff;
      }
    }
  }
}
</style>
