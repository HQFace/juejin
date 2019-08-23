<template>
  <main class="main-container">
    <Nav
      baseUrl="/welcome"
      :navList="navList"
      :getCategoryList="getCategoryList"
      :excludes="['/recommended']"
      @catChange="navCatChange"
    />
    <div class="feed-container">
      <tag-nav :tagList="tagList" @tagChange="tagChange" :baseUrl="baseUrl" />
      <div class="welcome-context">
        <el-container>
          <el-main class="main">
            <Feed @tabChange="tabChange">
              <loading-empty v-if="isLoadingEmpty" />
              <Entry v-for="item in articleFeedList" :key="item.node.id" :feed="item.node" />
              <Skeleton
                v-if="feedLoadingShow"
                width="100%"
                :active="true"
                :paragraph="feedParagraph"
              />
            </Feed>
          </el-main>
          <el-aside class="aside md" style="width:240px;">
            <manual-card :manualList="manualList" />
            <el-card
              class="app-link"
              shadow="never"
              bodyStyle="padding: 1.3rem;display: flex;align-items: center;"
            >
              <img
                class="qr-img"
                v-lazy="'https://b-gold-cdn.xitu.io/v3/static/img/welcome.6f27533.png'"
                alt
              />
              <div class="content-box">
                <div class="headline">下载掘金客户端</div>
                <div class="desc">一个帮助开发者成长的社区</div>
              </div>
            </el-card>
            <Footer />
          </el-aside>
        </el-container>
      </div>
    </div>
    <div class="suspension-panel">
      <button class="btn" v-show="isTopShow" @click="returnTop">
        <i class="el-icon-caret-top"></i>
      </button>
      <button class="btn meiqia-btn">
        <i class="el-icon-s-comment icon"></i>
      </button>
    </div>
  </main>
</template>

<script>
import { navList, feedParagraph } from './home.config'
import {
  getCategoryList,
  getArticleFeed,
  articleOrder,
  getManual
} from 'ajax/home'
import Feed from 'base/Feed/Feed'
import Entry from 'base/Entry/Entry'
import Nav from 'base/Nav/Nav'
import TagNav from 'base/TagNav/TagNav'
import Skeleton from 'base/Skeleton/Skeleton'
import ManualCard from 'base/ManualCard/ManualCard'
import Footer from 'base/Footer/Footer'
import LoadingEmpty from 'base/LoadingEmpty/LoadingEmpty'

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
      baseUrl: '',
      hotTag: articleOrder.POPULAR,
      currentSliderIndex: 0,
      manualList: '',
      feedLoadingShow: true, // 是否显示骨架屏
      isLoadingEmpty: false, // 加载之后是否为空
      isTopShow: false // 是否显示回到顶部
    }
  },
  mounted () {
    setTimeout(() => {
      this.articleFeedList = ''
      this._getFeedArticle(
        '/' + this.$route.params.key,
        this.tagId,
        this.hotTag
      ) // 切换路由时获取 feedlist
    }, 20)
    getManual().then(res => {
      this.manualList = res
    })
    this._InfiniteFeed()
  },
  watch: {
    $route () {
      this.$nextTick(() => {
        this.hasNextPage = true
        this.isLoadingEmpty = false
        this.articleFeedList = ''
        this._getFeedArticle(
          this.baseUrl.replace('/welcome', ''),
          this.tagId,
          this.hotTag
        ) // 切换路由时获取 feedlist
      })
    }
  },
  methods: {
    navCatChange (list, key) {
      this.hasNextPage = true
      this.isLoadingEmpty = false
      this.tagList = list
      this.baseUrl = '/welcome' + key
    },
    tagChange (tagId) {
      this.hasNextPage = true
      this.isLoadingEmpty = false
      this.tagId = tagId
    },
    tabChange (hotTag) {
      this.hasNextPage = true
      this.isLoadingEmpty = false
      this.hotTag = hotTag
      this.articleFeedList = ''
      this._getFeedArticle(
        '/' + this.$route.params.key,
        this.tagId,
        this.hotTag
      )
    },
    returnTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.isTopShow = false
    },
    _InfiniteFeed () {
      window.onscroll = () => {
        // 无限滚动
        let wScrollY = window.scrollY // 当前滚动条位置
        let wInnerH = window.innerHeight // 设备窗口的高度（不会变）
        let bScrollH = document.body.scrollHeight // 滚动条总高度
        if (wScrollY + wInnerH >= bScrollH) {
          let after = this.articleFeedList[this.articleFeedList.length - 1].node
            .rankIndex
          this.articleFeedList &&
            this._getFeedArticle(
              '/' + this.$route.params.key,
              this.tagId,
              this.hotTag,
              after
            )
        }
        if (wScrollY >= 900) {
          this.isTopShow = true
        } else {
          this.isTopShow = false
        }
      }
    },
    _getFeedArticle (
      key,
      tagId = '',
      hotTag = articleOrder.POPULAR,
      after = ''
    ) {
      // 根据路由获取 feed 流列表
      if (this.hasNextPage) {
        this.feedLoadingShow = true
        let category = navList.find(item => item.key === key).category
        getArticleFeed(category, [tagId], 20, hotTag, after).then(res => {
          this.articleFeedList
            ? (this.articleFeedList = [...this.articleFeedList, ...res.edges])
            : (this.articleFeedList = res.edges)
          this.hasNextPage = res.pageInfo.hasNextPage
          this.feedLoadingShow = false
          if (this.articleFeedList.length === 0) {
            this.isLoadingEmpty = true
            this.hasNextPage = true
          }
        })
      }
    }
  },
  components: {
    Feed,
    Entry,
    Skeleton,
    Nav,
    TagNav,
    ManualCard,
    Footer,
    LoadingEmpty
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
      .main {
        padding: 0;
      }
      .aside {
        width: 240px;
        min-width: 240px;
        margin-left: 24px;
        overflow: hidden;
        .app-link {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          .qr-img {
            margin-right: 0.5rem;
            width: 4.167rem;
            height: 4.167rem;
          }
          .content-box {
            .headline {
              font-size: 1.167rem;
              font-weight: 600;
              color: #333;
            }
            .desc {
              margin-top: 0.5rem;
              font-size: 1rem;
              color: #909090;
            }
          }
        }
      }
    }
  }
  .suspension-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    z-index: 1000;
    .btn {
      margin: 1rem 0 0;
      padding: 0;
      width: 3.33rem;
      height: 3.33rem;
      line-height: 1;
      color: #909090;
      background-color: #fff;
      border: 1px solid #f1f1f1;
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
      outline: none;
      cursor: pointer;
      &.meiqia-btn {
        font-size: 1.3rem;
        color: #007fff;
        transform:rotatex(180) .icon {
          transform: rotateX(180);
        }
      }
    }
  }
}
</style>
