var lines = []

lines[0] = '3 6 7'
lines[1] = 'a'
lines[2] = 'aloha'
lines[3] = 'app'
lines[4] = 'az'
lines[5] = 'paiza'
lines[6] = 'warp'
lines[7] = 'app'
lines[8] = 'paiza'
lines[9] = 'a'
lines[10] = 'aloha'
lines[11] = 'paiza'

var ary = lines[0].split(' ')
var N = Number.parseInt(ary[0])
var K = Number.parseInt(ary[1])
var M = Number.parseInt(ary[2])
lines.shift()
var dictionaly = []
var players = []
var plays = []
var c = 1
while (c <= N) {
  players.push(c)
  c++
}
for (var i = 0; i < lines.length; i++) {
  if (i < K) {
    dictionaly.push(lines[i])
  }
  if (i >= K) {
    plays.push(lines[i])
  }
}
c = 0
var char = ''
plays.forEach((play) => {
  if (dictionaly.includes(play)) {
    if (char != '' && play.slice(0, 1) != char) {
      players[c] = ''
    }
    if (play.slice(-1) == 'z') {
      players[c] = ''
      char = ''
    } else {
      char = play.slice(-1)
    }
  } else {
    players[c] = ''
    char = ''
  }

  c++
  if (c == N) c = 0
})

players.forEach((player) => {
  if (player != '') console.log(player)
})
