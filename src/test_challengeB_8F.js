var result = []
var lank = []
var ary = []
var lines = []
/*
lines[0] = "A 1";
lines[1] = "D 6";
lines[2] = "C 2";
lines[3] = "G 4";
lines[4] = "B 70";
lines[5] = "A 10";
lines[6] = "B 5";

lines[0] = "G 0";
lines[1] = "S 3";
lines[2] = "E -2";
*/
lines[0] = 'A -2'
lines[1] = 'E 0'
lines[2] = 'W -5'
lines[3] = 'A -1'
lines[4] = 'E -20'

for (var i = 0; i < lines.length; i++) {
  ary = lines[i].split(' ')
  lank.push(ary[0])
}
for (var l of lank) {
  var score = 0
  for (i = 0; i < lines.length; i++) {
    ary = lines[i].split(' ')
    if (l == ary[0]) {
      score = score + Number.parseInt(ary[1])
    }
  }
  if (result.includes(l + ' ' + score) == false) {
    result.push(l + ' ' + score)
  }
}

function conpareFn(a, b) {
  return b - a
}
var lanks = []
for (i = 0; i < result.length; i++) {
  ary = result[i].split(' ')
  lanks.push(ary[1])
  lanks.sort(conpareFn)
}

for (var ls of lanks) {
  for (i = 0; i < result.length; i++) {
    ary = result[i].split(' ')
    if (ls == Number.parseInt(ary[1])) {
      console.log(ary[0] + ' ' + ls)
    }
  }
}
