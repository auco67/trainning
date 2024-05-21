var X = 'X'
var O = 'O'
var xTorF = false
var oTorF = false
var arys = []
var lines = []

lines[0] = 'XXXXO'
lines[1] = 'OOXOX'
lines[2] = 'OOOXO'
lines[3] = 'OOXO.'
lines[4] = 'O....'

for (var i = 0; i < lines.length; i++) {
  var ary = []
  var Xc = 0
  var Oc = 0
  for (var j = 0; j < lines[i].length; j++) {
    var str = lines[i].slice(j, j + 1)
    if (str == X) Xc++
    if (str == O) Oc++
    ary.push(str)
  }
  if (Xc == 5) xTorF = true
  if (Oc == 5) oTorF = true
  arys.push(ary)
}
if (Xc == 5) xTorF = true
if (Oc == 5) oTorF = true
if (
  (arys[0][0] == X && arys[1][1] == X && arys[2][2] == X && arys[3][3] == X && arys[4][4] == X) ||
  (arys[0][4] == X && arys[1][3] == X && arys[2][2] == X && arys[3][1] == X && arys[4][0] == X)
) {
  xTorF = true
}
if (
  (arys[0][0] == O && arys[1][1] == O && arys[2][2] == O && arys[3][3] == O && arys[4][4] == O) ||
  (arys[0][4] == O && arys[1][3] == O && arys[2][2] == O && arys[3][1] == O && arys[4][0] == O)
) {
  oTorF = true
}
for (i = 0; i < arys.length; i++) {
  if (arys[0][i] == X && arys[1][i] == X && arys[2][i] == X && arys[3][i] == X && arys[4][i] == X) {
    xTorF = true
  }
  if (arys[0][i] == O && arys[1][i] == O && arys[2][i] == O && arys[3][i] == O && arys[4][i] == O) {
    oTorF = true
  }
}

if (xTorF) {
  console.log(X)
}
if (oTorF) {
  console.log(O)
}
if (xTorF == false && oTorF == false) {
  console.log('D')
}
