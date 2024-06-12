/*
 * B109 【50万人記念問題】映画館の席の予約
 *
 */
function B109(){

}
B109()

/*
 * B129 : n毛作
 */
function B129(){
}

/*
 * B145 : ビンゴゲームの判定
 *   N × N のビンゴカードが 1 枚あります。どのビンゴカードにも中央のマスには 0 が書かれており、最初から開けることができます。
 *   また、他のマスには数字がランダムに書かれています。ただし、同じ数字が書かれたマスはありません。
 *   これから K 回の抽選が行われます。抽選では数字がランダムに排出されます。同じ数字が2回以上排出されることはありません。
 *   ビンゴカードに抽選された数字と同じ数字が書かれたマスがあれば、そのマスを開けることができます。
 *   ビンゴカードの縦横もしくは対角の斜め N 個のマスがすべて開けられたとき、ビンゴとします。
 *   K 回の抽選の後、ビンゴの数を出力してください。
 */
function B145(){
    //var lines = ['3 8','13 3 9','8 0 2','16 17 15','7 14 9 10 3 13 16 8']
    //var lines = ['5 8','7 6 15 32 41','29 5 48 3 43','26 13 0 1 18','2 17 49 8 40','11 50 36 22 27','3 21 16 41 11 40 34 17']
    var lines = ['3 8','1 2 3','4 0 5','6 7 8','1 2 3 4 5 6 7 8']
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = Number.parseInt(ay[1])
    lines.shift()
    var bingo = []
    for(var i=0; i<N; i++){
        bingo[i] = []
        var ary = lines[i].split(' ')
        for(var j=0; j<N; j++){
            bingo[i][j] = ary[j]
        }
    }
    var games = lines[lines.length-1].split(' ')
    games.forEach(game=>{
        for(i=0; i<N; i++){
            for(j=0; j<N; j++){
                if(bingo[i][j]==game){
                    bingo[i][j] = '0'
                    break
                }
            }            
        }
    })

    var count = 0
    var c = 0
    while(c<N){
        var numH = 0
        var numDl = 0
        for(var i=0; i<N; i++){
            var numW = 0
            for(j=0; j<N; j++){
                if(j==c)    numH += Number.parseInt(bingo[i][j])
                if(i==j)    numDl += Number.parseInt(bingo[i][j])
                if(c==0)    numW += Number.parseInt(bingo[i][j])         
            }
            if(c==0 && numW==0) count++
        }
        if(numH==0) count++
        if(c==0){
            var numDr = 0
            var z = bingo.length-1
            for(i=c; i<bingo.length; i++){
                numDr += Number.parseInt(bingo[i][z])
                z--
            }
            if(numDl==0) count++
            if(numDr==0) count++
        }
        c++
    }
    console.log('B145 :' + count)
}
B145()