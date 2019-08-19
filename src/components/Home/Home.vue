<template>
  <main class="main-container">
    <nav class="view-nav">
      <ul class="nav-list">
        <li v-for="item in navList" :key="item.key" @mouseenter.self="showCategory(item.category)">
          <el-popover
            placement="bottom-start"
            :width="300"
            trigger="hover"
            :open-delay="300"
            :visible-arrow="false"
          >
            <Skeleton
              v-if="!secCategoryList[item.category]"
              :active="true"
              :paragraph="dropdownParagraph"
            />
            <div class="category-box" v-else>
              <ul>
                <li
                  v-for="item in secCategoryList[item.category]"
                  :key="item.tagId"
                >{{ item.title }}</li>
              </ul>
            </div>
            <div slot="reference">
              <router-link tag="a" :to="'/welcome'+item.key">{{ item.title }}</router-link>
            </div>
          </el-popover>
        </li>
      </ul>
    </nav>
    <div class="feed-container">
      <div class="welcome-context">
        <el-container>
          <el-main>
            <Feed>
              <Skeleton v-if="!articleFeedList"  width="100%" :active="true" :paragraph="feedParagraph" />
              <Entry v-for="item in articleFeedList" :key="item.node.id" :feed="item.node" />
            </Feed>
          </el-main>
          <el-aside class="md"></el-aside>
        </el-container>
      </div>
    </div>
  </main>
</template>

<script>
import { navList, dropdownParagraph, feedParagraph } from './home.config'
import { getCategoryList, getArticleFeed, articleOrder } from 'ajax/home'
import Feed from 'base/Feed/Feed'
import Entry from 'base/Entry/Entry'
import Skeleton from 'base/Skeleton/Skeleton'

export default {
  data () {
    return {
      navList, // 导航列表
      secCategoryList: {}, // 二级目录列表
      dropdownParagraph,
      feedParagraph,
      articleFeedList: '', // feed 流的文章列表
      hasNextPage: true // feed 是否还有下页
    }
  },
  mounted () {
    this.articleFeedList = ''
    this._getFeedArticle(this.$route.path.replace('/welcome', '')) // 根据路由获取最初的 feed 流
  },
  watch: {
    $route (to, from) {
      this.articleFeedList = ''
      this._getFeedArticle(to.path.replace('/welcome', '')) // 切换路由时获取 feedlist
    }
  },
  methods: {
    showCategory (category) {
      if (this.secCategoryList[category]) {
        return ''
      }
      // 不存在，赋值
      getCategoryList(category, 15).then(res => {
        this.secCategoryList = {
          ...this.secCategoryList,
          [category]: res.slice()
        }
      })
    },
    _getFeedArticle (key) {
      // 根据路由获取 feed 流列表
      if (this.hasNextPage) {
        let category = navList.find(item => item.key === key).category
        getArticleFeed(category, [], 20, articleOrder.POPULAR).then(res => {
          this.articleFeedList = res.edges
          this.hasNextPage = res.pageInfo.hasNextPage
        })
      }
    }
  },
  components: {
    Feed,
    Entry,
    Skeleton
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 980px) {
  .md {
    display: none !important;
  }
}

.main-container {
  width: 100%;
  .view-nav {
    position: fixed;
    top: calc(5rem + 1px);
    left: 0;
    transition: all 0.2s;
    transform: translateZ(0);
    width: 100%;
    height: 3.833rem;
    background: #fff;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    overflow: auto;
    .nav-list {
      display: flex;
      width: 960px;
      margin: 0 auto;
      height: 100%;
      li {
        position: relative;
        height: 100%;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        a {
          font-size: 1.16rem;
          text-decoration: none;
          color: #909090;
          &:hover {
            color: #007fff;
          }
          &.router-link-active {
            color: #007fff;
          }
        }
      }
    }
  }
  .feed-container {
    padding-top: calc(8.4rem + 1px);
    .welcome-context {
      max-width: 960px;
      margin: 0 auto;
    }
  }
}

.category-box {
  cursor: default;
  display: flex;
  background: #fff;
  /*  width: 24rem; */
  /*  padding: 0.17rem 0.54rem; */
  min-height: 16.67rem;
  /* box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15); */
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f4f5f5;
      border-radius: 1rem;
      height: 2.2rem;
      font-size: 1.1rem;
      padding: 0 0.83rem;
      margin: 0.6rem;
      color: #71777d;
    }
  }
}
</style>
