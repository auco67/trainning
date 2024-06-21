/*
 * B096 爆弾の大爆発
 *  あなたは今、とある戦略ゲームをプレイしています。
 *  ゲームの中で、敵を攻撃するために、フィールドに爆弾を仕掛けました。
 *  敵がフィールド内に入ったところで一気に爆弾を点火し、敵に攻撃をする寸法です。
 *  フィールドは縦 H 行、横 W 行のマス目としてあらわされ、これらのマス目のうちのいくつかに爆弾が仕掛けてあります。
 *  i 行目、j 列目の爆弾が爆発すると、i 行目全体と j 列目全体に爆風が広がります。
 *  あなたはすでにフィールド上に爆弾を仕掛け終わりました。
 *  フィールド上の爆弾を一気に点火した場合、いくつのマスに爆風が広がるかを計算してください
 *  例えば、入力例 1 では以下のマスに爆風が広がるため、求めるべきマス目数は 12 になります。
 */
function B096(){
    //var lines = ['4 4','#.#.','....','..#.','....']
    var lines = ['5 8','.#.#....','........','........','........','.....#..']
    var ay = lines[0].split(' ')
    var H = Number.parseInt(ay[0])
    var W = Number.parseInt(ay[1])
    lines.shift()
    var position = []
    var fields = []
    for(var i=0; i<lines.length; i++){
        fields[i] = []
        for(var j=0; j<lines[i].length; j++){
            var char = lines[i].slice(j,j+1)
            fields[i][j] =char
            if(fields[i][j]=='#'){
                position.push([i,j])
            }
        }
    }
    position.forEach(p=>{
        for(i=0; i<fields.length; i++){
            if(i==p[0]){
                var c = i
                while(c<fields[i].length){
                    fields[i][c] = '#'
                    c++
                }
                var c = i
                while(c>-1){
                    fields[i][c] = '#'
                    c--
                }
            }
            fields[i][p[1]]= '#'
        }
    })
    var counter = 0
    for(i=0; i<fields.length; i++){
        for(j=0; j<fields[i].length; j++){
            if(fields[i][j]=='#'){
                counter++
            }
        }
    }
    console.log(counter)
}
//B096()

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
//B109()

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

/* 
 * B079 : 相性チェック
 *  あなたは恋愛相談会社 プログラマーです。今回、あなたは二人の相性占いをするプログラムを作ることにしました。
 *  あなたが作成するプログラムは、まず、以下の流れで「二人の相性」を求めます。
 *   1. 相性をチェックする二人の名前を並べた英小文字からなる文字列を入力します。
 *   2. "a" を 1、"b" を 2、...、"z" を 26 として、文字列を数列に変換します。この数列を A とします。
 *   3. 数列 A の隣り合う 2 つの数を足して前から順番に並べた新しい数列 A' を作り、これを新たに A とします。
 *      このとき、A の要素の大きさが 101 を超えていた場合、その要素から 101 を引きます。
 *   4. 数列 A の要素数が 1 になるまで 3. の手順を繰り返します。A の要素数が 1 となったとき、残った要素の値を「二人の相性」とします。
 *  名前の並べ方は 2 通りあります。そこで、あなたは相性占いの結果として、 2 通りの方法で計算した「二人の相性」のうち大きい方を出力するように
 *  プログラムを組むことにしました。
 *  相性占いをする二人の人物の名前が与えられたとき、相性占いの結果を出力するプログラムを作成してください。
 */
function B079(){
    //var lines = ['pa iza']
    var lines = ['alice bob']
    var ay = lines[0].split(' ')
    var strP1 = ay[0]+ay[1]
    var strP2 = ay[1]+ay[0]
    var ayP1 = getAlphNum(strP1)
    var ayP2 = getAlphNum(strP2)
    var compaP1 = getCompatibility(ayP1)
    var compaP2 = getCompatibility(ayP2)
    if(compaP1>compaP2){
        console.log(compaP1[0])
    }else{
        console.log(compaP2[0])
    }
}
function getCompatibility(ary){
    var ay = []
    
    for(var i=0; i<ary.length; i++){
        if(i<ary.length-1){
            var num = ary[i]+ary[i+1]
            if(num>=101) num -=101
            ay.push(num)
        }            
    }
    if(ay.length!=1){
        ay = getCompatibility(ay)
    }        
    return ay
}
function getAlphNum(str){
    const alphavets = [
        ['a',1],
        ['b',2],
        ['c',3],
        ['d',4],
        ['e',5],
        ['f',6],
        ['g',7],
        ['h',8],
        ['i',9],
        ['j',10],
        ['k',11],
        ['l',12],
        ['m',13],
        ['n',14],
        ['o',15],
        ['p',16],
        ['q',17],
        ['r',18],
        ['s',19],
        ['t',20],
        ['u',21],
        ['v',22],
        ['w',23],
        ['x',24],
        ['y',25],
        ['z',26]
    ]
    var strAry = []
    
    for(var i=0; i<str.length; i++){
        var char = str.slice(i, i+1)
        for(var index in alphavets){
            if(alphavets[index][0]==char) {
                strAry.push(Number.parseInt(alphavets[index][1]))
                break
            }
        }
    }
    return strAry
}
//B079()

/* 
 * B110 : 解像度の向上
 * あなたは解像度が H * W の 2 枚の画像を用いることで、擬似的により細かい解像度の画像を得ることを考えました。
 * ただし、解像度が H * W の画像は縦に H 個、横に W 個で合計 H * W 個のピクセルを持っており、それぞれのピクセルに「ピクセル値」と呼ばれる、
 * その画素の明るさを表す値が定義されています。2 枚の画像を用いて新たな画像を得る際には、以下のようにして画像を構成します。
 * ・2 枚の画像を、ピクセル値をそのままに、それぞれ 2H * 2W 個のピクセルに分割する
 * ・2 枚目の画像を、1 枚目の画像に対して下方向に 1 ピクセル、右方向に 1 ピクセルずらして重ねる
 * ・その後、2 枚両方の画像が重なる部分を抽出する。
 * ・抽出された各ピクセル値は、2 枚の画像の対応する部分のピクセル値の平均をとる(小数点以下切り捨て)ことによって計算される
 * 画像の構成の仕方は図のようになります。
 * この手続きによって、縦に 2 * H - 1、横に 2 * W - 1 のより解像度の高い画像を得ることができます。
 * 2 枚の画像の情報が与えられるので、上記の手続きを経て新たに得られる画像を出力してください。
 */
function B110(){
    //var lines = ['2 3','0 255 255','0 255 255','0 0 0','255 255 255']
    //var lines = ['1 3','0 200 100','100 100 100']
    var lines = ['7 7','0 0 0 167 0 0 0','0 0 167 167 167 0 0','0 167 167 167 167 167 0',
                '167 167 167 167 167 167 167','0 167 167 167 167 167 0','0 0 167 167 167 0 0','0 0 0 167 0 0 0',
                '0 0 0 167 0 0 0','0 0 167 167 167 0 0','0 167 167 167 167 167 0','167 167 167 167 167 167 167',
                '0 167 167 167 167 167 0','0 0 167 167 167 0 0','0 0 0 167 0 0 0']
    var ay = lines[0].split(' ')
    var H = Number.parseInt(ay[0])
    var W = Number.parseInt(ay[1])
    lines.shift()
    var images = []
    for(var i=0; i<(H*2); i++){
        images[i] = []
        for(var j=0; j<(W*2); j++){
            images[i][j] = 0
        }
    }

    var image1 = []
    var image2 = []    
    for(i=0; i<lines.length; i++){
        if(i<H){
            image1.push(lines[i].split(' '))
        }else{
            image2.push(lines[i].split(' '))
        }
    }
    var k = 0 , l = 0
    for( i=0; i<image1.length; i++){
        for( j=0; j<image1[i].length; j++){
            images[k][l] = Number.parseInt(image1[i][j])
            images[k][l+1] = Number.parseInt(image1[i][j])
            images[k+1][l] = Number.parseInt(image1[i][j])
            images[k+1][l+1] = Number.parseInt(image1[i][j])
            l+=2
        }
        k+=2
        l=0        
    }
    
    k = 1 , l = 1
    for( i=0; i<image2.length; i++){
        
        for( j=0; j<image2[i].length; j++){
            
            images[k][l] = Math.floor((images[k][l] + Number.parseInt(image2[i][j]))/2)
            if(l!=images[k].length-1){
                images[k][l+1] = Math.floor((images[k][l+1] + Number.parseInt(image2[i][j]))/2)
            }
            if(k!=images.length-1){
                images[k+1][l] = Math.floor((images[k+1][l] + Number.parseInt(image2[i][j]))/2)
            }
            if(k!=images.length-1 && l!=images[k].length-1){
                images[k+1][l+1] = Math.floor((images[k+1][l+1] + Number.parseInt(image2[i][j]))/2)
            }
            l+=2   
        }
        k+=2        
        l=1
    }

    for( i=1; i<images.length; i++){
        var str = ''
        for( j=1; j<images[i].length; j++){
            str += images[i][j] + ' '
        }
        str = str.slice(0,str.length-1)
        console.log(str)
    }
}
//B110()

/*
 * B053 : 表の自動生成
 * いまどきの表計算ソフトにはオートフィルという機能があります。
 * この機能は選択している表の部分の縦と横の数列の差から等差数列を作り、その数列で残りを入力してくれます。
 * すなわち、 2 行 2 列目以降の i 行 j 列目の要素を a_{i, j} で表した場合
 * ・a_{i, j} = a_{i, j - 1} + (a_{i, 2} - a_{i, 1}) ※ 任意の行が等差数列になっている事を示します
 * ・a_{i, j} = a_{i - 1, j} + (a_{2, j} - a_{1, j}) ※ 任意の列が等差数列になっている事を示しますを同時に満たすように表に入力します。
 * あなたは大量のデータを打ち込みたくないので、このオートフィル機能を使おうとしています。使った際の結果を出力するプログラムを作成してください。
 */
function B053(){
    var lines = ['5 5','1 2','3 4']
    //var lines = ['5 7','1 5','-2 1']
    var ay = lines[0].split(' ')
    var H = Number.parseInt(ay[0])
    var W = Number.parseInt(ay[1])
    lines.shift()
    var spread = []
    for(var i=0; i<H; i++){
        spread[i] = []
        for(var j=0; j<W; j++){
            spread[i][j] = 0
        }
    }
    
    for(i=0; i<lines.length; i++){
        var ay2 = lines[i].split(' ')
        for(j=0; j<ay2.length; j++){
            spread[i][j] = Number.parseInt(ay2[j])
        }
    }
    var diffW = 0
    var diffH = 0
    for(i=0; i<spread.length; i++){

        for(j=0; j<spread[i].length; j++){

            if(j==1){
                diffW = spread[i][j] - spread[i][j-1]
            }
            if(i<=1){
                if(spread[i][j]==0){
                    spread[i][j] = spread[i][j-1] + diffW
                }  
            }else{
                diffH = spread[i-1][j] - spread[i-2][j]
                
                if(spread[i][j]==0){
                    spread[i][j] = spread[i-1][j] + diffH
                } 
            }

        }
    }
    for( i=0; i<spread.length; i++){
        var str = ''
        for( j=0; j<spread[i].length; j++){
            str += spread[i][j] + ' '
        }
        str = str.slice(0,str.length-1)
        console.log(str)
    }
}
//B053()

