/*
 * SETP: 1 指定の要素のカウント
 * 要素数 N 個の配列 A に K がいくつ含まれるか数える
 */
function step1() {
  var lines = ['5 4', 1, 2, 3, 4, 5]
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var K = Number.parseInt(ary[1])
  var counter = 0

  if (N >= 1 && N <= 100 && K >= 0 && K <= 100) {
    for (var i = 1; i < lines.length; i++) {
      var num = 0
      num = Number.parseInt(lines[i])
      if (num == K) {
        counter++
      }
    }
    console.log('STEP: 1 指定の要素のカウント ' + counter)
  }
}
step1()

/*
 * SETP: 2 全ての要素の和
 * 要素数 N 個の配列 A の全ての要素の和を求める
 */
function step2() {
  var lines = [5, 1, 2, 3, 4, 5]
  var N = Number.parseInt(lines[0])
  var total = 0
  if (N >= 1 && N <= 100) {
    for (var i = 1; i < lines.length; i++) {
      total = total + Number.parseInt(lines[i])
    }
    console.log('STEP: 2 全ての要素の和 ' + total)
  }
}
step2()

/*
 * STEP: 3 配列の最大値
 * 要素数 N 個の配列 A の最大値を求める
 */
function step3() {
  var lines = [
    39, 47, 83, 2, 4, 6, 1, 57, 3, 7, 9, 60, 90, 99, 6, 3, 2, 1, 4, 6, 4, 3, 5, 7, 39, 38, 29, 19, 10, 20, 68, 86, 93,
    72, 71, 66, 22, 33, 55, 1,
  ]
  var N = Number.parseInt(lines[0])
  if (N >= 1 && N <= 100) {
    lines.shift()
    console.log('STEP: 3 配列の最大値 ' + Math.max(...lines))
  }
}
step3()

/*
 * STEP: 4 配列の最小値
 * 要素数 N 個の配列 A の最小値を求める
 */
function step4() {
  var lines = [
    39, 47, 83, 2, 4, 6, 1, 57, 3, 7, 9, 60, 90, 99, 6, 3, 2, 1, 4, 6, 4, 3, 5, 7, 39, 38, 29, 19, 10, 20, 68, 86, 93,
    72, 71, 66, 22, 33, 55, 1,
  ]
  var N = Number.parseInt(lines[0])
  if (N >= 1 && N <= 100) {
    lines.shift()
    console.log('STEP: 4 配列の最小値 ' + Math.min(...lines))
  }
}
step4()

/*
 * STEP: 5 指定要素があるかの判定
 * 要素数 N 個の配列 A に K が 1 つでも含まれている場合は Yes を、含まれていない場合は No を出力する
 */
function step5() {
  var lines = ['5 0', 1, 2, 3, 4, 5]
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var K = Number.parseInt(ary[1])
  var result = ''
  lines.shift()
  if (lines.includes(K)) {
    result = 'Yes'
  } else {
    result = 'No'
  }
  console.log('STEP: 5 指定要素があるかの判定 ' + result)
}
step5()

/*
 * STEP: 6 指定要素の先頭位置
 * 要素数 N 個の配列 A に K であるような A の要素のうち、要素番号が最小のものを出力する
 */
function step6() {
  var lines = ['5 3', 5, 2, 5, 4, 3, 5, 6, 5]
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var K = Number.parseInt(ary[1])
  lines.shift()
  var counter = 0
  for (var i = 0; i < lines.length; i++) {
    lines[i] = Number.parseInt(lines[i])
  }
  if (lines.includes(K) == false) {
    console.log(-1)
  } else {
    for (i = 0; i < lines.length; i++) {
      if (lines[i] === K) {
        counter = counter + i + 1
        break
      }
    }
  }
  console.log('STEP: 6 指定要素の先頭位置 ' + counter)
}
step6()

/*
 * STEP: 7 要素の種類数
 * 要素数 N 個の配列 A には何種類の値が含まれているかを求める
 */
function step7() {
  var lines = [5, 1, 2, 3, 4, 5]
  lines.shift()
  var ary = []
  ary[0] = lines[0]

  for (var i = 0; i < lines.length; i++) {
    if (ary.includes(lines[i]) == false) {
      ary.push(lines[i])
    }
  }
  console.log('STEP: 7 要素の種類数 ' + ary.length)
}
step7()

/*
 * STEP: 8 全ての要素に対する操作
 * 要素数 N 個の配列 A の全ての要素を + K した後の A の各要素を出力する
 */
function step8() {
  var lines = ['5 3', 1, 2, 3, 4, 3]
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var K = Number.parseInt(ary[1])
  lines.shift()

  for (var i = 0; i < lines.length; i++) {
    var num = Number.parseInt(lines[i])
    console.log('STEP: 8 全ての要素に対する操作 ' + (num + K))
  }
}
step8()

/*
 * STEP: 9 配列の順序の反転
 * 要素数 N 個の配列 A の全ての要素の順序を反転させる
 */
function step9() {
  var lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  lines.shift()
  lines.reverse()
  for (var item of lines) {
    console.log('STEP: 9 配列の順序の反転 ' + item)
  }
}
step9()

/*
 * STEP: 10 変数の入れ替え
 * 2 つの変数の中身を入れ替えた後の 2 つの変数の値を出力する
 */
function step10() {
  var lines = ['3 5']
  var ary = lines[0].split(' ')
  var X = Number.parseInt(ary[0])
  var Y = Number.parseInt(ary[1])
  console.log('STEP: 10 変数の入れ替え ' + Y + ' ' + X)
}
step10()

/*
 * STEP: 11 指定要素の入れ替え
 *  要素数 N 個の配列 A と各要素 A_1, A_2, ..., A_N ,
 *  交換する A の要素番号　X, Y が与えられるので、
 *  A_X と A_Y を入れ替えた後の A を出力する
 */
function step11() {
  var lines = [5, 1, 2, 3, 4, 5, '3 5']
  var N = Number.parseInt(lines[0])
  var ary = lines[lines.length - 1].split(' ')
  var X = Number.parseInt(ary[0])
  var Y = Number.parseInt(ary[1])
  lines.shift()
  var str = []

  for (var i = 0; i < lines.length - 1; i++) {
    if (i == X - 1) {
      str.push(lines[Y - 1])
      continue
    }
    if (i == Y - 1) {
      str.push(lines[X - 1])
      continue
    }
    str.push(lines[i])
  }
  for (i = 0; i < str.length; i++) {
    console.log('STEP: 11 指定要素の入れ替え ' + str[i])
  }
}
step11()

/*
 * STEP: 12 末尾への要素の追加
 *  配列 A と追加する要素 B が与えられるので、
 *  B を A の末尾に追加したのち、A の全ての要素を出力する
 */
function step12() {
  var lines = [5, 1, 2, 3, 4, 5, 10]
  lines.shift()
  for (var i = 0; i < lines.length; i++) {
    console.log('STEP: 12 末尾への要素の追加 ' + lines[i])
  }
}
step12()

/*
 * STEP: 13 指定位置への要素の追加
 *  配列 A と追加する位置 n と追加する要素 B が与えられるので、
 *  B を A_n の後ろに追加した後の A を出力する
 */
function step13() {
  var lines = [5, 1, 2, 3, 4, 5, '3 10']
  lines.shift()
  var ary = lines[lines.length - 1].split(' ')
  var N = Number.parseInt(ary[0])
  var B = Number.parseInt(ary[1])
  lines.pop()

  var aryResult = []
  for (var i = 0; i < lines.length; i++) {
    if (i == N - 1) {
      aryResult.push(lines[i])
      aryResult.push(B)
    } else {
      aryResult.push(lines[i])
    }
  }
  for (var result of aryResult) {
    console.log('STEP: 13 指定位置への要素の追加 ' + result)
  }
}
step13()

/*
 * STEP: 14 指定要素の削除
 *  配列 A とその要素数 N と削除する要素の番号 n が与えられるので、
 *  A から A_n を削除し、A を要素数 N - 1 の配列とした後の A の各要素を出力する
 */
function step14() {
  var ary = []
  var lines = [5, 1, 2, 3, 4, 5, 3]
  lines.shift()
  var N = Number.parseInt(lines[lines.length - 1])
  lines.pop()

  for (var i = 0; i < lines.length; i++) {
    if (i != N - 1) {
      ary.push(lines[i])
    }
  }
  for (var result of ary) {
    console.log('STEP: 14 指定要素の削除 ' + result)
  }
}
step14()

/*
 * STEP: 15 九九表
 *  九九表を出力する
 */
function step15() {
  var str = ''
  for (var i = 1; i < 10; i++) {
    var str = ''
    for (var j = 1; j < 10; j++) {
      str = str + i * j + ' '
    }
    str = str.slice(0, str.length - 1)
    console.log('STEP: 15 九九表 ' + str)
  }
}
step15()

/*
 * STEP: 16 全ての要素を用いた処理
 *  配列 A の要素数 N と配列 A の各要素 A_1, A_2, ..., A_N が与えられるので、
 *  A の要素の全てのペアについてのかけ算の結果を出力する
 */
function step16() {
  var lines = [5, 1, 2, 3, 4, 5]
  var N = Number.parseInt(lines[0])
  var c = 0
  var ary = []
  lines.shift()
  for (var i = 0; i < N; i++) {
    ary.push(lines[i])
  }

  for (i = 1; i < N; i++) {
    for (var j = 0; j < i; j++) {
      console.log('STEP: 16 全ての要素を用いた処理 ' + lines[j] * ary[i])
    }
  }
}
step16()

/*
 * STEP: 17 配列のサイズの変更
 *  配列 A の要素数 N と新たに作成する配列のサイズ n , 配列 A の各要素 A_1 ... A_N が与えられるので、
 *  配列 A の先頭から n 要素を順に保持する配列を作成する
 */
function step17() {
  var lines = ['1 19', 1]
  var ary = [],
    ary2 = []
  ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var n = Number.parseInt(ary[1])
  lines.shift()

  for (i = 0; i < n; i++) {
    if (i < N) {
      ary2[i] = lines[i]
    } else {
      ary2[i] = 0
    }
  }

  ary2.forEach((line) => {
    console.log('STEP: 17 配列のサイズの変更 ', line)
  })
}
step17()

/*
 * STEP: 18 重複要素の削除
 *  配列 A の要素数 N と配列 A の各要素 A_1, A_2, ..., A_N が与えられるので、
 *  同じ値の要素が 2 つ以上含まれないように A を加工した新たな配列 B を作成1する
 */
function step18() {
  var lines = [5, 1, 2, 3, 5, 2]
  var N = lines[0]
  lines.shift()

  var ary = []
  ary.push(lines[0])
  for (i = 1; i < lines.length; i++) {
    if (ary.includes(lines[i]) == false) {
      ary.push(lines[i])
    }
  }

  ary.forEach((a) => {
    console.log('STEP: 18 重複要素の削除 ' + a)
  })
}
step18()

/*
 * STEP: 19 条件を満たす要素のみの配列作成
 *  配列 A の要素数 N と整数 K , 配列 A の各要素 A_1 ... A_N が与えられるので、
 *  K 以上であるような配列 A の要素のみを要素として持つ配列 B を作成し、その要素を出力する
 */
function step19() {
  var lines = ['5 3', 1, 2, 3, 4, 5]
  var ary = [],
    ary2 = []
  ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var K = Number.parseInt(ary[1])
  lines.shift()

  for (i = 0; i < lines.length; i++) {
    if (Number.parseInt(lines[i]) >= K) {
      ary2.push(lines[i])
    }
  }

  ary2.forEach((a) => {
    console.log('STEP: 19 条件を満たす要素のみの配列作成 ' + a)
  })
}
step19()

/*
 * STEP: 20 傾斜配点
 *  入社試験では 科目 1 〜 5 の 5 科目のテストが課せられており、それぞれの科目には重みが設定されています。
 *  受験者の得点は各科目の (とった点数) * (科目の重み) となります。 5 科目の得点の合計が最も高かった受験者の得点を求めてください。
 */
function step20() {
  var lines = [5, '1 2 3 4 5', '1 2 3 4 5', '6 7 8 9 0', '10 11 12 13 14', '10 10 10 10 10', '100 2 4 6 48']
  var N = Number.parseInt(lines[0])
  lines.shift()
  var M = lines[0].split(' ')
  lines.shift()
  var peple = []
  for (i = 0; i < lines.length; i++) {
    var person = lines[i].split(' ')
    for (var j = 0; j < M.length; j++) {
      person[j] = Number.parseInt(person[j]) * Number.parseInt(M[j])
    }
    peple.push(person)
  }

  for (i in peple) {
    var num = 0
    peple[i].forEach((p) => {
      num += Number.parseInt(p)
    })
    peple[i] = num
  }
  console.log('STEP: 20 傾斜配点 ' + Math.max(...peple))
}
step20()

/*
 * STEP: 21 内定
 *  人事のあなたは、N 人の中から採用者を決定します。
 *  N 人のテストの点数はそれぞれ A_i (1 ≦ i ≦ N)です。
 *  テストの点数が K 点以上の人全員を採用したいのですが、得点の高い方から M 人に辞退されてしまいました。
 *  あなたの採用することのできる最大の人数を答えてください。
 */
function step21() {
  var lines = ['5 3974 0', 2049, 4690, 6867, 3414, 460]
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var K = Number.parseInt(ary[1])
  var M = Number.parseInt(ary[2])
  lines.shift()
  lines.sort(sortAsc)
  var counter = 0
  for (i = 0; i < lines.length; i++) {
    if (K < Number.parseInt(lines[i])) {
      counter++
    }
  }
  var result = counter - M
  if (result < 0) {
    console.log('STEP: 21 内定 ' + 0)
  } else {
    console.log('STEP: 21 内定 ' + result)
  }
}
step21()
function sortAsc(a, b) {
  return b - a
}

/*
 * STEP: 22 queue (9) 係
 *  データ構造の queue と同様の働きをするロボットがあります。
 *  ロボットは指示に応じて配列 A に対して 2 種類の仕事を行います、仕事の内容は以下の通りです。
 *  in n と指示された場合、A の末尾に n を追加してください。
 *  out と指示された場合、A の先頭の要素を削除してください。ただし、A が既に空の場合、何も行わないでください。
 *  ロボットに与えられる指示の回数 N と、各指示の内容 S_i が与えられるので、ロボットが全ての処理を順に行った後の A の各要素を出力してください。
 *  なお、初め配列 A は空であるものとします。
 */
function step22() {
  var lines = [
    28,
    'in 43',
    'in -14',
    'in 9',
    'in 42',
    'out',
    'in 78',
    'out',
    'in -71',
    'in -26',
    'out',
    'out',
    'out',
    'in -22',
    'out',
    'in 47',
    'in -86',
    'out',
    'out',
    'out',
    'out',
    'in -26',
    'out',
    'out',
    'out',
    'in 81',
    'in -9',
    'out',
    'in -18',
  ]
  var N = Number.parseInt(lines[0])
  lines.shift()
  var ary = [],
    ary2 = []

  for (i = 0; i < lines.length; i++) {
    if (lines[i].includes('out')) {
      if (ary.length != 0) {
        ary.shift()
      }
    } else if (lines[i].includes('in')) {
      ary2 = lines[i].split(' ')
      ary.push(ary2[1])
    }
  }

  ary.forEach((a) => {
    console.log('STEP: 22 queue (9) 係 ' + a)
  })
}
step22()
/*
 * STEP: 23 二人三脚
 *  生徒の身長が A_1, ...., A_N であるような N 人のクラスで二人三脚の代表を決めることにしました。
 *  代表には、身長の差が最も小さいような 2 人を選出することにしました。選ばれた 2 人の身長を昇順に出力してください。
 */
function step23() {
  var lines = [5, 119, 102, 187, 191, 132]
  lines.shift()
  lines.sort(sortAsc)
  var diff = []
  var max = Math.min(...lines)
  var temp = 0
  for (i = 0; i < lines.length; i++) {
    if (i != lines.length - 1) {
      var a = Number.parseInt(lines[i])
      var b = Number.parseInt(lines[i + 1])
      temp = a - b
      max = Math.min(max, temp)
      diff.push(a + ' ' + b + ' ' + temp)
    }
  }
  diff.forEach((d) => {
    ary = d.split(' ')
    ary.sort(sortDesc)
    if (ary[0] == max) {
      console.log('STEP: 23 二人三脚 ' + ary[1])
      console.log('STEP: 23 二人三脚 ' + ary[2])
    }
  })
}
step23()
function sortDesc(a, b) {
  return a - b
}

/*
 * STEP: 24 場所取り
 *  開店直後に店に入るために、番号 1 〜 N の N 人が開店前に店の前にブルーシートを合計 K 枚置きました。
 *  ブルーシートの先頭は A_1 , 最後尾は A_K です。しかし、店側は先頭から F 枚のブルーシートを撤去しました。
 *  1 〜 N 番の人々は次のルールに従って店に並びます。
 *  ・自分のブルーシートが 1 枚以上残っているとき、自分のブルーシートのうち、最も先頭に近いブルーシートの位置に並ぶ。
 *  ・自分のブルーシートが 1 枚も残っていないとき、並ぶことなく帰宅する。
 *  全員が並び終わった後に待機列にいる人の番号を先頭から順に答えてください。
 */
function step24() {
  var lines = ['5 10 1', 1, 4, 4, 3, 5, 4, 2, 4, 1, 1]
  var ary = lines[0].split(' ')
  var ary2 = []
  var N = Number.parseInt(ary[0])
  var K = Number.parseInt(ary[1])
  var F = Number.parseInt(ary[2])
  lines.shift()
  var c = 0
  while (c < F) {
    lines.shift()
    c++
  }
  ary2 = lines.filter((element, index) => {
    return lines.indexOf(element) == index
  })

  ary2.forEach((a) => {
    console.log('STEP: 24 場所取り ' + a)
  })
}
step24()

/*
 * STEP: 25 ボウリング
 *  あなたはボウリングをしています。フレームの 1 投目を投げ終わったあなたは、
 *  次に狙うピンの番号と残っているピンの本数を知りたくなりました。
 *  ピンの情報が与えられるので、狙うべきピンの番号と残っているピンの本数を求めてください。
 */
function step25() {
  var lines = ['1 0 0 1', '0 0 0', '0 0', '0']
  var ary = []
  lines.forEach((line) => {
    ary += line.split(' ') + ','
  })
  ary = ary.split(',')
  ary.pop()
  ary.reverse()
  counter = 0
  for (i in ary) {
    if (ary[i] == '1') {
      var result = Number.parseInt(i) + 1
      console.log('STEP: 25 ボウリング ' + result)
      break
    }
  }
  for (i in ary) {
    if (ary[i] == '1') {
      counter++
    }
  }
  console.log('STEP: 25 ボウリング ' + counter)
}
step25()

/*
 * STEP: 26 集団行動
 *  あなたは集団行動のリーダーです。次のような指示を出すことで様々な列の操作ができます。
 *  swap A B: 先頭から A 番目の人と、先頭から B 番目の人の位置を入れ替える。
 *  reverse: 列の前後を入れ替える。
 *  resize C: 先頭から C 人を列に残し、それ以外の人を全員列から離れさせる。ただし、列が既に C 人以下の場合、何も行わない。
 *  初め、列には番号 1 〜 N の N 人がおり、先頭から番号の昇順に並んでいます。(1, 2 , 3, ..., N)
 *  あなたの出した指示の回数 Q とその指示の内容 S_i (1 ≦ i ≦ Q) が順に与えられるので、全ての操作を順に行った後の列を出力してください。
 */
function step26() {
  var lines = ['100 5', 'resize 29', 'reverse', 'swap 18 24', 'resize 47', 'reverse']
  var ary = lines[0].split(' ')
  var N = Number.parseInt(ary[0])
  var Q = Number.parseInt(ary[1])
  lines.shift()
  var ary2 = []
  for (i = 0; i < N; i++) ary2.push(i + 1)

  for (i = 0; i < lines.length; i++) {
    if (lines[i].includes('reverse')) {
      ary2.reverse()
      console.log(ary2)
    } else if (lines[i].includes('resize')) {
      ary = lines[i].split(' ')

      while (ary2.length > Number.parseInt(ary[1])) {
        ary2.pop()
      }
      console.log(ary2)
    } else if (lines[i].includes('swap')) {
      ary = lines[i].split(' ')
      var targetId = Number.parseInt(ary[1] - 1)
      var sourceId = Number.parseInt(ary[2] - 1)
      ary2 = replaceArrayElements(ary2, targetId, sourceId)
      console.log(ary2)
    }
  }
  ary2.forEach((a) => {
    console.log('STEP: 26 集団行動 ' + a)
  })
}
step26()

function replaceArrayElements(array, targetId, sourceId) {
  const cloneArray = [...array]
  ;[cloneArray[targetId], cloneArray[sourceId]] = [array[sourceId], array[targetId]]
  return cloneArray
}