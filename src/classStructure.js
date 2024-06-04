/*
 * STEP: 1 構造体の作成
 *  クラスの学級委員である A 君は、クラスのみんなに次のような形式でアカウントの情報を送ってもらうよう依頼しました。
 *  名前 年齢 誕生日 出身地
 *  送ってもらったデータを使いやすいように整理したいと思った A 君はクラス全員分のデータを次の形式でまとめることにしました。
 *  User{
 *  　nickname : 名前
 *  　old : 年齢
 *  　birth : 誕生日
 *  　state : 出身地
 *  }
 * クラスメートの情報が与えられるので、それらを以上の形式でまとめたものを出力してください。
 */
function step1() {
  var lines = [3, 'mako 13 08/08 nara', 'megumi 14 11/02 saitama', 'taisei 16 12/04 nagano']
  lines.shift()
  lines.forEach((line) => {
    var ary = line.split(' ')
    var User = {
      nickname: ary[0],
      old: Number.parseInt(ary[1]),
      birth: ary[2],
      state: ary[3],
    }
    console.log('STEP: 1 構造体の作成 User{')
    console.log('STEP: 1 構造体の作成 nickname : ' + User.nickname)
    console.log('STEP: 1 構造体の作成 old : ' + User.old)
    console.log('STEP: 1 構造体の作成 birth : ' + User.birth)
    console.log('STEP: 1 構造体の作成 state : ' + User.state)
    console.log('STEP: 1 構造体の作成 }')
  })
}
step1()

/*
 * STEP: 2 構造体の検索
 *  クラスの学級委員である A 君は、クラスのみんなに次のような形式でアカウントの情報を送ってもらうよう依頼しました。
 *  名前 年齢 誕生日 出身地
 *  送ってもらったデータを使いやすいように整理したいと思った A 君はクラス全員分のデータを次のような構造体でまとめることにしました。
 *  student{
 *  name : 名前
 *  old : 年齢
 *  birth : 誕生日
 *  state : 出身地
 *  }
 * 年齢ごとの生徒の名簿を作る仕事を任された A 君はクラスメイトのうち、決まった年齢の生徒を取り出したいと考えました。
 * 取り出したい生徒の年齢が与えられるので、その年齢の生徒の名前を出力してください。
 */
function step2() {
  var lines = [3, 'mako 13 08/08 nara', 'megumi 14 11/02 saitama', 'taisei 16 12/04 nagano', 14]
  lines.shift()
  var age = Number.parseInt(lines[lines.length - 1])
  lines.pop()
  lines.forEach((line) => {
    var ary = line.split(' ')
    var User = {
      nickname: ary[0],
      old: Number.parseInt(ary[1]),
      birth: ary[2],
      state: ary[3],
    }
    if (age == User.old) {
      console.log('STEP: 2 構造体の検索 ' + User.nickname)
    }
  })
}
step2()

/*
 * STEP: 3 構造体の整列
 *  クラスの学級委員である A 君は、クラスのみんなに次のような形式でアカウントの情報を送ってもらうよう依頼しました。
 *  名前 年齢 誕生日 出身地
 *  送ってもらったデータを使いやすいように整理したいと思った A 君はクラス全員分のデータを次の形式でまとめることにしました。
 *  User{
 *  nickname : 名前
 *  old : 年齢
 *  birth : 誕生日
 *  state : 出身地
 *  }
 * この情報を扱いやすくするために、年齢が昇順になるようにデータを並び替えることにしました。
 * クラスメートの情報が与えられるので、並び替えた後のデータを出力してください。
 */
function step3() {
  var Users = []
  var lines = [3, 'mako 13 08/08 nara', 'taisei 16 12/04 nagano', 'megumi 14 11/02 saitama']
  lines.shift()
  lines.forEach((line) => {
    var ary = line.split(' ')
    var User = {
      nickname: ary[0],
      old: Number.parseInt(ary[1]),
      birth: ary[2],
      state: ary[3],
    }
    Users.push(User)
  })
  Users.sort(function (a, b) {
    return a.old - b.old
  })
  Users.forEach((user) => {
    console.log('STEP: 3 構造体の整列 ' + user.nickname + ' ' + user.old + ' ' + user.birth + ' ' + user.state)
  })
}
step3()

/*
 * STEP: 4 構造体の更新
 *  クラスの学級委員である A 君は、クラスのみんなに次のような形式でアカウントの情報を送ってもらうよう依頼しました。
 *  名前 年齢 誕生日 出身地
 *  送ってもらったデータを使いやすいように整理したいと思った A 君はクラス全員分のデータを次の形式でまとめることにしました。
 *  User{
 *  nickname : 名前
 *  old : 年齢
 *  birth : 誕生日
 *  state : 出身地
 *  }
 * 途中で名前が変わった際にいちいちデータを修正するのが面倒だと思ったあなたは、生徒の構造体と新しい名前を受け取り、
 * その名前を修正する関数 changeName を作成し、それを用いて生徒の名前を更新することにしました。
 * クラスの人数と全員の情報、更新についての情報が与えられるので、入力に従って名前を更新した後のクラスのメンバーの情報を出力してください。
 */
var Users = []
function step4() {
  var lines = ['3 2', 'mako 13 08/08 nara', 'taisei 16 12/04 nagano', 'megumi 14 11/02 saitama', '2 taihei', '3 megu']
  var ay = lines[0].split(' ')
  var N = Number.parseInt(ay[0])
  var cng = []
  lines.shift(9)
  for (var i in lines) {
    if (i < N) {
      var ary = lines[i].split(' ')
      var User = {
        nickname: ary[0],
        old: Number.parseInt(ary[1]),
        birth: ary[2],
        state: ary[3],
      }
      Users.push(User)
    } else {
      cng.push(lines[i])
    }
  }
  cng.forEach((change) => {
    var ary = change.split(' ')
    var index = Number.parseInt(ary[0]) - 1
    var name = ary[1]
    changeName(index, name)
  })
  Users.forEach((user) => {
    console.log('STEP: 4 構造体の更新 ' + user.nickname + ' ' + user.old + ' ' + user.birth + ' ' + user.state)
  })
}
function changeName(index, name) {
  for (var i in Users) {
    if (i == index) {
      Users[i].nickname = name
      break
    }
  }
}
step4()