var ary = []
var arys = []
var lines = []
lines[0] = '1 2 3'
lines[1] = '3 4 5'

for (var ay of lines) {
  ary = ay.split(' ')
  ary.sort()
  arys.push(ary)
}
var A = arys[0]
var B = arys[1]
if (A.length == B.length) {
  for (var i = 0; i < B.length; i++) {
    if (A.includes(B[i]) == false) {
      A.push(B[i])
    }
  }
  A.sort()
}
var result = []
for (i = 0; i < A.length; i++) {
  if (i == 0) {
    result.push(A[i])
  } else {
    if (result.includes(A[i]) == false) {
      result.push(A[i])
    }
  }
}
function compareNumbers(a, b) {
  return a - b
}
result.sort(compareNumbers)

var r = result.join()
r = r.replaceAll(',', ' ')
console.log(r)
