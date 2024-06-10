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