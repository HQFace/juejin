<template>
  <main class="main-container">
    <Nav
      :navList="navList"
      :getCategoryList="getCategoryList"
      :excludes="['/recommended']"
      @catChange="navCatChange"
    />
    <div class="feed-container">
      <tag-nav :tagList="tagList" @tagChange="tagChange" :baseUrl="baseUrl"/>
      <div class="welcome-context">
        <el-container>
          <el-main class="main" >
            <Feed>
              <Skeleton
                v-if="!articleFeedList"
                width="100%"
                :active="true"
                :paragraph="feedParagraph"
              />
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
import { navList, feedParagraph } from './home.config'
import { getCategoryList, getArticleFeed, articleOrder } from 'ajax/home'
import Feed from 'base/Feed/Feed'
import Entry from 'base/Entry/Entry'
import Nav from 'base/Nav/Nav'
import TagNav from 'base/TagNav/TagNav'
import Skeleton from 'base/Skeleton/Skeleton'

export default {
  data () {
    return {
      navList, // 导航列表
      getCategoryList,
      feedParagraph,
      articleFeedList: '', // feed 流的文章列表
      hasNextPage: true, // feed 是否还有下页
      tagId: '',
      tagList: '',
      baseUrl: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.articleFeedList = ''
      this._getFeedArticle(this.baseUrl.replace('/welcome', ''), this.tagId) // 切换路由时获取 feedlist
    }, 20)
  },
  watch: {
    $route () {
      this.$nextTick(() => {
        this.articleFeedList = ''
        this._getFeedArticle(this.baseUrl.replace('/welcome', ''), this.tagId) // 切换路由时获取 feedlist
      })
    }
  },
  methods: {
    navCatChange (list, key) {
      this.tagList = list
      this.baseUrl = '/welcome' + key
    },
    tagChange (tagId) {
      this.tagId = tagId
    },
    _getFeedArticle (key, tagId = '') {
      // 根据路由获取 feed 流列表
      if (this.hasNextPage) {
        let category = navList.find(item => item.key === key).category
        getArticleFeed(category, [tagId], 20, articleOrder.POPULAR).then(res => {
          this.articleFeedList = res.edges
          this.hasNextPage = res.pageInfo.hasNextPage
        })
      }
    }
  },
  components: {
    Feed,
    Entry,
    Skeleton,
    Nav,
    TagNav
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
  .feed-container {
    padding-top: calc(10.2rem + 1px);
    .welcome-context {
      max-width: 960px;
      margin: 0 auto;
      .main{
        padding:0;
      }
    }
  }
}
</style>
