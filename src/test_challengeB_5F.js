var C = 'A'
var S = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFG'
var c = 0
var t = 0
while (c < S.length) {
  if (C == S.slice(c, c + 1)) {
    t++
  }
  c++
}
console.log(t)
