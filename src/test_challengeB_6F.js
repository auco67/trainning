var s = 'Ji'
var t = 'JiJiiJiIjiIJjIJi'
var c = 0
var r = 0
var p = 0
if (s.length >= 1 && s.length <= 10000 && t.length >= 1 && t.length <= 10000) {
  while (t.indexOf(s, p) != -1) {
    p = t.indexOf(s, p) + 1
    r++
  }
}
console.log(r)
