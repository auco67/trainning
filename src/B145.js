process.stdin.resume()
process.stdin.setEncoding('utf8')
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = []
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
reader.on('line', (line) => {
  lines.push(line)
})
reader.on('close', () => {
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var K = Number.parseInt(ary[1])
  lines.shift()
  var cards = []
  var bingo = []
  /*
  N = 3;
  K = 8;
  lines[0] = "13 3 9";
  lines[1] = "8 0 2";
  lines[2] = "16 17 15";
  lines[3] = "7 14 9 10 3 13 16 8";
  */
  for (var i = 0; i < lines.length; i++) {
    var card = []
    var c = 0
    ary = lines[i].split(' ')
    if (i < N) {
      while (c < ary.length) {
        if (ary[c] == '0') {
          card.push('')
        } else {
          card.push("'" + ary[c] + "'")
        }
        c++
      }
      cards.push(card)
    } else {
      bingo = ary
    }
  }
  //console.log(cards, bingo);
  var str = ''
  for (var b of bingo) {
    for (i = 0; i < cards.length; i++) {
      if (cards[i].includes("'" + b + "'")) {
        str = cards[i].join()
        str = str.replace("'" + b + "'", '')
        cards[i] = str.split(',')
      }
    }
  }

  str = ''
  var result = 0
  var countH = 0
  var countL = 0
  var countR = 0
  strH = ''
  for (i = 0; i < cards.length; i++) {
    //console.log(cards[i]);
    str = cards[i].join()
    str = str.replaceAll("'", '')
    cards[i] = str.split(',')
    var countW = 0

    for (var j = 0; j < cards[i].length; j++) {
      if (cards[i][j] == '') {
        countW++
      }
      if (countW == 3) {
        result++
      }
    }
    if (cards[i][i] == '') {
      countL++
    }
    if (countL == 3) {
      result++
    }
    if (cards[i][cards.length - 1 - i] == '') {
      countR++
    }
    if (countR == 3) {
      result++
    }
  }

  var y = 0
  var z = 0
  while (y < N) {
    strH = strH + cards[y][z]
    //console.log(y, z, strH);
    y++
    if (y == N) {
      if (strH == '') {
        result++
      }
      y = 0
      z++
    }
    if (z == N) {
      break
    }
  }

  console.log(result)
})
