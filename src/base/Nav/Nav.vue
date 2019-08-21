<template>
  <div class="nav-container">
    <nav class="view-nav">
      <ul class="nav-list">
        <li v-for="item in navList" :key="item.key" @mouseenter.self="showCategory(item.category)">
          <router-link
            v-if="isHasDropDown === false
          || excludes.includes(item.key)
          || item.key === navList.find(item => currentCategory === item.category ).key "
            tag="a"
            :to="'/welcome'+item.key"
          >{{ item.title }}</router-link>
          <el-popover
            placement="bottom-start"
            :width="300"
            trigger="hover"
            :open-delay="300"
            :visible-arrow="false"
            v-else
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
              <router-link
                tag="a"
                :to="'/welcome'+item.key"
                @click="showCategory(item.category)"
              >{{ item.title }}</router-link>
            </div>
          </el-popover>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { dropdownParagraph } from './nav.config'
import Skeleton from 'base/Skeleton/Skeleton'

export default {
  props: {
    navList: {
      type: Array,
      required: true,
      default: () => []
    },
    getCategoryList: {
      // 获取二级目录项的接口
      type: Function
    },
    excludes: {
      // 如果有二级目录项，则除去哪一项不获取接口, 需要输入键值(路由值)
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      secCategoryList: {}, // 二级目录列表
      dropdownParagraph, // 下拉框骨架屏视图
      isHasDropDown: false, // 是否有二级目录
      currentCategory: '', // 当前一级目录的category
      catChangeFlag: false
    }
  },
  mounted () {
    if (typeof this.getCategoryList === 'function') {
      this.isHasDropDown = true
    }
    if (this.isHasDropDown) {
      this.currentCategory = this.navList.find(
        item => item.key === '/' + this.$route.params.key
      ).category
      this.showCategory(this.currentCategory, true)
    }
  },
  watch: {
    $route (next) {
      if (this.isHasDropDown) {
        this.currentCategory = this.navList.find(
          item => item.key === '/' + next.params.key
        ).category

        this.showCategory(this.currentCategory, true)
      }
    }
    /*  currentCategory (newVal) {
      this._catChange(newVal)
    } */
  },
  computed: {
    currentKey () {
      return this.navList.find(item => item.category === this.currentCategory).key
    }
  },
  methods: {
    showCategory (category, catChangeFlag) {
      if (!category) {
        catChangeFlag && this._catChange(this.currentCategory)
        return ''
      }
      if (this.secCategoryList[category]) {
        catChangeFlag && this._catChange(this.currentCategory)
        return ''
      }
      // 不存在，赋值
      this.getCategoryList &&
        this.getCategoryList(category, 15).then(res => {
          this.secCategoryList = {
            ...this.secCategoryList,
            [category]: res.slice()
          }
          catChangeFlag && this._catChange(this.currentCategory)
        })
    },
    _catChange (cat) {
      // 一级目录变化
      cat
        ? this.$emit('catChange', this.secCategoryList[cat], this.currentKey)
        : this.$emit('catChange', '', this.currentKey)
    }
  },
  components: {
    Skeleton
  }
}
</script>

<style lang="scss" scoped>
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
