/*
 * STEP: 1【マップの扱い 1】マップの書き換え・1 マス
 *  行数 H , 列数 W の盤面があり、各マスには文字が 1 つだけ書かれています。盤面と y , x 座標 が与えられるので、
 *  盤面の与えられた座標の文字が "." の場合は "#" に、"#" の場合は "." に書き換えた後の盤面を出力してください。
 *  なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。
 */
function step1() {
  //var lines = ['3 3', '...', '...', '...', '0 0']
  var lines = ['4 4', '####', '####', '....', '##..', '2 2']
  var ary = lines[0].split(' ')
  var H = Number.parseInt(ary[0])
  var W = Number.parseInt(ary[1])
  lines.shift()
  var board = []
  var othello = lines[lines.length - 1].split(' ')
  for (var i in othello) {
    othello[i] = Number.parseInt(othello[i])
  }
  for (var i = 0; i < H; i++) {
    board.push(lines[i])
  }

  for (var b in board) {
    var str = ''
    if (othello[0] == b) {
      for (var j = 0; j < board[b].length; j++) {
        if (othello[1] == j) {
          var char = board[b].slice(othello[1], othello[1] + 1)
          if (char == '.') {
            str = str + '#'
          } else {
            str = str + '.'
          }
        } else {
          str = str + board[b].slice(j, j + 1)
        }
      }
    } else {
      str = str + board[b]
    }
    console.log('STEP: 1 ' + str)
  }
}
step1()

/*
 * STEP: 2 マップの扱い 2】マップの書き換え・縦横
 *  マップを表す H 行 W 列の文字列 S_1 ... S_H と y , x 座標 が与えられるので、与えられた座標のマスと上下左右で隣接するマスの最大 5 マスについて
 *  次の処理をおこなった後の盤面を出力してください。
 *  ・ マスに書かれている文字が "." の場合は "#" に、"#" の場合は "." に書き換える。
 *  なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。
 */
function step2() {
  var lines = ['3 3', '##.', '###', '...', '1 1']
  //var lines = ['10 10','##########', '..........', '##########',
  //              '##########', '..........', '#.#.#.#.#.', 
  //              '.#.#.#.#.#', '#.#.#.#.#.', '.#.#.#.#.#',
  //              '..........','2 3']
  
  var ary = lines[0].split(' ')
  var H = Number.parseInt(ary[0])
  var W = Number.parseInt(ary[1])
  lines.shift()
  
  var coordinate = lines[lines.length - 1].split(' ')
  var y = Number.parseInt(coordinate[0])
  var x = Number.parseInt(coordinate[1])
  var move = [-1,1]

  var board = []
  for (var i = 0; i <H; i++) {
    board[i] = []
    for(var j=0; j<lines[i].length; j++){
      board[i][j] = lines[i].slice(j,j+1)
    }
  }
  board.forEach(b=>{
    var str = b.join()
    str = str.replaceAll(',','')
  })
  for(i=0; i<board.length; i++){
    for(var j=0; j<board[i].length; j++){
      if(i==(y+move[0])) board[i][j] = moveStr(board[i][j])
      if(i==y){
        if(j==(x+move[0])) board[i][j] = moveStr(board[i][j])
        if(j==x) board[i][j] = moveStr(board[i][j])
        if(j==(x+move[1])) board[i][j] = moveStr(board[i][j])
      }
      if(i==(y+move[1])){
        if(j==x) board[i][j] = moveStr(board[i][j])
      }
    }
  }
  
  board.forEach(b=>{
    var str = b.join()
    str = str.replaceAll(',','')
    console.log('STEP: 2 ' + str)
  })
}
step2()
function moveStr(char){
  if(char=='.'){
    return '#'
  }
  if(char=='#'){
    return '.'
  }
}

/*
 * STEP: 3 【マップの扱い 3】マップの判定・縦横斜め
 *  マップの行数 H と列数 W とマップを表す H 行 W 列の文字列 S_1 ... S_H と y , x 座標 が与えられるので、
 *  与えられた座標のマス(y, x) と、 (y, x) と同じ縦・横・斜めの列に存在する全てのマスについて次の処理をおこなった後の盤面を出力してください。
 *  マスに書かれている文字が "." の場合は "#" に、"#" の場合は "." に書き換える。
 *  なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。
 *  マス(y,x) と同じ斜めの列とは整数 a を用いて (y+a,x+a), (y+a,x-a), (y-a,x-a), (y-a,x+a) のいずれかで表されるマスの集合です。
 */
function step3(){
  //var lines = ['3 3', '##.', '###', '...', '0 0']
  var lines = ['10 10','##########', '..........', '##########',
    '##########', '..........', '#.#.#.#.#.', 
    '.#.#.#.#.#', '#.#.#.#.#.', '.#.#.#.#.#',
    '..........','5 5']
  var ary = lines[0].split(' ')
  var H = Number.parseInt(ary[0])
  var W = Number.parseInt(ary[1])
  lines.shift()

  var coordinate = lines[lines.length - 1].split(' ')
  var y = Number.parseInt(coordinate[0])
  var x = Number.parseInt(coordinate[1])
  var move = [-1,1]

  var board = []
  for (var i = 0; i <H; i++) {
    board[i] = []
    for(var j=0; j<lines[i].length; j++){
      board[i][j] = lines[i].slice(j,j+1)
    }
  }

  for(i=0; i<H; i++){
    board[i][x] = moveStr(board[i][x])
  }
  for(i=0; i<W; i++){
    board[y][i] = moveStr(board[y][i])
  }
  for(i=1; i<Math.min(H, W); i++){
    if (y+i<H) {
      if(x+i<W) {
        board[y+i][x+i] = moveStr(board[y+i][x+i])
      }
      if(0<=x-i){
        board[y+i][x-i] = moveStr(board[y+i][x-i])
      } 
    }
    if (0<=y-i) {
      if(x+i<W) {
        board[y-i][x+i] = moveStr(board[y-i][x+i])
      }
      if(0<=x-i){
        board[y-i][x-i] = moveStr(board[y-i][x-i])
      } 
    }
  }
  board[y][x] = moveStr(board[y][x])

  board.forEach(b=>{
    str = b.join()
    str = str.replaceAll(',','')
    console.log('STEP: 3 ' +str)
  })
}
step3()

/* 
 * STEP: 4 【マップの扱い 4】マップのナンバリング
 *  マップの行数 H と列数 W とナンバリングの向き D が与えられるので、(0, 0) から指示通りにナンバリングしたとき、
 *  マップ全体にどのように番号が振られるかを出力してください。
 *  なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。
 */
function step4(){
  var lines =['2 2 3']
  var ary = lines[0].split(' ')
  var H = Number.parseInt(ary[0])
  var W = Number.parseInt(ary[1])
  var D = Number.parseInt(ary[2])
  var ans = []
  for (var i=0; i<H; i++) {
    ans[i] = []
    for(var j=0; j<W; j++){
      ans[i][j] = 0
    }
  }
  var counter = 1
  
  switch(D){
    case 1:
      ans[0][0] = 1
      counter++
      for(i=1; i<H; i++){
        for(j=0; j<=Math.min(i,W-1); j++){
          ans[i-j][j] = counter
          counter++
        }
      }
      
      for(i=1; i<W; i++){
        for(j=0; j<Math.min(H,W-i); j++){
          ans[H-1-j][i+j] = counter
          counter++
        }
      }
      break
    case 2:
      for(i=0; i<H; i++){
        for(j=0; j<W; j++){
          ans[i][j] = counter
          counter++
        }
      }
      break
    case 3:
      for(i=0; i<W; i++){
        for(j=0; j<H; j++){
          ans[j][i] = counter
          counter++
        }
      }
      break
    case 4:
      ans[0][0] = 1
      counter++
      for(i=1; i<W; i++){
        for(j=0; j<=Math.min(i,H-1); j++){
          ans[j][i-j] = counter
          counter++
        }
      }
      
      for(i=1; i<H; i++){
        for(j=0; j<Math.min(H-i,W); j++){
          ans[i+j][W-1-j] = counter
          counter++
        }
      }
    
  }
  for(var b in ans){
    str = ans[b].join()
    str = str.replaceAll(',',' ')
    console.log('STEP: 4 ' +str)
  }
}
step4()

/*
 * STEP: 5 【シミュレーション 1】反復横跳び
 * 
 */

/*
 * STEP: 6 【シミュレーション 2】perfect shuffle
 * 
 */

/*
 * STEP: 7 【シミュレーション 3】燃費
 * 
 */

/*
 * STEP: 8 【シミュレーション 4】位置情報システム
 * 
 */

/*
 * STEP: 9 【条件判定 1】郵便料金
 *  A 国の郵便局では 縦 y(cm), 横 x(cm), 高さ h(cm) の荷物を送るのに必要な郵便料金が次のようなルールで決まっています。
 *  高さが l_1 cm 以下の場合
 *   縦と横の長い方の長さが l_2 以下の場合・・・m_1(円)
 *   縦と横の長さの和が l_3 以下の場合・・・m_2(円)
 *   それ以外の場合・・・m_3(円)
 *  それ以外の場合
 *   縦と横と高さのうち最も長いものの長さが l_4 以下の場合・・・m_4(円)
 *   縦と横と高さの長さの和が l_5 以下の場合・・・m_5(円)
 *   それ以外の場合・・・送るものの体積(cm3) × m_6(円)
 *  判定に必要な定数と送る荷物の縦・横・高さの値が与えられるので、必要な郵便料金を求めてください。
 *  なお、料金を決めるルールは上に書かれているものから順に判定していくものとします。
 */
function step9(){
  //var lines =['5 6 7','10 9 8 7 6','1 2 3 4 5 6']
  var lines = ['10 20 30','10 10 10 10 10','100 200 300 400 500 600']
  var ary = lines[0].split(' ')
  var v = Number.parseInt(ary[0])
  var w = Number.parseInt(ary[1])
  var h = Number.parseInt(ary[2])
  var conditions = lines[1].split(' ')
  var fees = lines[2].split(' ')
  var result = 0
  if(h <= Number.parseInt(conditions[0])){
    if(Math.max(v, w) <= Number.parseInt(conditions[1])){
      result = Number.parseInt(fees[0])
    }else if((v+w) <= Number.parseInt(conditions[2])){
      result = Number.parseInt(fees[1])
    }else{
      result = Number.parseInt(fees[2])
    }
  }else{
    if(Math.max(v,w,h) <= Number.parseInt(conditions[3])){
      result = Number.parseInt(fees[3])
    }else if((v+w+h) <= Number.parseInt(conditions[4])){
      result = Number.parseInt(fees[4])
    }else{
      result = (v*w*h) * Number.parseInt(fees[5])
    }
  }
  console.log('STEP: 9 ' + result)
}
step9()

/*
 * STEP: 10 【条件判定 2】視力検査
 *  定期検診の一環として視力検査をおこなうことになりました。
 *  そこで、保健委員の A 君はクラスの視力検査の手伝いをすることになりました。視力検査の概要は次の通りです。
 *   ・視力を良い方から順に A, B, C, D, E の 5 段階で判定します。
 *   ・各段階の視力であることを検査するためのテスト TA, TB, TC, TD が用意されており、A 君がこれらのうちのいずれかを被験者に見せ、
 *     被験者が正しく解答した場合を「成功」、正しく解答できなかった場合を「失敗」とします。
 *   ・同じ段階のテストに 2 回失敗する前に 2 回成功した場合、その段階について「合格」、それ以外の場合を「不合格」とします。
 *   ・合格した段階のうち、最も良い段階をその被験者の視力として判定します。
 *   ・どのレベルのテストにも合格しなかった場合、被験者の視力は E として扱います。
 *  ある被験者に対しておこなったテストとその結果が与えられるので、被験者の視力を判定してください。
 */
function step10(){
  //var lines = [4,'TA ok','TA ng','TA ng','TA ok']
  var lines = [4,'TB ok','TC ok','TC ok','TB ok']
  lines.shift()
  var test_name = ['TA','TB','TC','TD']
  var level_name = ['A', 'B', 'C', 'D', 'E']
  var ok = [0,0,0,0]
  var ng = [0,0,0,0]
  var tester_level = 4

  for(var i=0; i<lines.length; i++){
    var ary = lines[i].split(' ')
    var lank = ary[0]
    var result = ary[1]
    for(var j=0; j<test_name.length; j++){
      if(lank==test_name[j]){
        if(result=='ok'){
          ok[j]++
        }
        if(result=='ng'){
          ng[j]++
        }
      }
      if(ok[j]==2 && ng[j]<2){
        tester_level = Math.min(tester_level,j)
      }
    }
  }
  
  console.log('STEP: 10 ' + level_name[tester_level])

}
step10()