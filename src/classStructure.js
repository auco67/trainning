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
//step1()

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
//step2()

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
//step3()

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
//step4()

/*
 * STEP: 5 クラスの作成
 *  エンジニアであり、社員を管理を管理する立場にあるあなたは、効率的に社員を管理するために、
 *  各社員の社員番号 number と名前 name を持ち、加えて情報を返す関数を持つような構造体、
 *  すなわち次のようなメンバ変数とメンバ関数を持つ社員クラス class employee を作成することにしました。
 *  メンバ変数: 整数 number, 文字列 name
 *  メンバ関数:
 *   getnumber(){
 *      return number;
 *   }
 *   getname(){
 *     return name;
 *   }
 *  入力で make number name と入力された場合は変数に number , name を持つ社員を作成し、
 *  getnum n と入力された場合は n 番目に作成された社員の number を、getname n と入力された場合は
 *  n 番目に作成された社員の name を出力してください。
 */
function step5() {
  var lines = [
    7,
    'make 2742 mako',
    'getnum 1',
    'make 2782 taisei',
    'getname 2',
    'make 31 megumi',
    'getname 1',
    'getname 3',
  ]
  lines.shift()
  var persons = []
  var i = 0
  lines.forEach((msg) => {
    var ary = msg.split(' ')
    var person = new Object()
    i = ary[1] - 1
    if (msg.includes('make')) {
      person = new employee(Number.parseInt(ary[1]), ary[2])
      persons.push(person)
    } else if (msg.includes('getnum')) {
      console.log('STEP: 5 クラスの作成 ' + persons[i].getNum())
    } else if (msg.includes('getname')) {
      console.log('STEP: 5 クラスの作成 ' + persons[i].getName())
    }
  })
}
class employee {
  constructor(number, name) {
    this.number = number
    this.name = name
  }

  getNum() {
    return this.number
  }

  getName() {
    return this.name
  }
}
//step5()

/*
 * STEP: 6 コンストラクタ
 *  エンジニアのあなたの会社には、既に次のような社員クラス class employee が存在しています。
 *  メンバ変数: 整数 number, 文字列 name
 *  メンバ関数:
 *   getnumber(){
 *      return number;
 *   }
 *   getname(){
 *     return name;
 *   }
 *  現状、この社員クラスの全てのメンバ変数・メンバ関数を設定するためには、
 *  インスタンス名.変数名 = 変数 といった具合に直接代入をしなくてはなりません。
 *  それは面倒なので、コンストラクタという機能を用いて、インスタンスを作成する際に
 *  インスタンス名 = new クラス名(number,name) とすることでメンバ変数を設定できるように書き換えましょう。
 *  入力で make number name と入力された場合は各変数に number , name を持つ社員を作成し、
 *  getnum nと入力された場合は n 番目に作成された社員の number を、getname n と入力された場合は
 *  n 番目に作成された社員の name を出力してください。
 */
function step6() {
  var lines = [
    7,
    'make 2742 mako',
    'getnum 1',
    'make 2782 taisei',
    'getname 2',
    'make 31 megumi',
    'getname 1',
    'getname 3',
  ]
  lines.shift()
  var persons = []
  var i = 0
  lines.forEach((msg) => {
    var ary = msg.split(' ')
    var person = new Object()
    i = ary[1] - 1
    if (msg.includes('make')) {
      person = new employee(Number.parseInt(ary[1]), ary[2])
      persons.push(person)
    } else if (msg.includes('getnum')) {
      console.log('STEP: 6 コンストラクタ ' + persons[i].getNum())
    } else if (msg.includes('getname')) {
      console.log('STEP: 6 コンストラクタ ' + persons[i].getName())
    }
  })
}
//step6()

/*
 * STEP: 7 クラスのメンバの更新
 *  エンジニアであり、社員を管理する立場にあるあなたが勤める会社には、効率的に社員を管理するために、
 * 次のようなメンバ変数とメンバ関数を持つ社員クラス class employee が存在しています。
 *  メンバ変数: 整数 number, 文字列 name
 *  メンバ関数:
 *   getnumber(){
 *      return number;
 *   }
 *   getname(){
 *     return name;
 *   }
 * しかし、この社員クラスについて、社員番号や名前が変わった際にいちいち手動で更新するのは面倒だと感じたあなたは、
 * 引数に元の社員番号と新しい社員番号を指定すれば、新しい社員番号に更新してくれる関数 change_num と
 * 引数に元の名前と新しい名前を指定すれば、新しい名前に更新してくれる関数 change_name を作成することにしました。
 * 入力で make number name と入力された場合は変数にnumber, nameを持つ社員を作成し、getnum nと入力された場合は
 * n 番目に作成された社員の number を、getname n と入力された場合は n 番目に作成された社員の name を出力してください。
 * また、 change_num n newnum と入力された場合は、n 番目に作成された社員の number を、 newnum に変更し、
 * change_name n newname と入力された場合は、n 番目に作成された社員の name を、 newname に変更してください。
 */
function step7() {
  var lines = [
    12,
    'make 2742 makoto',
    'getnum 1',
    'make 2782 taro',
    'getname 1',
    'getname 2',
    'change_num 2 9927',
    'change_name 1 mako',
    'getnum 2',
    'make 31 meu',
    'change_name 3 meumeu',
    'getnum 3',
    'getname 1',
  ]
  lines.shift()
  var persons = []
  var i = 0
  lines.forEach((msg) => {
    var ary = msg.split(' ')
    i = Number.parseInt(ary[1]) - 1
    var person = new Object()
    if (msg.includes('make')) {
      person = new employee2(Number.parseInt(ary[1]), ary[2])
      persons.push(person)
    } else if (msg.includes('getnum')) {
      console.log('STEP: 7 クラスのメンバの更新 ' + persons[i].getNum())
    } else if (msg.includes('getname')) {
      console.log('STEP: 7 クラスのメンバの更新 ' + persons[i].getName())
    } else if (msg.includes('change_num')) {
      persons[i].changeNum(ary[2])
    } else if (msg.includes('change_name')) {
      persons[i].changeName(ary[2])
    }
  })
}
class employee2 extends employee {
  getNum() {
    return this.number
  }

  getName() {
    return this.name
  }

  changeNum(number) {
    this.number = number
  }

  changeName(name) {
    this.name = name
  }
}
//step7()

/*
 * STEP: 8 クラスの継承
 *  A 国の大衆居酒屋で働きながらクラスの勉強をしていたあなたは、お客さんをクラスに見立てることで店内の情報を管理できることに気付きました。
 *  全てのお客さんは、ソフトドリンクと食事を頼むことができます。
 *  A 国の法律では、 20 歳以上のお客さんは成人とみなされ、お酒を頼むことができます。
 *  20 歳未満のお客さんは未成年とみなされ、お酒を頼もうとした場合はその注文は取り消されます。
 *  また、お酒を頼んだ場合、以降の全ての食事の注文 が毎回 200 円引きになります.
 *  店内の全てのお客さんの数と注文の回数、各注文をしたお客さんの番号とその内容が与えられるので、各お客さんの会計を求めてください。
 *  注文について、20 歳未満のお客さんにできて、 20 歳以上のお客さんにできないことはないので、
 *  20歳未満のお客さんのクラスを作成して、それを継承して 20歳以上のお客さんのクラスを作成することで効率よく実装することができます。
 */
function step8() {
  var lines = [
    '7 7',
    62,
    91,
    29,
    33,
    79,
    15,
    91,
    '2 food 3134',
    '7 alcohol 2181',
    '6 softdrink 4631',
    '3 softdrink 3120',
    '4 softdrink 4004',
    '6 alcohol 1468',
    '6 alcohol 1245',
  ]
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var C = Number.parseInt(ary[1])
  lines.shift()
  var orders = []
  var persons = []
  for (var i in lines) {
    if (i < N) {
      var person = new custmer(lines[i])
      persons.push(person)
    } else {
      orders.push(lines[i])
    }
  }
  orders.forEach((order) => {
    var ary2 = order.split(' ')
    var cNo = Number.parseInt(ary2[0]) - 1
    var cOdr = ary2[1]
    var cP = Number.parseInt(ary2[2])
    for (var p_i in persons) {
      if (p_i == cNo) {
        if (cOdr == 'food') {
          persons[p_i].eatFood(cP)
        } else if (cOdr == 'softdrink') {
          persons[p_i].drinkSoft(cP)
        } else if (cOdr == 'alcohol') {
          persons[p_i].drinkAlcohol(cP)
        }
        break
      }
    }
  })
  persons.forEach((person) => {
    console.log('STEP: 8 クラスの継承 ' + person.getTotal())
  })
}
class custmer {
  constructor(age) {
    this.age = age
    this.total = 0
    this.off = false
  }
  eatFood(price) {
    if (this.off) {
      this.total += price - 200
    } else {
      this.total += price
    }
  }

  drinkSoft(price) {
    this.total += price
  }

  drinkAlcohol(price) {
    if (this.age >= 20) {
      this.off = true
      this.total += price
    }
  }

  getTotal() {
    return this.total
  }
}
//step8()

/*
 * STEP: 9 デフォルト引数
 *  居酒屋で働きながらクラスの勉強をしていたあなたは、お客さんをクラスに見立てることで店内の情報を管理できることに気付きました。
 *  全てのお客さんは、ソフトドリンクと食事を頼むことができます。加えて 20 歳以上のお客さんはお酒を頼むことができます。
 *  20 歳未満のお客さんがお酒を頼もうとした場合はその注文は取り消されます。
 *  また、お酒（ビールを含む）を頼んだ場合、以降の全ての食事の注文 が毎回 200 円引きになります。
 *  今回、この居酒屋でビールフェスをやることになり、ビールの注文が相次いだため、いちいちビールの値段である 500 円を書くのをやめ、
 *  伝票に注文の種類と値段を書く代わりに 0 とだけを書くことになりました。
 *  店内の全てのお客さんの数と注文の回数、各注文をしたお客さんの番号とその内容が与えられるので、各お客さんの会計を求めてください。
 */
function step9() {
  var lines = [
    '5 10',
    1,
    13,
    31,
    74,
    34,
    '1 food 1088',
    '4 alcohol 3210',
    '1 alcohol 599',
    '2 alcohol 602',
    '2 softdrink 4375',
    '4 food 1752',
    '2 0',
    '5 alcohol 4565',
    '3 0',
    '2 0',
  ]
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var C = Number.parseInt(ary[1])
  lines.shift()
  var orders = []
  var persons = []
  for (var i in lines) {
    if (i < N) {
      var person = new custmer2(lines[i])
      persons.push(person)
    } else {
      orders.push(lines[i])
    }
  }
  orders.forEach((order) => {
    var ary2 = order.split(' ')
    var cNo = Number.parseInt(ary2[0]) - 1
    var cOdr = ary2[1]
    var cP = Number.parseInt(ary2[2])
    for (var p_i in persons) {
      if (p_i == cNo) {
        if (cOdr == 'food') {
          persons[p_i].eatFood(cP)
        } else if (cOdr == 'softdrink') {
          persons[p_i].drinkSoft(cP)
        } else if (cOdr == 'alcohol') {
          persons[p_i].drinkAlcohol(cP)
        } else {
          persons[p_i].drinkBeer()
        }
        break
      }
    }
  })

  persons.forEach((person) => {
    console.log('STEP: 9 デフォルト引数 ' + person.getTotal())
  })
}
class custmer2 extends custmer {
  eatFood(price) {
    if (this.off) {
      this.total += price - 200
    } else {
      this.total += price
    }
  }

  drinkSoft(price) {
    this.total += price
  }

  drinkAlcohol(price) {
    if (this.age >= 20) {
      this.off = true
      this.total += price
    }
  }

  drinkBeer() {
    if (this.age >= 20) {
      this.off = true
      this.total += 500
    }
  }
  getTotal() {
    return this.total
  }
}
//step9()

/*
 * STEP: 10 静的メンバ
 *  居酒屋で働きながらクラスの勉強をしていたあなたは、お客さんをクラスに見立てることで勤務時間中の店内の人数や注文の情報を管理できることに気付きました。
 *  全てのお客さんは、ソフトドリンクと食事を頼むことができます。加えて 20 歳以上のお客さんはお酒を頼むことができます。
 *  20 歳未満のお客さんがお酒を頼もうとした場合はその注文は取り消されます。
 *  また、お酒（ビールを含む）を頼んだ場合、以降の全ての食事の注文 が毎回 200 円引きになります。
 *  今回、この居酒屋でビールフェスをやることになり、ビールの注文が相次いだため、いちいちビールの値段である 500 円を書くのをやめ、
 *  注文の種類と値段を書く代わりに 0 とだけを書くことになりました。
 *  勤務時間の初めに店内にいるお客さんの人数と与えられる入力の回数、各注文をしたお客さんの番号とその内容、または退店したお客さんの番号が与えられます。
 *  お客さんが退店する場合はそのお客さんの会計を出力してください。勤務時間中に退店した全てのお客さんの会計を出力したのち、
 *  勤務時間中に退店した客の人数を出力してください。
 */
function step10() {
  var lines = [
    '120 245',
    84,
    57,
    8,
    34,
    29,
    12,
    18,
    39,
    55,
    44,
    85,
    18,
    67,
    100,
    91,
    67,
    54,
    96,
    1,
    45,
    19,
    78,
    3,
    77,
    39,
    20,
    25,
    76,
    43,
    37,
    34,
    94,
    100,
    45,
    74,
    73,
    95,
    31,
    25,
    3,
    89,
    41,
    57,
    70,
    97,
    73,
    35,
    77,
    96,
    72,
    43,
    9,
    17,
    26,
    29,
    95,
    97,
    65,
    3,
    33,
    44,
    4,
    52,
    85,
    61,
    11,
    79,
    8,
    5,
    59,
    46,
    49,
    4,
    30,
    92,
    43,
    56,
    91,
    34,
    92,
    75,
    99,
    84,
    31,
    35,
    8,
    25,
    23,
    10,
    14,
    54,
    31,
    80,
    27,
    18,
    16,
    47,
    73,
    60,
    74,
    35,
    92,
    9,
    59,
    28,
    33,
    12,
    62,
    28,
    97,
    86,
    75,
    84,
    19,
    27,
    57,
    89,
    49,
    44,
    32,
    '54 softdrink 694',
    '114 softdrink 4860',
    '99 alcohol 4395',
    '14 softdrink 1167',
    '102 A',
    '3 A',
    '101 alcohol 4785',
    '21 A',
    '9 food 3716',
    '59 alcohol 332',
    '69 food 1414',
    '13 softdrink 1034',
    '54 0',
    '50 A',
    '9 softdrink 3786',
    '80 A',
    '106 food 1918',
    '93 food 4512',
    '5 food 1901',
    '5 softdrink 554',
    '110 0',
    '53 food 2109',
    '92 softdrink 3119',
    '34 0',
    '39 food 2900',
    '87 0',
    '91 softdrink 3576',
    '79 alcohol 4243',
    '108 softdrink 4058',
    '11 A',
    '52 alcohol 471',
    '69 food 4990',
    '49 alcohol 1335',
    '100 softdrink 1728',
    '69 0',
    '95 softdrink 2955',
    '72 A',
    '10 0',
    '61 food 4953',
    '115 softdrink 4502',
    '27 0',
    '40 alcohol 3640',
    '92 0',
    '99 A',
    '8 food 2013',
    '63 softdrink 1621',
    '44 food 4421',
    '5 softdrink 554',
    '48 softdrink 4935',
    '111 alcohol 4095',
    '9 A',
    '118 alcohol 654',
    '110 alcohol 1749',
    '59 alcohol 314',
    '118 A',
    '13 A',
    '59 alcohol 1996',
    '78 A',
    '32 0',
    '8 0',
    '24 0',
    '37 0',
    '65 food 3830',
    '116 0',
    '30 A',
    '109 food 2940',
    '111 softdrink 3419',
    '77 food 4333',
    '96 food 3284',
    '82 food 1142',
    '7 A',
    '66 softdrink 3025',
    '83 0',
    '110 0',
    '87 softdrink 4892',
    '31 softdrink 4103',
    '12 0',
    '90 alcohol 3862',
    '23 food 1082',
    '94 softdrink 3095',
    '33 softdrink 4558',
    '96 A',
    '23 softdrink 2513',
    '39 food 2281',
    '60 softdrink 2691',
    '45 alcohol 3386',
    '31 softdrink 596',
    '37 A',
    '91 softdrink 1448',
    '1 food 3535',
    '51 A',
    '22 0',
    '19 alcohol 3420',
    '26 0',
    '107 alcohol 459',
    '106 alcohol 1943',
    '116 A',
    '24 A',
    '117 softdrink 4188',
    '117 food 3868',
    '76 food 3456',
    '46 A',
    '92 alcohol 3010',
    '44 softdrink 3731',
    '18 A',
    '85 softdrink 1689',
    '119 alcohol 2948',
    '95 food 3097',
    '42 alcohol 681',
    '81 A',
    '44 alcohol 2555',
    '63 softdrink 1360',
    '65 A',
    '83 food 3732',
    '5 0',
    '38 0',
    '14 A',
    '10 alcohol 1995',
    '34 softdrink 1458',
    '98 A',
    '64 A',
    '111 A',
    '57 food 1912',
    '53 softdrink 2974',
    '110 food 1761',
    '10 food 2663',
    '103 food 4852',
    '113 softdrink 3340',
    '83 alcohol 1550',
    '59 food 840',
    '107 0',
    '35 A',
    '32 softdrink 2133',
    '97 alcohol 4497',
    '22 0',
    '16 A',
    '32 0',
    '105 A',
    '40 food 1085',
    '74 food 3224',
    '59 food 3412',
    '23 0',
    '68 food 4583',
    '63 A',
    '82 alcohol 2530',
    '107 A',
    '103 food 2967',
    '73 food 2418',
    '103 A',
    '15 softdrink 3952',
    '36 A',
    '8 alcohol 1593',
    '28 softdrink 1107',
    '73 alcohol 4078',
    '95 food 3593',
    '31 food 3895',
    '2 alcohol 3780',
    '85 softdrink 2274',
    '108 food 2481',
    '44 softdrink 3498',
    '108 0',
    '62 alcohol 1226',
    '108 A',
    '85 alcohol 1191',
    '88 A',
    '38 softdrink 2820',
    '34 alcohol 4199',
    '22 softdrink 3709',
    '42 0',
    '57 A',
    '58 A',
    '49 softdrink 2388',
    '41 softdrink 2522',
    '4 softdrink 2511',
    '26 0',
    '44 alcohol 473',
    '29 A',
    '27 food 4068',
    '92 food 803',
    '45 alcohol 432',
    '2 0',
    '20 alcohol 2508',
    '104 0',
    '87 alcohol 4283',
    '73 A',
    '48 alcohol 1765',
    '95 A',
    '55 food 2584',
    '23 alcohol 4628',
    '40 0',
    '91 softdrink 673',
    '33 food 2666',
    '31 softdrink 4750',
    '74 softdrink 2914',
    '69 0',
    '75 A',
    '100 0',
    '67 alcohol 2511',
    '85 food 4209',
    '87 alcohol 3936',
    '40 alcohol 4624',
    '76 softdrink 3166',
    '41 food 1770',
    '94 softdrink 526',
    '69 A',
    '44 A',
    '34 food 596',
    '104 0',
    '94 A',
    '82 softdrink 2180',
    '60 A',
    '27 food 3356',
    '1 0',
    '89 0',
    '71 alcohol 2831',
    '54 A',
    '2 A',
    '83 alcohol 2082',
    '39 food 4827',
    '27 alcohol 2956',
    '62 0',
    '31 0',
    '17 softdrink 815',
    '38 softdrink 4237',
    '27 food 3576',
    '56 softdrink 3433',
    '5 softdrink 783',
    '89 softdrink 4090',
    '106 food 4555',
    '110 softdrink 3951',
    '56 alcohol 2443',
    '42 softdrink 2445',
    '74 alcohol 3814',
    '117 softdrink 2578',
    '114 A',
    '92 A',
    '1 0',
    '26 alcohol 2666',
    '59 0',
    '43 A',
    '71 softdrink 2667',
    '45 food 3944',
    '23 alcohol 1128',
    '45 food 1524',
    '66 0',
  ]
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var C = Number.parseInt(ary[1])
  lines.shift()
  var orders = []
  var persons = []
  for (var i in lines) {
    if (i < N) {
      var person = new custmer2(lines[i])
      persons.push(person)
    } else {
      orders.push(lines[i])
    }
  }
  var counter = 0
  orders.forEach((order) => {
    var ary2 = order.split(' ')
    var cNo = Number.parseInt(ary2[0]) - 1
    var cOdr = ary2[1]
    var cP = Number.parseInt(ary2[2])
    for (var p_i in persons) {
      if (p_i == cNo) {
        if (cOdr == 'food') {
          persons[p_i].eatFood(cP)
        } else if (cOdr == 'softdrink') {
          persons[p_i].drinkSoft(cP)
        } else if (cOdr == 'alcohol') {
          persons[p_i].drinkAlcohol(cP)
        } else if (cOdr == '0') {
          persons[p_i].drinkBeer()
        } else if (cOdr == 'A') {
          console.log('STEP: 10 静的メンバ  ' + persons[p_i].getTotal())
          counter++
        }
        break
      }
    }
  })
  console.log('STEP: 10 静的メンバ  ' + counter)
}
//step10()

/*
 * STEP: 11 出口のない迷路
 *  洞窟を探検していたあなたは出口のない迷路に迷い込んでしまいました。
 *  脱出するには、迷路の地点を与えられた指示通りに移動し、移動で訪れた（移動の開始・終了地点を含む）地点に置かれたアルファベットを
 *  つなげた文字列を呪文として唱える必要があります。
 *  各頂点からは、他の頂点に向かって一方通行の 2 つの道が伸びています。
 *  各ポイントの情報と移動の指示が与えられるので、呪文となる文字列を出力してください。
 */
function step11() {
  //var lines = ['4 4 1', 'p 2 4', 'a 3 1', 'i 4 2', 'z 1 2', 1, 1, 1, 2]
  var lines = ['5 10 5', 'o 5 4', 'f 1 5', 'b 1 2', 'k 1 5', 'k 2 4', 1, 2, 2, 2, 2, 2, 2, 2, 1, 1]
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var K = Number.parseInt(ary[1])
  var S = Number.parseInt(ary[2])
  lines.shift()
  var points = []
  var moves = []
  for (var i in lines) {
    if (i < N) {
      var temp = lines[i].split(' ')
      var p = new point(temp[0], Number.parseInt(temp[1]) - 1, Number.parseInt(temp[2]) - 1)
      points.push(p)
    } else {
      moves.push(lines[i])
    }
  }
  var letter = points[S - 1].char
  var now = S - 1
  for (var i = 0; i < K; i++) {
    var m = moves[i] - 1
    now = points[now].ary[m]
    letter = letter + points[now].char
  }
  console.log('STEP: 11 出口のない迷路 ' + letter)
}
class point {
  constructor(char, r1, r2) {
    this.char = char
    this.ary = new Array(r1, r2)
  }
}
//step11()

/*
 * STEP: 12 RPG
 *  A 村にたびたび魔物が訪れるため、 1 〜 N 番の番号が割り当てられた N 人の勇者を雇うことにしました。
 *  勇者には次のようなステータスを持ちます。
 *   レベル l_i
 *   体力 h_i
 *   攻撃力 a_i
 *   防御力 d_i
 *   素早さ s_i
 *   賢さ c_i
 *   運 f_i
 *  また、各勇者には次のようなイベントが発生します。
 *   levelup h a d s c f
 *   レベルが 1 上昇
 *   体力が h 上昇
 *   攻撃力が a 上昇
 *   防御力が d 上昇
 *   素早さが s 上昇
 *   賢さが c 上昇
 *   運が f 上昇
 *
 *  muscle_training h a
 *  体力が h 上昇
 *  攻撃力が a 上昇
 *  running d s
 *  防御力が d 上昇
 *  素早さが s 上昇
 *  study c
 *  賢さが c 上昇
 *  pray f
 *  運が f 上昇
 * 各勇者の初期ステータスと起こるイベントの回数、また、起こるイベントとその対象の勇者の番号が与えられるので、
 * 全てのイベントが終わった後の各勇者のステータスを出力してください。
 */
function step12() {
  var lines = [
    '1 3',
    '23 128 533 552 44 69 420',
    '1 muscle_training 565 241',
    '1 study 132',
    '1 levelup 379 585 4 145 276 8',
  ]
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var K = Number.parseInt(ary[1])
  lines.shift()
  ary = lines[0].split(' ')
  var braves = []
  var ivents = []
  for (var i = 0; i < lines.length; i++) {
    var ay = lines[i].split(' ')
    if (i < N) {
      var brave = new Brave(
        Number.parseInt(ay[0]),
        Number.parseInt(ay[1]),
        Number.parseInt(ay[2]),
        Number.parseInt(ay[3]),
        Number.parseInt(ay[4]),
        Number.parseInt(ay[5]),
        Number.parseInt(ay[6]),
      )
      braves.push(brave)
    } else {
      ivents.push(lines[i])
    }
  }

  for (var i = 0; i < K; i++) {
    var temp = ivents[i].split(' ')
    var bNum = temp[0] - 1
    var ivent = temp[1]
    if (ivent == 'levelup') {
      braves[bNum].levelUp(
        Number.parseInt(temp[2]),
        Number.parseInt(temp[3]),
        Number.parseInt(temp[4]),
        Number.parseInt(temp[5]),
        Number.parseInt(temp[6]),
        Number.parseInt(temp[7]),
      )
    } else if (ivent == 'muscle_training') {
      braves[bNum].muscleTrainning(Number.parseInt(temp[2]), Number.parseInt(temp[3]))
    } else if (ivent == 'running') {
      braves[bNum].running(Number.parseInt(temp[2]), Number.parseInt(temp[3]))
    } else if (ivent == 'study') {
      braves[bNum].study(Number.parseInt(temp[2]))
    } else if (ivent == 'pray') {
      braves[bNum].pray(Number.parseInt(temp[2]))
    }
  }
  braves.forEach((brave) => {
    console.log('STEP: 12 RPG ' + brave.getStatus())
  })
}
class Brave {
  constructor(level, physical, offensive, defense, agility, wisdom, luck) {
    this.level = level
    this.physical = physical
    this.offensive = offensive
    this.defense = defense
    this.agility = agility
    this.wisdom = wisdom
    this.luck = luck
  }

  levelUp(p, o, d, a, w, l) {
    this.level += 1
    this.physical += p
    this.offensive += o
    this.defense += d
    this.agility += a
    this.wisdom += w
    this.luck += l
  }

  muscleTrainning(p, o) {
    this.physical += p
    this.offensive += o
  }

  running(d, a) {
    this.defense += d
    this.agility += a
  }

  study(w) {
    this.wisdom += w
  }

  pray(l) {
    this.luck += l
  }

  getStatus() {
    return (
      this.level +
      ' ' +
      this.physical +
      ' ' +
      this.offensive +
      ' ' +
      this.defense +
      ' ' +
      this.agility +
      ' ' +
      this.wisdom +
      ' ' +
      this.luck
    )
  }
}
//step12()

/*
 * STEP: 13 格闘ゲーム
 * 友達の家で N 人で遊んでいる A 君は格闘ゲームを遊ぶことにしました。格闘ゲームのルールは次の通りです。
 *  ・各プレイヤーは 決まった hp と 3 種類の技を持っていて、技には強化系の技と攻撃の技があり、各攻撃技には技を出すための発生フレーム F
 *  　とダメージ A が設定されている。
 *  ・hp が 0 になったプレイヤーは退場となる。
 *  ・あるプレイヤー 1 が、他のプレイヤーにある技 T_1 (発生フレーム F_1 , 攻撃力 A_1) を使って攻撃した場合、攻撃を受けたプレイヤー 2 は
 *  　反撃の技 T_2 (発生フレーム F_2 , 攻撃力 A_2) を選ぶ。その後、次のようなルールに従っていずれかのプレイヤーにダメージが入る。
 *  どちらか片方でもプレイヤーが退場している場合、互いに何も起こらない。
 *  強化系の技を使った場合、使ったプレイヤーの他の全ての技の発生フレーム（最短 1 フレーム) を -3 , 攻撃力を +5 する。
 *  相手が攻撃技を使っていた場合、その攻撃の攻撃力分 hp が減少する。
 *  互いに攻撃技を使った場合
 *   ・ F_1 < F_2 のとき、プレイヤー 2 の hp が A_1 減る
 *   ・ F_1 > F_2 のとき、プレイヤー 1 の hp が A_2 減る
 *   ・ F_1 = F_2 のとき、何も起こらない
 *  各プレイヤーの持っている技についての情報と、技が出された回数、使われた技の詳細が与えられるので、全ての技が使われた後に場に
 *  残っているプレイヤーの人数を答えてください。
 * 解説：　https://paiza.jp/works/mondai/reviews/show/316ec3ef2db1a6327d7a4b8fe8279f93
 */
function step13() {
  //var lines = ['3 6', '10 1 1 2 2 3 3', '10 0 0 6 1 7 2', '10 0 0 7 5 8 3', '1 1 2 2', '1 2 3 2', '1 3 2 3',
  //              '2 2 3 1', '2 3 3 1', '1 2 3 2']
  var lines = ['5 10','8 2 24 40 25 42 26','59 48 13 21 13 56 2','5 59 7 57 5 25 24','99 28 6 32 5 23 2','62 24 19 11 19 7 21',
                '2 1 3 2','2 1 3 2','5 1 3 1','5 3 1 2','1 1 2 2','4 2 3 1','5 3 3 2','2 3 3 2','4 1 5 3','2 3 3 2']
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var K = Number.parseInt(ary[1])
  lines.shift()
  var players = []
  var fights = []
  for (var i = 0; i < lines.length; i++) {
    var ay = lines[i].split(' ')
    if (i < N) {
      var player = new Player(
        Number.parseInt(ay[0]),
        Number.parseInt(ay[1]),
        Number.parseInt(ay[2]),
        Number.parseInt(ay[3]),
        Number.parseInt(ay[4]),
        Number.parseInt(ay[5]),
        Number.parseInt(ay[6]),
      )
      players.push(player)
    } else {
      fights.push(lines[i])
    }
  }

  for(var f in fights){
    var p1_sts = false
    var p2_sts = false
    var temp = fights[f].split(' ')
    var pNo1 = Number.parseInt(temp[0]) - 1
    var pNo2 = Number.parseInt(temp[2]) - 1
    if(players[pNo1].isAlive()==false || players[pNo2].isAlive()==false){
      continue
    }
    var p1_frame = players[pNo1].frame[Number.parseInt(temp[1])-1]
    var p1_offensive = players[pNo1].offensive[Number.parseInt(temp[1])-1]
    var p2_frame = players[pNo2].frame[Number.parseInt(temp[3])-1]
    var p2_offensive = players[pNo2].offensive[Number.parseInt(temp[3])-1]
    if(p1_frame==0 && p1_offensive==0) p1_sts = true
    if(p2_frame==0 && p2_offensive==0) p2_sts = true
    if (p1_sts && p2_sts) {
      players[pNo1].specialTech()
      players[pNo2].specialTech()
    }else if(p1_sts){
      players[pNo1].specialTech()
      players[pNo1].damage(p2_offensive)
    }else if(p2_sts){
      players[pNo2].damage(p1_offensive)
      players[pNo2].specialTech()
    }else{
      if (p1_frame < p2_frame) {
        players[pNo2].damage(p1_offensive)
      } else if (p1_frame > p2_frame) {
        players[pNo1].damage(p2_offensive)
      }
    }
  }
  var num = 0
  players.forEach((player) => {
    if (player.isAlive()) {
      num++
    }
  })
  console.log('STEP: 13 格闘ゲーム ' + num)
}
class Player {
  constructor(hp, f1, o1, f2, o2, f3, o3) {
    this.hp = hp
    this.frame = [f1, f2, f3]
    this.offensive = [o1, o2, o3]
  }

  damage(score) {
    this.hp -= score
  }

  specialTech() {
    for (var i = 0; i < 3; i++) {
      this.frame[i] = Math.max(1, this.frame[i] - 3)
      this.offensive[i] += 5
    }
  }

  hp() {
    return this.hp
  }

  isAlive(){
    if(this.hp > 0){
      return true
    }else{
      return false
    }    
  }
}
//step13()

/*
 * STEP: 14 スーパースーパースーパーカー
 * よくクラスの題材を扱う際に、「クラスは車の設計書」といった例が出てきます。
 * スーパーカー販売店に勤務しながらクラスの勉強をしていた A 君はスーパーカーの走る様子をクラスを用いてシミュレーションしてみようと考えました。
 * ただ車を走らせてもつまらないので、陸を走るスーパーカーに加えて、空を飛べるスーパースーパーカー ・ テレポートできるスーパースーパースーパーカー も
 * シミュレーションに加えた番号 1 〜 N の N 台のシミュレーションをすることにしました。
 * それぞれの車について、初めに入っている燃料の量 l と燃費 f が定まっており、加えて、車種に応じて次のような機能を持ちます。
 *  ・スーパーカー
 *    run  * 燃料を 1 消費し、 f (km) 走る。燃料が 0 の場合は何も起こらない。
 *  ・スーパースーパーカー
 *    run  燃料を 1 消費し、 f (km) 走る。燃料が 0 の場合は何も起こらない。
 *    fly  燃料を 5 消費し、 f^2 (km) 飛行する。燃料が 5 未満の場合は run を行う。
 *  ・スーパースーパースーパーカー
 *    run  燃料を 1 消費し、 f (km) 走る。燃料が 0 の場合は何も起こらない。
 *    fly  燃料を 5 消費し、 2 * f^2 (km) 飛行する。燃料が 5 未満の場合は run を行う。
 *    teleport  燃料を f^2 消費し、 f^4 (km) 移動する。燃料が f^2 未満の場合は fly を行う。
 *  シミュレートする車の台数 N と機能を使う回数 K , N 台の車の車種と機能を使った車の番号と使った機能が与えられるので、
 *  全てのシミュレーションが終わった後の、各車ごとの総移動距離を求めてください。
 */
function step14(){
  //var lines = ['3 6','supercar 1 1','supersupercar 10 10','supersupersupercar 100 5','1 run','2 run','2 fly','3 run','3 fly','3 teleport']
  var lines = ['5 10','supersupercar 1102 67','supersupercar 63296 25','supersupersupercar 47388 32','supersupercar 30968 68',
                'supersupercar 53668 78','2 run','3 teleport','1 fly','2 run','4 run','5 fly','5 run','2 fly','4 run','1 fly']
  var ay = lines[0].split(' ')
  var N = Number.parseInt(ay[0])
  var K = Number.parseInt(ay[1])
  lines.shift()
  var simulation = []
  var cars = []
  for(var i=0; i<lines.length; i++){
    ay.splice(0)
    ay = lines[i].split(' ')
        if(i<N){
      var model = ay[0]
      var fuel = Number.parseInt(ay[1])
      var effi = Number.parseInt(ay[2])
      switch(model){
        case 'supercar':
          var car = new supercar(fuel, effi)
          break

        case 'supersupercar':
          var car = new super2car(fuel, effi)
          break

        case 'supersupersupercar':
          var car = new super3car(fuel, effi)
      }
      cars.push(car)
    }else{
      simulation.push([Number.parseInt(ay[0]),ay[1]])
    }
  }
  //console.log(cars, simulation)
  simulation.forEach(simu =>{
    var carNo = simu[0]-1
    var func = simu[1]
    switch(func){
      case 'run':
        cars[carNo].run()
        break
      case 'fly':
        cars[carNo].fly()
        break
      case 'teleport':
        cars[carNo].teleport()
    }
    //console.log(cars[carNo].mileage)
  })

  cars.forEach(car=>{
    console.log(car.mileage)
  })
}

class supercar{
  constructor(fuel, effi){
    this.fuel = fuel
    this.efficiency = effi
    this.mileage = 0
  }

  run(){
    if(this.fuel != 0){
      this.fuel -= 1
      this.mileage += this.efficiency
    }
  }
}
class super2car extends supercar{
  fly(){
    if(this.fuel<5){
      super.run()
    }else{
      this.fuel -= 5
      this.mileage += (this.efficiency**2)
    }    
  }
}

class super3car extends super2car{
  fly(){
    if(this.fuel<5){
      super.run()
    }else{
      this.fuel -= 5
      this.mileage += 2*(this.efficiency**2)
    }    
  }
  teleport(){
    if(this.fuel<2){
      super.fly()
    }else{
      this.fuel -=(this.fuel**2)
      this.mileage += (this.efficiency**4)
    }
  }
}
step14()