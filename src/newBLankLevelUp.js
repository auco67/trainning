const { verifySignatureAndParseRawBody } = require("@slack/bolt/dist/receivers/ExpressReceiver")
const { FAILSAFE_SCHEMA } = require("js-yaml")

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
//step1()

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
//step2()
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
//step3()

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
//step4()

/*
 * STEP: 5 【シミュレーション 1】反復横跳び
 *  A 君の学校では体力テストがおこなわれており、現在反復横跳びの計測をしています。
 *  いたずら好きの A 君は、友達が光の速さで反復横飛びをしている途中、具体的には友達が線を跨ぐのが 
 *  4×N 回目になる直前に左の線を元の位置から外側に X cm 遠ざけました。
 *  最終的に友達の反復横跳びの計測結果は K 回となりました。
 *  友達は正規の反復横跳びで計測結果が K 回となるときよりも何 cm 多く移動したでしょうか
 *  なお、今回の反復横跳びでは中央の線を跨いだ状態から始めて、右の線→中央の線→左の線→中央の線→... といった順番で跨いで行くものとします。
 */
function step5(){
}
//step5()

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
//step9()

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
//step10()

/*
 * STEP: 11 【条件判定 3】過剰コンプライアンス
 *  君主の A 国王によって情報統制が厳しくなった A 国では、今回新たに使用禁止用語の検閲についての次のような法律ができました。
 *    今後、放送禁止単語 S と文字数が同じで、前半分または後ろ半分が同じ文字である単語 V を放送する時は、放送禁止用語と
 *    重なっている部分（前半分または後ろ半分）の文字を全て x で置き換えた単語を放送する。また、V が放送禁止用語と完全に
 *    一致する場合は V を放送せず、代わりに "banned" と出力する。
 *  放送禁止用語 S と N 個の放送したい単語 V_1, ..., V_N が与えられるので、検閲をおこなった後の V_1, ..., V_N を出力してください。
 */
function setp11(){
  var lines = [5,'paiza','paaaa','paiza','paisa','zaiza','ab']
  //var lines = [1,'ab','abababa']
  //var lines = [7,'xcerrbqy','tnkzdgkj','ibmbrbqy','xcerrbqy','xcerrbqy','aidzhqsp','xcerdeig','ajxudrtx']
  var N = lines[0]
  lines.shift()
  var S = lines[0]
  var lenS = S.length
  lines.shift()
  for(var i=0; i<N; i++){
    var lenL = lines[i].length
    var temp = ''
    if(lenS==lenL){
      if( S==lines[i]){
        temp = 'banned'
      }else if( S.slice(0,(lenS+1)/2)==lines[i].slice(0,(lenS+1)/2) ){
        for(var j=0; j<(lenS/2); j++){
          temp = temp + 'x'
        }
        temp = temp + lines[i].slice((lenS+1)/2,lenL)
      }else if( S.slice((lenS)/2,lenS)==lines[i].slice((lenS)/2,lenL) ){
        temp = lines[i].slice(0,(lenS)/2)
        for(j=(lenS)/2; j<lenS; j++){
          temp = temp + 'x'
        }
      }else{
        temp = lines[i]
      }
      lines[i] = temp
    }
    console.log('STEP: 11 ' + lines[i])
  }
  
}
//setp11()

/*
 * STEP: 12 【全探索 1】高い寿司を食いたい！
 *  A 君は家族と一緒に回転寿司に来ています。
 *  回転寿司の円形のレーンには、価格が P_1, ..., P_N の N 枚の寿司が順番に流れています。
 *  （価格が P_1 の寿司と P_N の寿司は隣接しています。）
 *  A 君は、家族が目を離した隙にレーンから連続した K 枚の寿司をこっそり取って食べてしまおうと考えました。
 *  A 君は普段食べれない高いお寿司を多く食べたいので、取る K 枚の寿司の合計金額ができるだけ高くなるように寿司を取りたいです。
 *  A 君が食べることができる寿司の合計金額の最大値を求めてください。
 */
function step12(){
  var lines = ['5 3',100,200,300,400,500]
  //var lines = ['7 2',1000,200,500,600,300,300,2000]
  var ay = lines[0].split(' ')
  var N = Number.parseInt(ay[0])
  var K = Number.parseInt(ay[1])
  lines.shift()
  
  var prices = []
  var c = 0
  while(c<2){
    for(var l_i in lines){
      prices.push(lines[l_i])
    }
    c++
  }
  var ans = 0
  for(var i=0; i<N; i++){
    var total = 0
    for(var j=0; j<K; j++){
      total += Number.parseInt(prices[(i+j)%N])
    }
    ans = Math.max(ans, total)
  }
  console.log('STEP: 12 ' + ans)
}
//step12()

/*
 * STEP: 13 【全探索 2】コップの水
 * 
 */

/*
 * STEP: 14 【全探索 3】+1, -1, '1'+, +'1'
 * 
 */

/*
 * STEP: 15 【全探索 4】ストラックアウト
 * 
 */

/*
 * STEP: 16 【文字列 1】疑似数字
 *  システム開発をしている A 君は、与えられた文字列から自動で電話番号を取得するプログラムを作成しようと考えました。
 *  文字列からいきなり電話番号を取得するのは難しいと考えた A 君は、最初の文字と最後の文字が数字(0~9)であるような文字列を
 * 「疑似数字」として取り出すコードを作成することにしました。
 *  文字列 S が与えられるので、そこに含まれる疑似数字を全て出力してください。
 *  数字 1 文字の場合であっても疑似数字とみなされる点に注意してください。
 */
function step16(){
  //var lines = ['81zaaz18']
  var lines = ['1abc2efg345']
  var len = lines[0].length
  var c = 0
  while(c<len){
    var str = ''
    for(var i=c; i<len;i++){
      var char = Number.parseInt(lines[0].slice(i,i+1))
      if(isNaN(char)){
        if(str==''){
          break
        }else{
          str += lines[0].slice(i,i+1)
        }
        
      }else{
        str += char
        console.log('STEP: 16 ' + str)
      }
    }
    c++
  }
}
//step16()

/*
 * STEP: 17 【文字列 2】super long int
 *  整数型が用意されている言語では、int や long int といった型を用いて数値を保持することが多いです。
 *  しかし、これらの型は扱える値の上限が 10^10 程度にされていることが多いです。
 *  そこで A 君は新たに 32 桁の数字を受け取ることができる型 super long int を定義することにしました。
 *  また super long int 型の値 X から int 型のハッシュ値を求める関数 hash(X) を次の通り定義しました。
 *  hash(X) = X を 8 桁ずつに区切って得られる 4 つの 8 桁の数字の和
 *  super long int 型の値 X が与えられるので、hash(X) の値を求めてください。
 */
function step17(){
  var lines = ['11111111111111111111111111111111']
  //var lines = ['36585594857520029384829183475638']
  var numbers = []
  if(lines[0].length==32 && lines[0].slice(0,1)!=0){
    for(var i=0; i<32; i++){
      numbers.push(lines[0].slice(i,i+8))
      i+=7
    }
    var result = 0
    numbers.forEach(number=>{
      result = result + Number.parseInt(number)
    })
    console.log('STEP: 17 ' + result)
  }
}
//step17()

/*
 * STEP: 18 【文字列 3】p4!2@
 *  英単語に含まれるアルファベットの一部を形の似た数字や記号で置き換えることを Leet といいます。
 *  Leet はパスワードやユーザー名の作成の際に便利な手法の一つです。
 *  paiza では、エゴサーチを強化するためにツイートの中に Leet 表記された paiza が含まれているかを判定するプログラムを作成することになりました。
 *  ツイートの文章 S が与えられるので、ツイートに "paiza" が含まれる場合は "paiza", "paiza" が含まれず Leet 表記された "paiza" が含まれる場合は 
 *  "leet", どちらも含まれない場合は "nothing" と出力してください。
 *  なお、"paiza" の leet 文字列は、"paiza" について以下の置き換えを 1 回以上おこなうことで得られる文字列をさすものとします。
 *   ・a -> 4 または a -> @
 *   ・i -> 1 または i -> !
 *   ・z -> 2
 */
function step18(){
  var lines = ['leetp@1za']
  //var lines = ['nopaizanostudy']
  //var lines = ['uy3xym9gha63ab']
  //var lines = ['976t72hg9vy8ohcfe0x23t82hlmxi5tkh6468vc2fr8e42d4ti75dwpjbr2fk7p4iza8ejel0d9r77fulnxe1ota5122znxpk2']
  //var lines = ['nrv7e8kxacr1pme6fgvctgojhnx19xl5hm9o5t231gzaujqhaodnick88zs36h8x376fp@iz@0pyc3pxnd4l5jwd4esb4nsz']
  //var lines = ['8lpo4fxbz7myigv39sk']
  var paiza = 'paiza'
  var repChar_a = ['4','@','a']
  var repChar_i = ['1','l','i']
  var repChar_z = ['2','z']
  var pFlg = false
  for(var i=0; i<lines[0].length; i++){
    var char = lines[0].slice(i,i+1)
    
    if(char=='p'){
      pFlg = true
      var c = 1
      while(c<paiza.length){
        var char2 = lines[0].slice(i+c,i+c+1)
        var flg = false
        switch(c){
          case 1:
          case 4:
            for(var ra in repChar_a){
              if(repChar_a[ra]==char2){
                flg = true
                break
              }
            }
            break

          case 2:
            for(var ri in repChar_i){
              if(repChar_i[ri]==char2){
                flg = true
                break
              }
            }
            break

          case 3:   
            for(var rz in repChar_z){
              if(repChar_z[rz]==char2){
                flg = true
                break
              }
            }
            break
        }
        c++
      }
      if(flg) {
        if(lines[0].slice(i,i+paiza.length)==paiza){
          console.log('STEP: 18 ' + paiza)
        }else{
          console.log('STEP: 18 leet')
        }
        break
      }else{
        if(i+paiza.length>lines[0].length){
          console.log('STEP: 18 notihng')
          break
        }else{
          pFlg = false
        }
      }
    }
  }
  if(pFlg==false){
    console.log('STEP: 18 nothing')
  }
}
//step18()

/*
 * STEP: 19 【配列 1】平面で計算
 *  N × N の二次元配列 A が与えられるので、N 要素からなる縦列・横列・斜め列の和のうち、最大のものを求めてください。
 */
function step19(){
  //var lines = [3,'1 2 3', '4 5 6', '7 8 9']
  var lines = [4,'1 2 3 4','2 3 4 1','3 4 1 2','4 1 2 3']
  var N = Number.parseInt(lines[0])
  lines.shift()
  var ary = [], arys = []
  for(var l in lines){
    ary[l] = lines[l]
    arys.push(ary[l].split(' '))
  }
  var numsH = []
  var numsW = []
  var numsDl = []
  var numsDr = []
  var c = 0
  while(c<N){
    var numH = 0
    var numDl = 0
    for(var i=0; i<arys.length; i++){
      var numW = 0
      for(var j=0; j<arys[i].length; j++){
        if(j==c){
          numH += Number.parseInt(arys[i][j])
        }
        if(i==j){
          numDl += Number.parseInt(arys[i][j])
        }
        numW += Number.parseInt(arys[i][j])
      }
      if(numsW.length!=N){
        numsW.push(numW)
      }      
    }
    numsH.push(numH)
    if(numsDl.length<1){
      numsDl.push(numDl)
    }
    var numDr = 0
    var z = arys.length-1
    for(i=c; i<arys.length; i++){
      numDr += Number.parseInt(arys[i][z])
      z--
    }
    if(numsDr.length<1){
      numsDr.push(numDr)
    }
    c++
  }

  console.log('STEP: 19 ' + Math.max(...numsW,...numsH,...numsDl,...numsDr))
}
//step19()

/*
 * STEP: 20 【配列 2】立体で計算
 * 
 */

/*
 * STEP: 21 【計算 1】マンハッタン距離
 *  幾何学における距離概念にユークリッド距離とマンハッタン距離というものがあります。
 *  ユークリッド距離では、二点 P_1(x_1,y_1), P_2(x_2,y_2) の間の距離 len(P1,P2) を次のように定義しています。
 *   len(P_1,P_2) = sqrt( (x_1 - x_2)^2 + (y_1 - y_2)^2 )
 *   (sqrt(A) は ルート A, つまり A の平方根を表す)
 *  一方、マンハッタン距離では二点 P_1(x_1,y_1), P_2(x_2,y_2) の間の距離 len(P1,P2) を次のように定義しています。
 *   len(P_1,P_2) = |x_1 - x_2| + |y_1 - y_2|
 *  地点 P の座標と、1〜N(>3) 番の番号が振られた地点 F_1, ..., F_N の座標が与えられるので、ユークリッド距離で計算した際に
 *  地点 P からの距離が近い 3 地点の番号と、マンハッタン距離で計算した際に地点 P からの距離が近い 3 地点の番号を求めてください。
 *  ただし距離が同じ地点が複数存在する場合、番号が小さい地点ほど近い地点であるものとしてください。
 */
function step21(){
  //var lines = ['100 100',3,'103 103','101 105','102 104']
  //var lines = ['100 100',3,'100 100','123 123','120 120']
  //var lines = ['16 426',28,'915 717','193 385','537 779','918 874','524 817','795 636','519 101','417 847','422 494','166 112'
  //              ,'526 283','385 927','20 592','304 532','476 754','154 266','912 730','686 979','149 467','627 136','821 307'
  //              ,'76 619','273 848','29 539','17 851','785 458','285 391','869 931']
  var lines = ['529 656',64,'545 375','806 119','99 234','525 743','761 502','334 489','211 19','387 712','524 375','366 621','307 804','681 673','885 587','47 445','775 798','908 806','250 762','951 98','582 758','393 254','845 949','340 580','313 114','132 241','333 29','170 958','591 664','959 311','556 265','760 775','918 859','295 586','793 227','416 115','474 641','61 435','827 738','640 154','810 718','417 580','590 415','189 904','159 65','950 122','485 375','911 279','939 878','40 188','466 814','724 42','570 899','275 166','638 770','933 457','229 930','601 953','451 140','279 941','268 567','610 658','140 985','430 189','949 352','165 233']
  var ay = lines[0].split(' ')
  var P_x = Number.parseInt(ay[0])
  var P_y = Number.parseInt(ay[1])
  lines.shift()
  var N = Number.parseInt(lines[0])
  lines.shift()

  var eugrit = []
  var manhattan = []
  for(var i=0; i<lines.length; i++){
    var ar2 = lines[i].split(' ')
    var x_i = Number.parseInt(ar2[0])
    var y_i = Number.parseInt(ar2[1])
    eugrit.push([i,Math.sqrt(((P_x-x_i)**2) + ((P_y-y_i)**2))])
    manhattan.push([i,Math.abs(P_x-x_i)+Math.abs(P_y-y_i)])
  }
  eugrit.sort(function(a,b){return b[1]-a[1]})
  var e_max = eugrit[0][1]
  eugrit.sort(function(a,b){return a[1]-b[1]})
  var e_min = eugrit[0][1]
  
  if(e_max==e_min){
    var e_c = 1
    while(e_c<4){
      console.log(e_c)
      e_c++
    }
  }else{
    var e_c = 0
    for(var e=0; e<eugrit.length; e++){
      for(i=0; i<lines.length; i++){
        ar2 = lines[i].split(' ')
        x_i = Number.parseInt(ar2[0])
        y_i = Number.parseInt(ar2[1])
        var e_temp = Math.sqrt(((P_x-x_i)**2) + ((P_y-y_i)**2))
  
        if(eugrit[e][1]==e_temp){
          console.log(i+1)
          e_c++
          break
        }
      }
      if(e<eugrit.length-1){
        if(eugrit[e][1]==eugrit[e+1][1]) e+=1
      }
      if(e_c==3) break
    }
  }
  manhattan.sort(function(a,b){return b[1]-a[1]})
  var m_max = manhattan[0][1]
  manhattan.sort(function(a,b){return a[1]-b[1]})
  var m_min = manhattan[0][1]
  if(m_max==m_min){
    var m_c = 1
    while(m_c<4){
      console.log(m_c)
      m_c++
    }
  }else{
    var m_c = 0
    for(var m=0; m<manhattan.length; m++){
      for(i=0; i<lines.length; i++){
        ar2 = lines[i].split(' ')
        x_i = Number.parseInt(ar2[0])
        y_i = Number.parseInt(ar2[1])
        var m_temp = Math.abs(P_x-x_i)+Math.abs(P_y-y_i)
  
        if(manhattan[m][1]==m_temp){
          console.log(i+1)
          m_c++
          break
        }
      }
      if(m<manhattan.length-1){
        if(manhattan[m][1]==manhattan[m+1][1]) m+=1
      }
      if(m_c==3) break
    }
  }  
}
//step21()

/*
 * STEP: 22 【計算 2】疑似乱数
 *  指定した範囲内の値を一様ランダムに出力する装置を乱数生成機といい、出力された数値を乱数といいます。
 *  この乱数は乱択アルゴリズムなどで利用されており、IT の分野で大きな役割を果たしています。
 *  この乱数を手元で再現する方法として疑似乱数というものがあります。
 *  この疑似乱数は、乱数を得る代わりに事前に用意しておいた計算式の結果を乱数として採用するというものです。
 *  この問題では試しに以下のような計算式によって定められた疑似乱数生成機を用いて、乱数を N 個(rnd_1, ..., rnd_N)生成してみましょう。
 *   rnd_i = (X^i + X^{i-1} ... + X^1) mod M
 */
function step22(){

}
//step22()