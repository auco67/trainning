var X = 'A'
var Y = 'D'
var C = 'C'
var alfapet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var Xp = alfapet.indexOf(X, 0)
var Yp = alfapet.indexOf(Y, 0) + 1
var range = alfapet.slice(Xp, Yp)
if (range.includes(C)) {
  console.log('true')
} else {
  console.log('false')
}
