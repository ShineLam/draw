// 设置本地缓存
function setLocal(key, val) {
  if (window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify({
      obj: val
    }))
  }
}
// 获取本地缓存
function getLocal(key, clear) {
  if (window.localStorage) {
    var val = window.localStorage.getItem(key)
    if (clear) {
      window.localStorage.removeItem(key)
    }
    return val && JSON.parse(val).obj
  }
}
