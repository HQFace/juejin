<template>
  <div class="header">
    <header class="header-container">
      <a href="/" class="logo-img">
        <img src="./images/logo.svg" class="pc" alt="掘金" />
        <img src="./images/logo-mobile.svg" class="mobile" alt="掘金" />
      </a>
      <nav class="navigation">
        <ul class="nav">
          <li>
            <router-link to="/welcome" tag="a" class="md">首页</router-link>
            <el-dropdown trigger="click" class="md-up-hide">
              <span class="el-dropdown-link" style="color: #007fff;">
                {{ currentTitle }}
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
              <router-link :to="'/'+ item.key" v-for="item in dpList" :key="item.key"  class="dp-a" tag="a">
                <el-dropdown-item class="item" >
                 {{ item.title }}
                </el-dropdown-item>
                </router-link>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="md">
            <router-link to="/pins">沸点</router-link>
          </li>
          <li class="md">
            <router-link to="/topics">话题</router-link>
          </li>
          <li class="md">
            <router-link to="/books">小册</router-link>
          </li>
          <li class="md">
            <router-link to="/events">活动</router-link>
          </li>
        </ul>
        <div class="nav-w-right">
          <div :class="searchWrapClass">
            <input
              maxlength="32"
              type="search"
              placeholder="搜索掘金"
              @focus="searchActive=!searchActive"
              @blur="searchActive=!searchActive"
            />
            <img class="sub-btn pc" src="./images/search.svg" alt v-if="!searchActive" />
            <img class="sub-btn pc" src="./images/search.focus.svg" alt v-if="searchActive" />
          </div>
          <div class="essay-btn md">
            <img src="./images/essay.svg" alt="写文章" />
            <span>写文章</span>
          </div>
          <div class="login-btn">
            <span class="login-a">登录</span>
            <span class="register-a">注册</span>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchActive: false, // 搜索框是否激活
      dpList: [
        {
          title: '首页',
          key: 'welcome'
        },
        {
          title: '沸点',
          key: 'pins'
        },
        {
          title: '话题',
          key: 'topics'
        },
        {
          title: '小册',
          key: 'books'
        },
        {
          title: '活动',
          key: 'events'
        }
      ]
    }
  },
  computed: {
    searchWrapClass () {
      return this.searchActive ? 'search-wrap active' : 'search-wrap'
    },
    currentTitle () {
      let key = this.$route.path.split('/')[1]
      return this.dpList.find(item => item.key === key).title
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.mobile {
  display: none;
}

@media screen and (min-width: 980px) {
  .logo-img {
    margin-right: 2rem;
  }
  .md-up-hide {
    display: none !important;
  }
}

@media screen and (max-width: 980px) {
  .md {
    display: none !important;
  }
}

@media screen and (max-width: 700px) {
  .mobile {
    display: block;
  }
  .pc {
    display: none !important;
  }
  .logo-img {
    min-width: 3.75rem !important;
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  transition: all 0.2s;
  transform: translateZ(0);
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid #eee;
  background: #fff;
  .header-container {
    display: flex;
    align-items: center;
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
    .logo-img {
      min-width: 98px;
      margin-left: 0.67rem;
    }
    .navigation {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .nav {
        display: flex;
        height: 100%;
        align-items: center;
        position: relative;
        li {
          margin: 0 1.5rem;
          a {
            width: auto;
            font-size: 1.33rem;
            color: #71777c;
            text-decoration: none;
            &:hover {
              color: #007fff;
            }
            &.router-link-active {
              color: #007fff;
            }
          }
          .el-dropdown-link,
          .item {
            cursor: pointer;
            font-size: 1.33rem;
            color: #71777c;
          }
        }
      }
      .nav-w-right {
        display: flex;
        .search-wrap {
          display: flex;
          position: relative;
          border: 1px solid hsla(0, 0%, 59.2%, 0.2);
          background-color: rgba(227, 231, 236, 0.2);
          border-radius: 2px;
          input {
            cursor: text;
            width: 10rem;
            padding: 0.6rem 1rem;
            font-size: 1.1rem;
            outline: none;
            color: #666;
            background: transparent;
            border: none;
          }
          &.active {
            border: 1px solid #007fff;
          }
          .sub-btn {
            cursor: pointer;
            padding: 0 0.5rem;
          }
        }
        .essay-btn {
          display: flex;
          position: relative;
          color: #007fff;
          cursor: pointer;
          align-items: center;
          font-size: 1.33rem;
          padding: 0 1.2rem;
          &::after {
            content: "|";
            position: absolute;
            left: 100%;
            color: hsla(0, 0%, 59.2%, 0.4);
          }
        }
        .login-btn {
          display: flex;
          color: #007fff;
          cursor: pointer;
          align-items: center;
          font-size: 1.33rem;
          padding: 0 1.2rem;
          .login-a {
            &::after {
              content: "·";
              margin: 0 0.4rem;
            }
          }
        }
      }
    }
  }
}

input::-webkit-input-placeholder {
  color: #b4b4b4;
}
input::-moz-placeholder {
  color: #b4b4b4;
}
input::-ms-input-placeholder {
  color: #b4b4b4;
}

.dp-a{
   color: #71777c;
}
.router-link-active {
  color: #007fff;
  *{
     color: #007fff;
  }
}
</style>
