/*
 * 配列(key、value)の重複するvalueの数をカウントする
 *
 * <INPUT>
 * 配列1行目：配列要素数、植物種類数
 * 配列2行目：畑のサイズ
 * 配列3行目～配列N行目：畑の該当範囲に植物を植える
 *
 * <OUTPUT>
 * 収穫した植物の数と現状の畑にどんな植物が植えられているかを回答する
 *
 * 収穫：植物を植える前に、畑に植物が植えられていた場合、その植物は収穫される
 * 例えば、植物１を畑の1行目3，4列目に植えようとしたところ、その範囲に植物２が
 * 植えられていた場合、植物２を収穫する。つまり収穫した植物は、植物２を２つ収穫
 * したとする
 */

var lines = []
lines[0] = '7 4' //配列の要素数(7)　植物種類数(4)
lines[1] = '1 10' //畑 行(1)　畑 列(10)
lines[2] = '1 1 1 9 4' //畑 行範囲(1)　畑 行範囲(1)　畑 列範囲(1)　畑 列範囲(9)　植物種類番号(4)
lines[3] = '1 1 2 3 3' //畑 行範囲(1)　畑 行範囲(1)　畑 列範囲(2)　畑 列範囲(3)　植物種類番号(3)
lines[4] = '1 1 7 9 1' //畑 行範囲(1)　畑 行範囲(1)　畑 列範囲(7)　畑 列範囲(9)　植物種類番号(1)
lines[5] = '1 1 4 7 3' //畑 行範囲(1)　畑 行範囲(1)　畑 列範囲(4)　畑 列範囲(7)　植物種類番号(3)
lines[6] = '1 1 2 3 2' //畑 行範囲(1)　畑 行範囲(1)　畑 列範囲(3)　畑 列範囲(3)　植物種類番号(2)
lines[7] = '1 1 1 3 1' //畑 行範囲(1)　畑 行範囲(1)　畑 列範囲(1)　畑 列範囲(3)　植物種類番号(1)
lines[8] = '1 1 3 3 3' //畑 行範囲(1)　畑 行範囲(1)　畑 列範囲(3)　畑 列範囲(3)　植物種類番号(3)

lines.shift()
var ary = lines[0].split(' ')
var h = Number.parseInt(ary[0])
var w = Number.parseInt(ary[1])
lines.shift()

var fields = []
init(h, w)
var str = ''
var field = []
var harvest = ''
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
