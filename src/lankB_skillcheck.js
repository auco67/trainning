const c = require("config")

/*
 * STEP: 1 みんなでしりとり
 * あなたは友達たちと N 人でしりとりを行うことにしました。
 * 1 人目、 2 人目、...、 N 人目、 1 人目、2 人目、... という順序で発言をします。
 * ここで、それぞれの人は、次に挙げる 4 つのしりとりのルールを守って発言をする必要があります。
 * 1. 発言は、単語リストにある K 個の単語のうちのいずれかの単語でなければならない。
 * 2. 最初の人以外の発言の頭文字は、直前の人の発言の最後の文字と一緒でなければならない。
 * 3. 今までに発言された単語を発言してはならない。
 * 4. z で終わる単語を発言してはならない。
 * ここで、発言の途中で上のルールを破った場合、ルールを破った人はしりとりから外れます。
 * そして、その人を抜いて引き続きしりとりを続けていきます。このとき、後続の人は、ルール 2 を守る必要はありません。
 * N 人がしりとりを行ったログが M 行分与えられます。
 * このとき、M 回の発言が終わった後、しりとりから脱落せずに残っている人のリストを表示するプログラムを書いてください。
 */
function step1(){
    var lines = ['3 6 7','a','aloha','app','az','paiza','warp','app','paiza','a','aloha','az','warp','paiza']
    //var lines = ['4 4 4','abacus','banana','candy','yankee','banana','candies','candies','yankee']
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = Number.parseInt(ay[1])
    var M = Number.parseInt(ay[2])
    lines.shift()
    var dic = []
    var game = []
    for(var i=0; i<lines.length; i++){
        if(i<K){
            dic.push(lines[i])
        }else{
            game.push(lines[i])
        }
    }
    var words = dic.concat()
    var no = []
    var fault = false
    for( i=0; i<M; i++){
        if(i==0){
            var lastChar = game[i].slice(-1)
            if(lastChar=='z'){
                no.push('X')
                fault = true
            }else{
                if(words.includes(game[i])){
                    var n = words.indexOf(game[i])
                    words.splice(n, 1)
                    no.push('O')
                    fault = false
                }else{
                    no.push('X')
                    fault = true
                }
            }
        }else{
            if(fault){
                var lastChar = game[i].slice(-1)
                if(lastChar=='z'){
                    no.push('X')
                    fault = true
                }else{
                    if(words.includes(game[i])){
                        var n = words.indexOf(game[i])
                        words.splice(n, 1)
                        no.push('O')
                        fault = false
                    }else{
                        no.push('X')
                        fault = true
                    }
                } 
            }else{
                var fastChar = game[i].slice(0,1)
                if(lastChar==fastChar){
                    lastChar = game[i].slice(-1)
                    if(lastChar=='z'){
                        no.push('X')
                        lastChar = game[i+1].slice(-1)
                        fault = true
                    }else{
                        if(words.includes(game[i])){
                            var n = words.indexOf(game[i])
                            words.splice(n, 1)
                            no.push('O')
                            fault = false
                        }else{
                            no.push('X')
                            fault = true
                        }
                    }
                }else{
                    no.push('X')
                    fault = true
                }
            }            
        }
    }
    var players = []
    var cnt = 1
    while(cnt<N+1){
        var p = new player(cnt)
        players.push(p)
        cnt++
    }
    
    cnt = 0
    for(var n in no){
        if(no[n]=='X'){
            players[cnt].fault()
        } 
        if(cnt==N-1){
            cnt = 0
        }else{
            cnt++
        }
    }
    cnt = 0
    players.forEach(p =>{
        if(p.absent){
            cnt++
        }
    })
    console.log(cnt)
    players.forEach(p =>{
        if(p.absent){
            console.log(p.no)
        }
    })
}
class player{
    constructor(no){
        this.no = no
        this.absent = true
    }

    fault(){
        this.absent = false
    }
}
//step1()

/* 
 * STEP: 2 神経衰弱
 * 神経衰弱と呼ばれるトランプゲームのシミュレーションをしましょう。今回は数字が書かれたトランプのみを考え、ジョーカーは考えません。
 * まず、トランプを縦 H 枚、横 W 枚の長方形の形に並べた状態でスタートします。H × W 枚のトランプには 1 〜 13 の数字のうちどれか1つが書かれています。
 * また、同じ数字が書かれたトランプが複数あります。プレイヤーが N 人おり、それぞれ 1 〜 N で番号付けられています。
 * ゲームが始まると、1番の人から、このような手順でプレイしていきます。
 * ・並べられたトランプから2枚のトランプを選び、めくります。
 * ・めくった2枚のトランプに異なる数字が書かれていれば、次のプレイヤーの手番となります。同じ数字であれば、次の操作をおこないます。
 * ・まず、2枚のトランプはめくったプレーヤーのものとなり、取り除かれます。
 * ・トランプがすべて取り除かれた場合、ゲームは終了となります。
 * ・トランプが残っている場合、同じプレーヤーがまた最初の手順に戻り、トランプをめくります。
 * ここで、N 番のプレイヤーの次のプレイヤーは 1 番のプレイヤーであるとします。
 * ゲームの初期状態におけるトランプの配置と、ゲームが終わるまでに捲られたトランプに関する時系列順の記録が与えられます。
 * その記録を用いて、各プレイヤーが取り除いたトランプの枚数を求めてください。
 */
function step2(){
    var lines = ['2 3 2','1 2 3','2 1 3',5,'1 1 2 1','1 1 1 2','1 1 2 2','1 3 2 3','1 2 2 1']
    //var lines = ['2 5 3','5 8 8 6 3','3 6 3 3 5',8,'1 4 2 2','1 3 2 1','2 4 2 3','1 3 1 5','2 5 1 1','2 1 1 2','1 5 2 1','1 2 1 3']
    var ay = lines[0].split(' ')
    var H = Number.parseInt(ay[0])
    var W = Number.parseInt(ay[1])
    var N = Number.parseInt(ay[2])
    lines.shift()

    var tramps = []
    var cards = []
    for(var i=0; i<lines.length; i++){
        if(i<H){
            tramps[i] = []
            var ay2 = lines[i].split(' ')
            for(var j=0; j<W; j++){
                tramps[i][j] = Number.parseInt(ay2[j])
            }
        }else if(i==H){
            var T = Number.parseInt(lines[i])
        }else{
            cards[i-H-1] = []
            var ay3 = lines[i].split(' ')
            for(j=0; j<ay3.length; j++){
                cards[i-H-1][j] = Number.parseInt(ay3[j])
            }
        }
        
    }
    //console.log(tramps, T, cards)
    var players = []
    var cnt = 0
    while(cnt<N){
        players.push(0)
        cnt++
    }
    var index = 0
    for(var c=0; c<T; c++){
        var h1 = cards[c][0]-1
        var w1 = cards[c][1]-1
        var h2 = cards[c][2]-1
        var w2 = cards[c][3]-1
       
        if(tramps[h1][w1]==tramps[h2][w2]){
            tramps[h1][w1]=0
            tramps[h2][w2]=0
            players[index] += 2         
        }else{
            if(index==N-1){
                index = 0
            }else{
                index +=1
            }
        }
    }
    players.forEach(player=>{
        console.log(player)
    })
}
//step2()

/*
 * STEP: 3 【殿堂入りキャンペーン】3Dプリンタ
 * あなたは念願の3Dプリンタを購入しました。早速、いろいろな立体を出力して楽しみましょう！
 * 3Dプリンタに入力される立体のデータは、大きさ 1×1×1 の立方体（セルという）を一つ以上組み合わせることで得られます。
 * より正確に述べると次のようになります：
 * 三次元空間で図１のような座標系 (x,y,z) を考えます。
 * 立体データは、各座標 (x,y,z) でのセルが立体に含まれるかどうかを指定することで得られます。
 * 例えば、図２の立体は 14 個のセル (1,1,1), (1,2,1), (1,3,1), (2,1,1), (2,2,1), ..., (2,1,3), (2,2,3) を組み合わせることで得られます。
 * あなたはまず、出力したい立体のデータを作りました。あとは、データを3Dプリンタに入力して印刷するだけです。
 * しかし、データにミスがあっては大変です。慎重なあなたは、実際に印刷を始める前に、出力される立体を正面（x軸の正の方向）から見たときの図を求めてみることにしました。
 * 立体のデータが入力された時、この立体を正面から見たときの図を出力するプログラムを書きましょう。
 */
function step3(){
    var lines = ['3 3 3','###','##.','#..','--','##.','##.','...','--','##.','##.','...','--']
    var ay = lines[0].split(' ')
    var X = Number.parseInt(ay[0])
    var Y= Number.parseInt(ay[1])
    var Z = Number.parseInt(ay[2])
    lines.shift()

    var array = []
    var array2 = []
    var array3 = []
    var sZ = 1
    var sX = 1
    for(var i=0; i<lines.length; i++){
        var sY = 1        
        if(lines[i].includes('#')){
            for(var j=0; j<lines[i].length; j++){
                if(lines[i].slice(j, j+1)=='#'){
                    array.push(sX + ' ' + sY + ' ' + sZ)
                }else{
                    array.push('0 0 0')
                }
                sY += 1     
            }
            array2.push(array.concat())
            array.splice(0)
        }else if(lines[i]!='--'){
            for(var j=0; j<X; j++){
                array.push('0 0 0')
            }
            array2.push(array.concat())
            array.splice(0)
        }
        if(lines[i]=='--'){
            sZ += 1
            sX = 1
            array3.push(array2.concat())
            array2.splice(0)
        }else{
            sX += 1
        }        
    }
    console.log(array3)
    
}
step3()