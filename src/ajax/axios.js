import axios from 'axios'

// 初始化 axios
export default (function () {
  axios.defaults.headers.common['X-Agent'] = 'Juejin/Web'
  return axios
})()
