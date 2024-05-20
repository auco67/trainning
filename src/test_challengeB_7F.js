var lines = []
lines[0] = 'H -2'
lines[1] = 'R 0'
lines[2] = 'W -5'
lines[3] = 'A -1'
lines[4] = 'E -20'

var ary = []
var objs = []
function confirmFc(a, b) {
  return a - b
}
for (var i = 0; i < lines.length; i++) {
  ary = lines[i].split(' ')
  objs.push(ary[1])
  objs.sort(confirmFc)
}
for (var o of objs) {
  for (i = 0; i < lines.length; i++) {
    ary = lines[i].split(' ')
    if (o == Number.parseInt(ary[1])) {
      console.log(ary[0])
    }
  }
}
