import axios from './axios'
import { baseUrl, defaultField, FEED } from './config'

// 获取目录的二级标题
export function getCategoryList (category, limit) {
  const url = baseUrl
  let data = {
    extensions: {
      query: { id: '801e22bdc908798e1c828ba6b71a9fd9' }
    },
    ...defaultField,
    variables: {
      category,
      limit
    }
  }

  return axios.post(url, data).then((res) => { // 成功
    if (res.data.data) return res.data.data.tagNav.items
    else return res.data
  }).catch((err) => {
    return err
  })
}

// 获取articlefeeds
export const articleOrder = FEED
export function getArticleFeed (category, tags, first, order) {
  const url = baseUrl
  let data = {
    extensions: {
      query: { id: '653b587c5c7c8a00ddf67fc66f989d42' }
    },
    ...defaultField,
    variables: {
      category,
      tags,
      first,
      order,
      after: ''
    }
  }

  return axios.post(url, data).then((res) => { // 成功
    if (res.status === 200) return res.data.data.articleFeed.items
    else return '调用失败'
  }).catch((err) => {
    return err
  })
}
