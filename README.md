# VueJs juejin (开发中)

通过开发仿[掘金](https://juejin.im/)demo，加深学习vue全家桶等相关知识，提高自己的技术能力。
+ 目标：通过调用官方API，完成首页、沸点、话题、小册、活动五个板块的界面与内容展示，做到UI与交互尽量和原网站相近；提供合理的反馈交互；结合Node完成部分如登录、注册等与后台的数据交互。
+ 进度：已完成首页板块的界面与内容展示
+ 技术栈: vue(2.5) + vuex + vue-router + axios + Scss + element + ES6

##记录
#### Api 
``` JavaScript
//  对于 https://web-api.juejin.im/query 接口
//  设置 header 请求头
export default (function () {
  axios.defaults.headers.common['X-Agent'] = 'Juejin/Web'
  return axios
})()
//  需跨域的接口地址 (例 掘金小册 的接口)
//  config/index.js
 proxyTable: {
      '/xiaoceApi': {
        target: 'https://xiaoce-timeline-api-ms.juejin.im/v1/getListByLastTime',  // 接口域名
        changeOrigin: true,  
        pathRewrite: {
            '^/xiaoceApi': ''  
        } 
      }
    },
```
#### 反图片防盗链
在请求图片时出现403错误：
``` html
<!-- 在根目录 index.html 文件中加入 -->
<meta name="referrer" content="no-referrer">
```
#### 骨架屏方案
参考 [Vue灵活骨架屏组件封装](https://gitee.com/Janlaywss/juejin-doc/blob/master/Skeleton.vue) 

#### 样式 / 响应式
在仿照过程中样式是完全参考官网，响应式处理根据实际需求加入 `@media ...` 语句，部分布局容器采用`elementUI`组件。


