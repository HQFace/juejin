<template>
  <div class="feed">
    <el-card class="main-card" shadow="never" body-style="padding:0" >
      <div slot="header" class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <a @click.prevent="changeTab(0)" :class="{active:currentTabIndex===0}" >热门</a>
          </li>
          <li class="nav-item">
            <a @click.prevent="changeTab(1)" :class="{active:currentTabIndex===1}" >最新</a>
          </li>
          <li class="nav-item">
            <a @click.prevent="changeTab(2)" :class="{active:currentTabIndex===2}">热榜</a>
          </li>
        </ul>
        <div class="drop-down-area" v-show="currentTabIndex===2" >
          <el-dropdown trigger="click" @visible-change="visibleChange" ref="menu" >
            <div class="el-dropdown-link">
              {{ menuList[currentDropdownIndex].name }}
              <i class="icon el-icon-caret-bottom" :class="{toggle:dropdown_visible}"></i>
            </div>
            <el-dropdown-menu
              slot="dropdown"
              class="dropdown-menu-area"
              placement="bottom-start"
              :offset="2"
              :visible-arrow="false"
            >
              <ul class="dropdown-menu-list">
                <li class="item" v-for="item in menuList" :key="item.index" >
                <el-dropdown-item style="padding:0;margin:0;">
                  <a @click.prevent="currentDropdownIndex = item.index">{{item.name}}</a>
                </el-dropdown-item>
                </li>
              </ul>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <slot />
    </el-card>
  </div>
</template>

<script>
export default {

  data () {
    return {
      currentTabIndex: 0, // 导航的当前激活项
      dropdown_visible: false, // 下拉框的显示情况
      currentDropdownIndex: 0, // 下拉框的选中项
      menuList: [
        {
          index: 0, name: '3天内'
        },
        {
          index: 1, name: '7天内'
        },
        {
          index: 2, name: '30天内'
        },
        {
          index: 3, name: '今天'
        }
      ] // 下拉框内容数组
    }
  },

  methods: {
    visibleChange (visible) {
      this.dropdown_visible = visible
    },
    changeTab (tab) {
      this.currentTabIndex = tab
    }
  }
}
</script>

<style lang="scss" scoped>
.main-card {
  .nav {
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.765rem;
    .nav-list {
      display: flex;
      .nav-item {
        padding: 0 1.2rem;
        font-size: 1.16rem;
        border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
        &:nth-child(3) {
          border-right: none;
        }
        &:nth-child(1) {
          padding-left: 0;
        }
        a {
          color: #909090;
          font-weight: normal;
          text-decoration: none;
          cursor: pointer;
          &:hover,
          &.active {
            color: #007fff;
          }
        }
      }
    }
    .drop-down-area {
      .el-dropdown-link {
        cursor: pointer;
        min-width: 4rem;
        color: #909097;
        font-size: 1rem;
        padding: 3px 10px;
        font-weight: 400;
        border: 1px solid #ebebeb;
        outline: none;
        &:hover{
            background: #f5f5f5;
        }
        .icon {
          position: absolute;
          right: 0.83rem;
          transition: all .5s;
          &.toggle {
            transform: rotate(-180deg);
            transition: all 0.5s;
          }
        }
      }
    }
  }
}

.dropdown-menu-area {
  margin-top: 7px !important;
  padding: 0;
  min-width: 6rem;
  .dropdown-menu-list {
    width: 100%;
    font-size: 1rem;
    list-style: none;
    text-align: left;
    border-radius: 0.17rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid #ebebeb;
    background-color: #fff;
    .item {
      a {
        cursor: pointer;
        display: block;
        clear: both;
        padding: 0.83rem;
        font-size: 1rem;
        line-height: 1.17;
        color: #909097;
        text-decoration: none;
        &:hover{
            background: #f5f5f5;
        }
      }
    }
  }
}
</style>
