var lines = []
lines[0] = '12 6'
lines[1] = '4 6'
lines[2] = '4 8'
lines[3] = '4 10'
lines[4] = '4 12'
lines[5] = '4 2'
lines[6] = '4 4'

var ary = lines[0].split(' ')
var n = Number.parseInt(ary[0])
var m = Number.parseInt(ary[1])
lines.shift()
var seats = new Array(26)
var count = 0
for (var i = 0; i < lines.length; i++) {
  ary = lines[i].split(' ')
  var start = Number.parseInt(ary[1]) - 1
  var inc = Number.parseInt(ary[0]) - 1
  var end = start + inc
  if (checkSeat(start, end) == false) {
    giveSeat(start, end)
  }
}
console.log(count)
function checkSeat(start, end) {
  var c = start
  var insertFg = false
  while (c <= end) {
    if (seats[c] != undefined) {
      insertFg = true
      break
    }
    c++
  }
  return insertFg
}

function giveSeat(start, end) {
  var c = start
  while (c <= end) {
    seats[c] = 'O'
    count++
    c++
  }
}
