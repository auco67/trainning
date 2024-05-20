class student {
  constructor() {
    var nickname
    var age
    var birth
    var state
  }
  changeName(name) {
    this.nickname = name
  }
}
var N = 2
var K = 2
var s = []
var c = 0
var lines = []
lines[0] = 'mayumi 30 01-01 tokyo'
lines[1] = 'ken 35 12-31 fukuoka'
lines[2] = '1 mayuko'
lines[3] = '2 kenshiro'

for (var i = 0; i < lines.length; i++) {
  s[c] = new student()
  ary = lines[i].split(' ')
  if (i < N) {
    s[c].nickname = ary[0]
    s[c].age = ary[1]
    s[c].birth = ary[2]
    s[c].state = ary[3]
    c++
  }
  if (i >= N) {
    var num = Number.parseInt(ary[0]) - 1
    for (var j = 0; j < s.length; j++) {
      if (j == num) {
        s[j].changeName(ary[1])
      }
    }
  }
}
s.pop()
for (i = 0; i < s.length; i++) {
  console.log(s[i].nickname + ' ' + s[i].age + ' ' + s[i].birth + ' ' + s[i].state)
}
