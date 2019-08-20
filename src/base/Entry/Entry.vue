<template>
  <div class="entry-container">
    <a href="/" class="entry-link"  @mouseenter="isShareBtnShow=true" @mouseleave="isShareBtnShow=false">
      <div class="info-box">
        <div class="info-row">
          <ul class="meta-list">
            <li class="item recommended" v-if="feed.hot" >荐</li>
            <li class="item hot" v-if="feed.hotIndex >= 3000" >热</li>
            <li class="item post" v-if="feed.original" >专栏</li>
            <li class="item username">{{ feed.user.username}}</li>
            <li class="item">3小时前</li>
            <li class="item tag">
              <span class="tag-item" v-for="item in feed.tags.slice(0,2)" :key="item.id" >{{ item.title }}</span>
            </li>
          </ul>
        </div>
        <div class="title-row">
          <a href="/" class="title">{{ feed.title}}</a>
        </div>
        <div class="action-row">
          <ul class="action-list">
            <li class="item">
              <a href class="title-box">
                <img src="./images/like.svg" alt="点赞" />
                <span class="count">{{ feed.likeCount }}</span>
              </a>
            </li>
            <li class="item">
              <a href class="title-box">
                <img src="./images/comment.svg" alt="评论" />
                <span class="count">{{feed.commentsCount}}</span>
              </a>
            </li>
            <li class="item" v-if="isShareBtnShow">
              <img src="./images/share.svg" alt="分享" />
            </li>
          </ul>
        </div>
      </div>
      <div class="thumbnail-box" v-if="feed.screenshot" >
        <img  v-lazy="feed.screenshot" >
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['feed'],
  data () {
    return {
      isShareBtnShow: false // 分享按钮是否显示
    }
  }
}
</script>

<style lang="scss" scoped>
.entry-container {
  width: 100%;
  display: flex;
  align-items: center;
  .entry-link {
    display: flex;
    width: 100%;
    padding: 1.5rem 2rem;
    text-decoration: none;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    &:hover {
      background: #fcfcfc;
    }
    .info-box {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0;
      .info-row {
        .meta-list {
          display: flex;
          font-size: 1rem;
          color: #b2bac2;
          .item {
            &:not(:last-child):after {
              content: "·";
              margin: 0 0.4em;
              color: #b2bac2;
            }
            &.tag {
              .tag-item {
                &:not(:last-child):after {
                  content: "/";
                  margin: 0 0.2em;
                  color: #b2bac2;
                }
              }
            }
            &.recommended {
              color: #f70;
              font-weight: 500;
            }
            &.hot {
              color: red;
              font-weight: 500;
            }
            &.post {
              color: #b71ed7;
              font-weight: 500;
            }
          }
        }
      }
      .title-row {
        margin: 0.5rem 0 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .title {
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 1.2;
          color: #2e3135;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .action-row {
        .action-list {
          display: flex;
          white-space: nowrap;
          .item {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 0 0.8rem;
            height: 2rem;
            font-size: 1.083rem;
            line-height: 1;
            white-space: nowrap;
            color: #b2bac2;
            border-radius: 1px;
            border: 1px solid #edeeef;
            .title-box {
              display: flex;
              align-items: center;
              height: 100%;
              text-decoration: none;
              cursor: pointer;
              .count {
                color: #b2bac2;
                margin-left: 0.2em;
                font-weight: 700;
              }
            }
            &:hover {
              background: #f7f8fa;
            }
            &:not(:last-child) {
              border-right: none;
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            }
          }
        }
      }
    }
    .thumbnail-box{
        position: relative;
        flex: 0 0 auto;
        width: 5rem;
        height: 5rem;
        margin-left: 2rem;
        background-color: #fff;
        border-radius: 2px;
        overflow: hidden;
        img{
          position: absolute;
          min-width: 5rem;
          height: 5rem;
          object-fit:cover;
          left: 50%;
          transform: translateX(-50%);
        }
    }
  }
}
</style>
