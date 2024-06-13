/*
 * B109 【50万人記念問題】映画館の席の予約
 *   あなたは、映画館の席の予約をしようとしています。
 *   座席は、縦の位置を表す p と横の位置を表す q の (p, q) で指定でき、最も左上の席が (0, 0) となっています。
 *   映画館には、最も見やすい席が 1 席存在し、最も映画を見やすい席とのマンハッタン距離が小さいほど、映画を見やすくなっています。
 *   マンハッタン距離とは、ある 2 点 (p, q)、(s, t) に対して、|p - s| + |q - t| で与えられる距離を表します。
 *   あなたは、できるだけ映画を見やすい席を予約しようと思っています。
 *   最も見やすい席とすでに予約されている席の情報が与えられるので、まだ予約されていない席の中で、最も映画を見やすい席を求めてください。   
 */
function B109(){
    //var lines = ['9 4 5 2 3','1 0','1 2','1 3','1 4','2 2','2 3','2 4','3 3','3 4']
    var lines = ['4 3 2 2 0','0 0','1 0','1 1','2 1']
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var H = Number.parseInt(ay[1])
    var W = Number.parseInt(ay[2])
    var P = Number.parseInt(ay[3])
    var Q = Number.parseInt(ay[4])
    lines.shift()

    var seats = []
    for(var i=0; i<H; i++){
        seats[i] = []
        for(var j=0; j<W; j++){
            seats[i][j] = '.'
        }
    }
    
    var reserves = lines
    for(var r in reserves){
        var r_ay = reserves[r].split(' ')
        var h_i = Number.parseInt(r_ay[0])
        var w_j = Number.parseInt(r_ay[1])
        for(i=0; i<H; i++){
            for(j=0; j<W; j++){
                if(i==h_i && j==w_j){
                    seats[i][j] = 'X'
                }
            }
        }
    }
    
    var manhattans = []
    for(i=0; i<H; i++){
        var manhattan = []
        for(j=0; j<W; j++){
            if(seats[i][j]!='X'){
                manhattan.push([Math.abs(P-i)+Math.abs(Q-j),i,j]) 
            }
        }
        if(manhattan.length!=0){
            manhattan.sort(function(a,b){return a[0]-b[0]})
            manhattans.push(manhattan)  
        }
    }
    var result = []
    manhattans.forEach(m =>{
        result.push(m[0])
    })
    result.sort(function(a,b){return a[0]-b[0]})
    var max = result[0][0]
    result.sort(function(a,b){return b[0]-a[0]})
    var min = result[0][0]

    result.forEach(r=>{
        if(r[0]==max){
            console.log('B109 : ' + r[1] +' ' + r[2])
        }
    })
}
B109()

/*
 * B129 : n毛作
 *   あなたは農場で働いています。あなたが働いている農場では、一年のうちに n 回、同じ畑で作物を栽培します。
 *   あなたが担当している畑は、h 行 w 列の正方形状の区画に分割されています。以下では、i 行 j 列目の区画を区画 (i, j) と表記します。
 *   また、あなたが担当している畑では、一年を通して m 種類の作物を栽培します。ここでは、それぞれの作物に 1 から順番に番号を振り、
 *   作物 1、作物 2、…、作物 m と呼ぶことにします。
 *   一年のはじめには、畑では何も栽培されていません。この状態から、次の手順に則り作物を栽培していきます。
 *   ・第 i 期には、a_i 行から b_i 行まで、c_i 列から d_i 列までの長方形の区画の作物をすべて収穫する。そして、同じ区画に作物 e_i を植える
 *   ただし、第 i 期に植えた作物は、第 i + 1 期には収穫可能な状態まで育っているとします(1 ≦ i ≦ n - 1)。
 *   また、それぞれの作物は丈夫なため、一度収穫可能な状態まで育った後に枯れることは無いものとします。
 *   あなたは、事前に n 期分の栽培計画のデータを手渡されました。第 n 期までの手順が終わったあとに、m 種類の作物がそれぞれいくつ収穫できるかを計算してください。
 *   また、第 n 期の作業が終わった後に、それぞれの区画に植えられている作物の情報を表示してください。
 */
function B129(){
    //var lines = ['3 2','2 4','1 2 3 4 1','1 1 1 4 2','1 2 2 3 1']
    var lines = ['7 4','1 10','1 1 1 9 4','1 1 2 3 3','1 1 7 9 1','1 1 4 7 3','1 1 2 3 2','1 1 1 3 1','1 1 3 3 3']
    var ay = lines[0].split(' ')
    var n = Number.parseInt(ay[0])
    var m = Number.parseInt(ay[1])
    lines.shift()
    ay = lines[0].split(' ')
    var h = Number.parseInt(ay[0])
    var w = Number.parseInt(ay[1])
    lines.shift()

    var farm = []
    for(var i=0; i<h; i++){
        farm[i] = []
        var ary = lines[i].split(' ')
        for(var j=0; j<w; j++){
            farm[i][j] = '.'
        }
    }
    var plant = []
    for(i=0; i<m; i++){
        plant[i] = []
        plant[i][0] = i+1
        plant[i][1] = 0
    }
    var works = lines
    for(i=0; i<works.length; i++){
        var work = works[i].split(' ')
        var h_s = Number.parseInt(work[0])-1
        var h_e = Number.parseInt(work[1])-1
        var w_s = Number.parseInt(work[2])-1
        var w_e = Number.parseInt(work[3])-1
        var p_no = Number.parseInt(work[4])

        for(var z=h_s; z<=h_e; z++){
            for(var y=w_s; y<=w_e; y++){
                if(farm[z][y]==''){
                    farm[z][y] = p_no
                }else{
                    for(var p in plant){
                        if(plant[p][0]==farm[z][y]){
                            plant[p][1]++
                            break
                        }
                    }
                    farm[z][y] = p_no
                }
            }
        }         
    }
    plant.forEach(p=>{
        console.log('B129 : ' + p[1])
    })

    farm.forEach(f=>{
        var str = f.join()
        str = str.replaceAll(',','')
        console.log('B129 : ' + str)
    })
}
//B129()

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
//B145()