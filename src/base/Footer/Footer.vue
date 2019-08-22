<template>
  <div class="footer">
    <div class="follow-section">
      <div class="header">关注我们</div>
      <ul class="account-list">
        <li class="item" v-for="item in followList" :key="item.alt">
          <img v-lazy="item.icon" :alt="item.alt" class="icon" />
        </li>
      </ul>
    </div>
    <section class="more-section">
      <ul class="more-list" v-for="(ul,index) in moreLists" :key="index" >
        <li class="item" v-for="li in ul" :key="li" >
          <span>{{ li }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { followList, moreLists } from './footer.config'
export default {
  data () {
    return {
      followList,
      moreLists
    }
  }
}
</script>

<style lang="scss" scoped >
.footer {
  .follow-section {
    background-color: transparent;
    text-align: center;
    color: #909090;
    box-shadow: none;
    overflow: visible;
    .account-list {
      display: flex;
      justify-content: center;
      margin: 1rem 0;
      .icon {
        width: 24px;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        cursor: pointer;
      }
    }
  }
  .more-section {
    background-color: transparent;
    text-align: center;
    color: #909090;
    font-size: 1.1rem;
    box-shadow: none;
    .more-list {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.4rem;
      .item {
        &:not(:last-child)::after {
          content: "·";
          margin: 0px 0.4rem;
        }
      }
    }
  }
}
</style>
