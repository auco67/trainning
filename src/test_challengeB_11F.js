var n = 0
var m = 0
var users = []
var types = []
var lines = []
lines[0] = '5'
lines[1] = 'Kyoko shishiza'
lines[2] = 'Rio futagoza'
lines[3] = 'Tsubame otomeza'
lines[4] = 'KurodaSensei yagiza'
lines[5] = 'NekoSensei mizugameza'
lines[6] = '5'
lines[7] = 'shishiza the_first_person'
lines[8] = 'yagiza the_second_person'
lines[9] = 'otomeza the_first_cat'
lines[10] = 'mizugameza the_first_dog'
lines[11] = 'futagoza NekoSensei'

for (var i = 0; i < lines.length; i++) {
  var ary = []
  if (i == 0) {
    n = Number.parseInt(lines[i])
  } else {
    ary = lines[i].split(' ')
    if (i <= n) {
      var user = {
        name: '',
        type: '',
      }
      user.name = ary[0]
      user.type = ary[1]
      users.push(user)
    } else if (i > n + 1) {
      var type = {
        name: '',
        discription: '',
      }
      type.name = ary[0]
      type.discription = ary[1]
      types.push(type)
    }
  }
}
for (var u of users) {
  var str = ''
  for (var t of types) {
    if (u.type == t.name) {
      str = u.name + ' ' + t.discription
      console.log(str)
      break
    }
  }
}
