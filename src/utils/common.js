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

/**
 * 日期格式化
 */
Date.prototype.format = function( /*format*/ ) {
  var fmt = arguments.length ? arguments[0] : "yyyy-MM-dd hh:mm:ss";
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  }
  return fmt;
}
