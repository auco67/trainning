var ary = [-1, 2, 0, 5]
console.log(ary)

var c = 0
while (c < ary.length) {
  ary.sort(confirmFc)
  c++
}
console.log(ary)

function confirmFc(a, b) {
  return b - a
}
