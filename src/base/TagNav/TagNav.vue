<template>
  <nav class="tag-nav" v-if="tagList">
    <ul class="tag-list" ref="tagUl">
      <router-link tag="li" class="tag-item"  :to="baseUrl+ '/全部'" :key="''">全部</router-link>
      <router-link
        tag="li"
        class="tag-item"
        :to="baseUrl+ '/' + item.title"
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
  props: ['tagList', 'baseUrl'],
  data () {
    return {
      allShow: true // 是否全部显示
    }
  },
  mounted () {

  },
  methods: {
    _tagChange (baseUrl, route) {
      if (!baseUrl) {
        return ''
      }

      if (baseUrl === '/welcome' + route.params.key) {
        return this.$emit('tagChange', '')
      }

      let tagname = route.params.tag
      if (tagname === '全部') {
        return this.$emit('tagChange', '')
      }
      this.$emit('tagChange', this.tagList.find(item => item.title === tagname).tagId)
    }
    /* linkTo (title) {
      this.$router.push({
        name: 'Home',
        params: {
          tag: title,
          key: this.baseUrl.replace('/welcome/', '')
        }
      })
    } */
  },
  watch: {
    tagList (newval) {
      if (newval && newval.length >= 9) {
        this.allShow = false
      }
    },
    baseUrl (newVal) {
      this._tagChange(newVal, this.$route)
    },
    $route (next) {
      this._tagChange(this.baseUrl, next)
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
      &:not(.router-link-active):hover {
        color: #007fff;
      }
    }
  }
}
</style>
