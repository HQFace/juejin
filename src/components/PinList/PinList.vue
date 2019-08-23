<template>
  <div class="pins">
    <el-container>
      <div class="dock">
        <dock-nav :navList="navList" baseUrl="/pins"></dock-nav>
      </div>
      <el-main class="main">
        <Skeleton width="100%" class="skeleton" :active="true" :paragraph="streamParagraph" />
        <Pin />
      </el-main>
      <el-aside class="sidebar">
        <el-card shadow="never">
          <div slot="header">
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import DockNav from 'base/DockNav/DockNav'
import { navList, streamParagraph } from './pin.config'
import Skeleton from 'base/Skeleton/Skeleton'
import Pin from 'base/Pin/Pin'

export default {
  data () {
    return {
      navList,
      streamParagraph
    }
  },
  components: {
    DockNav,
    Skeleton,
    Pin
  }
}
</script>

<style lang="scss" scoped>
.pins {
  padding-top: 6.67rem;
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  .dock {
    width: 112px;
    margin-right: 15px;
  }
  .main{
      padding:0!important;
    .skeleton{
      background: #fff;
    }
  }
  .sidebar{
    width: 248px;
    flex: 1;
    max-width: 248px;
    margin-left: 15px;
  }
}
</style>
