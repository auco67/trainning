/*
 * STEP: 1【マップの扱い 1】マップの書き換え・1 マス
 *  行数 H , 列数 W の盤面があり、各マスには文字が 1 つだけ書かれています。盤面と y , x 座標 が与えられるので、
 *  盤面の与えられた座標の文字が "." の場合は "#" に、"#" の場合は "." に書き換えた後の盤面を出力してください。
 *  なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。
 */
function step1(){
    //var lines = ['3 3', '...', '...', '...', '0 0']
    var lines = ['4 4','####', '####', '....', '##..','2 2']
    var ary = lines[0].split(' ')
    var H = Number.parseInt(ary[0])
    var W = Number.parseInt(ary[1])
    lines.shift()
    var board = []
    var othello  = lines[lines.length-1].split(' ')
    for(var i in othello){
        othello[i] = Number.parseInt(othello[i])
    }
    for(var i=0; i<H; i++){
        board.push(lines[i])
    }
   
    for(var b in board){
        var str = ''
        if(othello[0] == b){
            for(var j=0; j<board[b].length; j++){
                if(othello[1] == j){
                    var char = board[b].slice(othello[1],othello[1]+1)
                    if(char == '.'){
                        str = str + '#'
                    }else{
                        str = str + '.'
                    }
                }else{
                    str = str + board[b].slice(j,j+1)
                }
            }
        }else{
            str = str + board[b]
        }
        console.log('STEP: 1 ' + str)
    }
}
step1()