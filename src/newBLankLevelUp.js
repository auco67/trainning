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
  //var lines = ['3 3', '##.', '###', '...', '1 1']
  var lines = ['10 10','##########', '..........', '##########',
                '##########', '..........', '#.#.#.#.#.', 
                '.#.#.#.#.#', '#.#.#.#.#.', '.#.#.#.#.#',
                '..........','2 3']
  
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
      if(i==(y+move[0])){
        if(j==x){
          if(board[i][j]=='.'){
            board[i][j] = '#'
          }else{
            board[i][j] = '.'
          }
        }
      }
      if(i==y){
        if(j==(x+move[0])){
          if(board[i][j]=='.'){
            board[i][j] = '#'
          }else{
            board[i][j] = '.'
          }
        }
        if(j==x){
          if(board[i][j]=='.'){
            board[i][j] = '#'
          }else{
            board[i][j] = '.'
          }
        }
        if(j==(x+move[1])){
          if(board[i][j]=='.'){
            board[i][j] = '#'
          }else{
            board[i][j] = '.'
          }
        }
      }
      if(i==(y+move[1])){
        if(j==x){
          if(board[i][j]=='.'){
            board[i][j] = '#'
          }else{
            board[i][j] = '.'
          }
        }
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
