// 强制监听获取异步加载的数据和节点
// 在 callbackGet 回调函数中执行获取的方式
// 在 callbackAction 回调函数中执行得到元素之后的行为
export function getAsyncOne (callbackGet, callbackAction) {
  let timer = null // 局部定时器
  let el = null
  let used = 0 // 累计用时
  const limit = 1000 // 超时限定1s

  // 开启定时器
  function timerStart () {
    timer = setTimeout(judge, 20)
  }

  // 清除定时器
  function timerEnd () {
    clearTimeout(timer)
    timer = null
  }

  function judge () {
    el = callbackGet() // 利用回调函数获取节点
    if (timer && el) { // 元素存在
      timerEnd()
      callbackAction('success', {el, timerStart, timerEnd}) // 执行获取成功之后的行为
    } else {
      timerStart()
      used += 20
      if (used >= limit) {
        callbackAction('fail')
      }
    }
  }

  timerStart()
}
