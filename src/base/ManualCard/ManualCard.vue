<template>
  <div class="manual-card" v-if="manualList">
    <el-card shadow="never" class="index-book-collect" body-style="padding:0">
      <div slot="header" class="header">
        <div class="title">掘金小册</div>
        <div class="controller">
          <i class="el-icon-arrow-left" @click="sliderLeft"></i>
          <i class="el-icon-arrow-right" @click="sliderRight"></i>
        </div>
      </div>
      <div class="content">
        <el-carousel
          v-if="showList"
          height="187px"
          class="slider"
          arrow="never"
          :autoplay="false"
          ref="slider"
          indicator-position="none"
        >
          <el-carousel-item v-for="(item,index) in showList" :key="index">
            <a href class="item" v-for="manual in item" :key="manual.id">
              <div class="poster">
                <img v-lazy="manual.img" alt />
              </div>
              <div class="content-text">
                <div class="title">{{ manual.title }}</div>
                <div class="price">
                  <div class="new">新人价 ￥{{ manual.price /2 }}</div>
                  <div class="delete">￥{{ manual.price }}</div>
                </div>
              </div>
            </a>
          </el-carousel-item>
        </el-carousel>
        <div class="book-newuser">
          <div class="newuser-title">
            <span>新人专享好礼</span>
          </div>
          <div class="giftbag">
            <img v-lazy=" 'https://b-gold-cdn.xitu.io/v3/static/img/45.b99ea03.svg' " />
            <div class="content-text">
              <div class="title">
                送你
                <span class="high-light">45元</span> 买小册
              </div>
              <div class="btn-box">
                <div class="btn-giftbag">立即领取</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getAsyncOne } from 'assets/js/dom'

export default {
  props: ['manualList'],
  data () {
    return {
      currentIndex: 0
    }
  },
  watch: {
    manualList (newVal) {
      if (newVal) {
      }
    }
  },
  computed: {
    showList () {
      let arr = []
      let temp = []
      for (let i = 0; i < this.manualList.length; i++) {
        temp.push(this.manualList[i])
        if (i % 2 !== 0) {
          arr.push(temp)
          temp = []
        }
      }
      return arr
    }
  },
  mounted () {
    getAsyncOne(
      () => {
        return this.$refs.slider
      },
      (msg, data) => {
        if (msg === 'success') {
          this.currentIndex = Math.floor(
            (Math.random() * this.manualList.length) / 2
          )
          let slider = data.el
          slider.setActiveItem(this.currentIndex)
        }
      }
    )
  },
  methods: {
    sliderLeft () {
      this.currentIndex === 0
        ? (this.currentIndex = this.manualList.length / 2 - 1)
        : --this.currentIndex
      this.$refs.slider.setActiveItem(this.currentIndex)
    },
    sliderRight () {
      this.currentIndex === this.manualList.length / 2 - 1
        ? (this.currentIndex = 0)
        : ++this.currentIndex
      this.$refs.slider.setActiveItem(this.currentIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
.index-book-collect {
  width: 100%;
  .header {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    .controller {
      display: flex;
      i {
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        color: #7d7d7d;
        padding: 0 2px;
        &:hover {
          color: #007fff;
        }
      }
    }
  }
  .content {
    .slider {
      .item {
        padding: 10px 15px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        .poster {
          width: 52px;
          height: 72px;
          flex-shrink: 0;
          img {
            height: 100%;
            width: 100%;
          }
        }
        .content-text {
          flex-grow: 1;
          margin-left: 10px;
          .title {
            color: #000;
            font-size: 14px;
            line-height: 1.3;
            font-weight: 500;
          }
          .price {
            display: inline-flex;
            margin-top: 6px;
            .new {
              margin-right: 6px;
              color: #fc4544;
            }
            .delete {
              color: #878c90;
              text-decoration: line-through;
            }
          }
        }
      }
    }
    .book-newuser {
      .newuser-title {
        padding-left: 15px;
        padding-right: 15px;
        height: 20px;
        margin-top: 5px;
        span {
          float: left;
          display: block;
          margin-right: 5px;
          color: #878c90;
          &::after {
            content: "";
            display: block;
            height: 0;
            border-bottom: 1px solid #f5f5f5;
            padding-top: 8px;
            overflow: hidden;
          }
        }
      }
      .giftbag {
        width: 100%;
        display: flex;
        padding: 15px 15px 20px;
        cursor: pointer;
        img {
          width: 52px;
          display: block;
        }
        .content-text {
          margin-left: 12px;
          .title {
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 8px;
            .high-light {
              color: #fc4544;
              margin-left: 5px;
              margin-right: 5px;
            }
          }
          .btn-box {
            .btn-giftbag {
              width: 60px;
              height: 20px;
              color: #007fff;
              line-height: 20px;
              border-radius: 2px;
              font-size: 12px;
              text-align: center;
              border: 1px solid #007fff;
            }
          }
        }
      }
    }
  }
}
</style>
