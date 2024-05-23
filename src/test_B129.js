var lines = []
lines[0] = '7 4'
lines[1] = '1 10'
lines[2] = '1 1 1 9 4'
lines[3] = '1 1 2 3 3'
lines[4] = '1 1 7 9 1'
lines[5] = '1 1 4 7 3'
lines[6] = '1 1 2 3 2'
lines[7] = '1 1 1 3 1'
lines[8] = '1 1 3 3 3'

lines.shift()
var ary = lines[0].split(' ')
var h = Number.parseInt(ary[0])
var w = Number.parseInt(ary[1])
lines.shift()

var fields = []
init(h, w)
var str = ''
var field = []
harvest = ''
for (var i = 0; i < lines.length; i++) {
  str = lines[i].split(' ')
  var sH = Number.parseInt(str[0]) - 1
  var eH = Number.parseInt(str[1]) - 1
  var sW = Number.parseInt(str[2]) - 1
  var eW = Number.parseInt(str[3]) - 1
  var plantN = Number.parseInt(str[4])
  //console.log(sH, eH, sW, eW, plantN);
  var d = sH
  while (d <= eH) {
    var f = fields[d]
    var c = sW
    while (c <= eW) {
      if (f[c] != '.') {
        harvest = harvest + f[c] + ' '
      }
      f[c] = plantN
      c++
    }
    d++
  }
}
var harvests = harvest.split(' ')
var obj = countUP(harvests)

Object.keys(obj).forEach(function (key) {
  if (key != '') {
    console.log(obj[key])
  }
})

for (var fs of fields) {
  str = fs.join()
  str = str.replaceAll(',', '')
  console.log(str)
}

function init(h, w) {
  var i = 0
  while (i < h) {
    var j = 0
    field = []
    while (j < w) {
      field.push('.')
      j++
    }
    fields.push(field)
    i++
  }
}

function countUP(harvests) {
  var count = {}
  harvests.forEach(function (i) {
    count[i] = (count[i] || 0) + 1
  })
  return count
}
