/*
 * STEP: 1 指定の位置への要素の追加
 *  整数 N, K, Q と、 長さ N の配列 A_1, A_2, ..., A_N が与えられるので、A_K の後ろに Q を挿入した後の長さ N+1 の配列について、
 *  先頭から改行区切りで出力してください。
 */
function step1(){
    var lines = ['3 1 57',17,57,83]
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = Number.parseInt(ay[1])
    var Q = Number.parseInt(ay[2])
    lines.shift()

    for(var i=0; i<lines.length; i++){
        if(i==K){
            lines.splice(i,0,Q)
        }
    }
    lines.forEach(line=>{
        console.log(line)
    })
}
//step1()

/*
 * STEP: 2 指定要素の検索
 *  長さ N の重複した要素の無い数列 A と整数 K が与えられるので、
 *  A に K が含まれていれば "YES" を、そうでなければ "NO" を出力してください。
 */
function step2(){
    //var lines = ['3 5',1,3,5]
    var lines = ['5 4',1,2,3,5,6]
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = ay[1]
    lines.shift()
    if(lines.includes(K)){
        console.log('YES')
    }else{
        console.log('NO')
    }
}
//step2()

/* 
 * STEP: 3 指定要素の検索(query)
 *  長さ N の重複した要素の無い数列 A と Q 個の整数 K_1 ... K_Q が与えられるので、
 * 各 K_i について、 A に K_i が含まれていれば "YES" を、そうでなければ "NO" を出力してください。
 */
function step3(){
    //var lines = ['5 5',1,2,3,4,5,1,3,5,7,9]
    var lines = ['10 5',351051,62992,166282,497610,636807,678131,885162,81763,810110,943644,670661,463229,62992,1973,901393]
    /*
    const fs = require('fs');
    var text = fs.readFileSync("./csv/step3.txt", 'utf8');
    var lines = text.toString().split('\n');
    */
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var Q = Number.parseInt(ay[1])
    lines.shift()

    var aryA = new Set()
    var aryK = new Set()
    for(var i=0; i<lines.length; i++){
        if(i<N){
            aryA.add(lines[i])
        }else{
            aryK.add(lines[i])
        }
    }
    
    for(var k of aryK){
        if(aryA.has(k)){
            console.log('YES')
        }else{
            console.log('NO')
        }
    }
}
//step3()

/* 
 * STEP: 4 先頭の要素の削除
 * 数列 A が与えられるので、A の先頭の要素を削除した後の A を出力してください。
 */
function step4(){
    var lines = [10,5980,1569,5756,9335,9680,4571,5309,8696,9680,8963]
    lines.shift()
    lines.shift()

    lines.forEach(line=>{
        console.log(line)
    })
}
//step4()

/*
 * STEP: 5 先頭の要素の削除(query) 
 *  数列 A と入力の回数 K が与えられるので、K 回の入力に応じて次のような処理をしてください。
 *  ・pop: A の先頭の要素を削除する。既に A に要素が存在しない場合何もしない。
 *  ・show: A の要素を先頭から順に改行区切りで出力する。A に要素が存在しない場合何も出力しない。
 */
function step5(){
    var lines = ['5 3',7564,4860,2410,9178,7252,'pop','pop','show']
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = Number.parseInt(ay[1])
    lines.shift()
    var aryA = []
    var aryPro = []
    for(var i=0; i<lines.length; i++){
        if(i<N){
            aryA.push(lines[i])
        }else{
            aryPro.push(lines[i])
        }        
    }
    aryPro.forEach(pro=>{
        if(pro=='pop'){
            if(aryA.length!=0) aryA.shift()
        }else{
            if(aryA.length!=0) {
                aryA.forEach(a=>{
                    console.log(a)
                })
            }
        }
    })
}
//step5()

/*
 * STEP: 6 連想配列 
 *  3xxx 年、ロボット学校の先生である A 君は、新しく担当するクラスの生徒一人一人の出席番号と識別 ID を覚えるように言われました。
 *  具体的には、出席番号が与えられたら、その生徒の識別 ID を言えるようになる必要があります。
 *  覚えるべき生徒の出席番号と識別 ID のペアが与えられたのち、いくつか出席番号が与えられるので、各番号に対応する生徒の識別 ID を出力してください。
 */
function step6(){
    var lines = ['4 2','1 Sin','2 Sakura','3 Kayo','4 Yui',4,2]
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = Number.parseInt(ay[1])
    lines.shift()
    
    var ids = []
    var classes = []
    for(var i=0; i<lines.length; i++){
        var cls = []
        if(i<N){
            ay.splice(0)
            ay = lines[i].split(' ')
            classes.push(ay.concat())
        }else{
            ids.push(lines[i])
        }
    }
    ids.forEach(id=>{
        for(var c in classes){
            if(Number.parseInt(classes[c][0])==id){
                console.log(classes[c][1])
                break
            }
        }
    })
}
//step6()

/* 
 * STEP: 7 連想配列(query) 
 *  3xxx年、ロボット学校の先生である A 君は、新しく担当するクラスの生徒一人一人の出席番号と識別 ID を覚えて、出席番号が与えられたら、
 *  その生徒の識別 ID を言えるようになる必要があります。A 君の務める学校は転校が多く、頻繁に生徒が増減します。
 *  覚えるべき生徒の出席番号と識別 ID が与えられたのち、いくつかのイベントを表す文字列が与えられるので、
 *  与えられた順に各イベントに応じて次のような処理をおこなってください。
 * ・join num id : 生徒番号 num , 識別ID id の生徒を新たに覚える
 * ・leave num : 生徒番号 num の生徒を忘れる
 * ・call num : 生徒番号 num の生徒の識別 ID を出力する
 */
function step7(){
    //var lines = ['4 4','1 Sin','2 Sakura','3 Kayo','4 Yui','call 4','leave 2','join 2 Sakuya','call 2']
    /*
    var lines = ['5 10','696042 pieF4','162082 Geig1','43482 Ich7D','647458 foh8C','71317 Aiv4g',
                'call 43482','call 696042','call 696042','leave 696042','call 647458','call 647458','call 162082','join 591845 Ue7wo',
                'call 591845','leave 647458']
    */
    const fs = require('fs');
    var text = fs.readFileSync("./csv/step7.txt", 'utf8');
    var lines = text.toString().split('\n');
    
    //var dstart = new Date()
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = Number.parseInt(ay[1])
    lines.shift()
    var ids = []
    var classes = new Map()
    for(var i=0; i<lines.length; i++){
        if(i<N){
            ay.length = 0
            ay = lines[i].split(' ')
            classes.set(ay[0],ay[1])
        }else{
            ids.push(lines[i])
        }
    }
    for(var d in ids){
        var ay2 = ids[d].split(' ')
        var order = ay2[0]
        var id = ay2[1]
        if(ay2.length==3) var name = ay2[2]
        
        switch(order){
            case 'join':
                classes.set(id,name)
                break
            case 'leave':
                if(classes.has(id)) classes.delete(id)
                break
            case 'call':
                if(classes.has(id)) console.log(classes.get(id))
        }        
    }
    /*
    var dend = new Date()
    console.log(dstart.getHours() + ":" + dstart.getMinutes() + ':' + dstart.getSeconds() + ' ' + dend.getHours() + ":" + dend.getMinutes() + ':' + dend.getSeconds())
    var diff = dend - dstart
    console.log((diff/60))
    */
}
//step7()

/*
 * STEP: 8 ソートと検索
 * A 君のクラスには A 君を含めて N + 1 人の生徒がいます。A 君の身長は P cm です。A 君以外の N 人の生徒の身長は A_1, ... ,A_N です。
 * 今日、クラスに身長 X cm の転校生が 1 人やってきました。転校生が入ってきた後 N + 2 人のクラス全員で背の順で並んだ時、 
 * A 君は前から何番目に並ぶことになるでしょうか。なお、背の順の先頭の生徒を前から 1 番目の生徒とします。
 */
function step8(){
    //var lines = ['3 188 174',181,177,113]
    var lines = ['10 139 146',165,159,144,195,188,118,118,141,199,124]
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var X = Number.parseInt(ay[1])
    var P = Number.parseInt(ay[2])
    lines.shift()
    lines.push(X)
    lines.push(P)
    lines.sort(function(a,b){return a-b})

    for(var i in lines){
        if(lines[i]==P){
            var j = Number.parseInt(i)+1
            console.log(j)
            break
        }
    }
}
//step8()

/*
 * STEP: 9 ソートと検索 (query)
 * A 君のクラスには A 君を含めて N + 1 人の生徒がいます。A 君の身長は P cm で、他の N 人の生徒の身長はそれぞれ A_1 ... A_N です。
 * このクラスには次のようなイベントが合計 K 回起こります。それぞれのイベントは以下のうちのいずれかです。
 *  ・転校生がクラスに加入する
 *  ・全員で背の順に並ぶ
 * 全員で背の順で並ぶイベントが起こるたびに、そのとき A 君は前から何番目に並ぶことになるかを出力してください。
 */
function step9(){
    //var lines = ['3 3 176',118,174,133,'join 137','join 177','sorting']
    //var lines = ['10 10 145',169,164,162,112,191,168,168,199,176,146,'join 196','join 142','sorting','sorting','join 131','join 140',
    //    'sorting','sorting','join 143','sorting']

    const fs = require('fs');
    var text = fs.readFileSync("./csv/step9.txt", 'utf8');
    var lines = text.toString().split('\n');

    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = Number.parseInt(ay[1])
    var P = Number.parseInt(ay[2])
    lines.shift()
    var classes = new Set()
    var events = []
    for(var i=0; i<lines.length; i++){
        if(i<N){
            classes.add(lines[i])
        }else{
            ay.splice(0)
            ay = lines[i].split(' ')
            events.push(ay.concat())
        }        
    }
    events.forEach(event=>{
        switch(event[0]){
            case 'join':
                classes.add(Number.parseInt(event[1]))
                break
            case 'sorting':
                var aryCls = Array.from(classes)
                aryCls.sort(function(a, b){return a-b})
                for(var c in aryCls){
                    if(aryCls[c]>P){
                        console.log(Number.parseInt(c)+1)
                        break
                    }
                }
        }
    })
}

//step9()

/* 
 * STEP:10 アイドルグループ
 *  N 人組のロボットアイドルグループのマネージャーとなった A 君は、グループに所属しているアイドル全員の名前を把握しておく必要があります。
 *  アイドルグループにはメンバーの加入と脱退がつきものなので、そのたびにメンバーを覚えたり忘れたりする必要があります。
 *  A 君は仕事として握手会の度にアイドル全員の名前を書き出します。ロボットの名前はほとんどが乱数的に付けられたものなので覚えるのが大変です。
 *  そこで、イベント（メンバーの加入・脱退と握手会）が与えられるので、それらに伴う A 君の仕事をおこなうプログラムを作成しましょう。
 */
function step10(){
    var lines = ['2 7','nene','ao','handshake','leave nene','join neko','join koko','handshake','leave neko','handshake']
    //var lines = ['5 10','nene','nana','koko','sasa','kiki','handshake','leave nene','leave kiki','leave nana','leave koko',
    //            'leave sasa','handshake','join riri','join vivi','handshake']
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = Number.parseInt(ay[1])
    lines.shift()
    var idols = new Set()
    var events = []
    for(var i=0; i<lines.length; i++){
        if(i<N){
            idols.add(lines[i])
        }else{
            events.push(lines[i])
        }        
    }
    
    for(var e in events){
        ay.splice(0)
        if(events[e].includes(' ')){
            ay = events[e].split(' ')
            var event = ay[0].toString()
            var name = ay[1].toString()
        }else{
            ay.push(events[e])
            var event = ay[0].toString()
        }
        switch(event){
            case 'handshake':
                var aryIdols = Array.from(idols)
                aryIdols.sort()
                for(var idol of aryIdols){
                    console.log(idol)
                }
                break
            case 'leave':
                idols.delete(name)
                break
            case 'join':
                idols.add(name)
        }
    }
}
//step10()

/* 
 * STEP: 11 歴史を作る時間
 *  西暦 1,000,000,000 年に行われた歴史の授業のグループワークで、歴史上のいくつかの出来事についての記事を年代順に並べて
 *  歴史年表を作成することになりました。
 *  ところが、歴史年表は 1 枚の紙にまとめる必要があるため、古い出来事を担当する人から順番に歴史年表を書くことにしました。
 *  グループの人数 N とそのメンバー S_1 ... S_N が与えられます。続けて、歴史年表に載せる出来事の数 K , 各出来事の起こった年 Y_i , 
 *  その出来事の記事を担当する生徒の名前 C_i が与えられるので、歴史年表を書く担当者の順番を出力してください。
 *  なお、 1 人の生徒が複数の出来事の記事を担当することがある点に注意してください。
 */
function step11(){
    //var lines = ['3 5','nao','hiro','yuki','645 nao','593 hiro','2058 yuki','29484 nao','374759 nao']
    var lines = ['5 10','aoi','ikoka','en','ron','nana','463 nana','7583 nana','5839 nana','17274 nana','3773 nana','264 nana',
                '7485 nana','24855 nana','395385 nana','5355 nana']
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = Number.parseInt(ay[1])
    lines.shift()
    var students = []
    var event = []
    var events = []
    for(var i=0; i<lines.length; i++){
        if(i<N){
            students.push(lines[i])
        }else{
            event.length = 0
            event = lines[i].split(' ')
            events.push([Number.parseInt(event[0]),event[1]])
        }  
    }
    events.sort((a, b) => a[0]-b[0])
    
    for(var e in events){
        var ie = Number.parseInt(e)
        if(ie<events.length-1){
            if(events[ie][0]==events[ie+1][0]){
                events.sort((a, b) => {
                    for(var i=0; i<a.length; i++){
                        if (a[i] < b[i]) {
                          return -1;
                        }
                        if (b[i] < a[i]) {
                          return 1
                        }
                    }
                })
            }
        }
    }
    events.forEach(event=>{
        console.log(event[1])
    })
}
//step11()

/* 
 * STEP: 12 銀行
 *  2xxx年に A が設立した A 中央銀行に勤務する直樹は、故障した ATM の対応として、お金を引き出したい会社と電話をして、
 *  会社名が銀行の名簿に登録されており、かつ、会社側が会社の口座の暗証番号を正しく言えた場合にのみ現金を支払い、
 *  それを記帳するという業務を任されていました。銀行に登録されている会社名とその口座の暗証番号と残高についての情報、また、
 *  直樹の電話の情報が与えられるので、全ての取引が終了した後の全ての会社の残高を出力してください。
 * 解説：　https://paiza.jp/works/mondai/reviews/show/b5d6af5f39bb974414e929facd2ab83c
 */
function step12(){
    //var lines = ['3 5','A 0000 10000','B 1234 23456','C 5678 98765','A 0101 1000','B 1234 1000','C 5678 90000','A 0000 200','B 1233 10000']
    var lines = ['4 8','i 1353 758385','my 9486 46446','me 3785 38575','mine 3573 92474','i 3785 38753','i 7536 8674','my 2472 973',
                'my 2984 385','me 7537 4757','me 3785 3757','mine 3757 3857','mine 3573 3858']
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = Number.parseInt(ay[1])
    lines.shift()
    var company = {}
    var companies = []
    var transaction = {}
    var transactions = []
    for(var i=0; i<lines.length; i++){
        if(i<N){
            ay.length = 0
            ay= lines[i].split(' ')
            company = {name:ay[0], pass:ay[1], total:Number.parseInt(ay[2])}
            companies.push(company)
        }else{
            ay.length = 0
            ay= lines[i].split(' ')
            transaction = { name:ay[0], pass:ay[1], total:Number.parseInt(ay[2])}
            transactions.push(transaction)
        }  
    }
    
    for(var trans of transactions){
        for(var com of companies){
            if(trans.name == com.name){
                if(trans.pass == com.pass){
                    com.total -= trans.total
                    break
                }
            }
        }
    }
    companies.forEach(com=>{
        console.log(com.name + ' ' + com.total)
    })
}
//step12()

/*
 * STEP: 13 経理
 *  A には N 個の部署があり、名前はそれぞれ S_1 ... S_N です。
 * 経理係となったあなたは、どの部署が何円のどのような買い物をしたかを記録するように言われました。
 * どの部署が何円で何を買ったかの領収書が K 枚与えられるので、各部署の会計表を作成しましょう。
 */
function step13(){
    //var lines = ['3 6','A','B','C','A 1 100','B 2 100','A 3 500','C 4 895','C 5 890','A 6 2685']
    var lines = ['4 5','ed','bjd','bdkf','fkoe','ed 20 2093','ed 584 3388','ed 31737 3885','ed 023748 9300','fkoe 82928 274']
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = Number.parseInt(ay[1])
    lines.shift()
    var divisions =[]
    var receipts = []
    for(var i=0; i<lines.length; i++){
        if(i<N){
            divisions.push(lines[i])
        }else{
            ay.length = 0
            ay = lines[i].split(' ')
            var receipt = { div:ay[0], no:ay[1], amount:Number.parseInt(ay[2])}
            receipts.push(receipt)
        }  
    }    
    receipts.sort((a, b) => a.div > b.div ? 1 : -1 )
    var lenDiv = divisions.length
    var lenRec = receipts.length
    for(var i=0; i<lenDiv; i++){
        console.log(divisions[i])        
        for(var j=0; j<lenRec; j++){
            if(divisions[i]==receipts[j].div){
                console.log(receipts[j].no + ' ' + receipts[j].amount)
            }
        }
        console.log('-----')
    }
}
//step13()

/* 
 * STEP: 14 Vtuber
 *  あなたは流行に乗っかり、Vtuber としての活動をスタートしました。活動も軌道にのり、配信をするたびに視聴者が superchat を送ってくれたり、
 *  メンバーシップ制度に加入してくれるようになりました。（わからない方は 「youtube superchat」「youtube membership」 などで検索してみてください。）
 *  あなたはお礼として superchat を読むお礼配信をおこなうことにしました。その配信で、前回の配信の superchat の総額が高いアカウントから順に、
 *  superchat をした全てのアカウントの名前を読んだ後、メンバーシップに入ってくれた全てのアカウントの名前を辞書順昇順で読むことにしました。
 *  superchat の金額が同じ場合、同じ金額の中で辞書順降順でアカウント名を読むことにしました。
 *  前回の配信の superchat とメンバーシップ加入の履歴が与えられるので、読む順番にアカウント名を出力するプログラムを作成してください。
 *  解説：https://paiza.jp/works/mondai/reviews/show/0eef1796bc82ec9d8eb022475e244db1
 */
function step14(){
    //var lines = [5,'aiueo give 2489 !','kk join membership!','coffee_addiction join membership!','so_cute give 837 !','yoyo give 9284 !']
    var lines = [20,'eicuf give 15492 !','ishaz join membership!','aehah give 17153 !','sheeh join membership!','uquai give 21723 !',
                'eefah join membership!','uquai give 5189 !','daike join membership!','ahtoo give 16460 !','eefah give 11801 !',
                'thaep give 45466 !','eicuf give 13505 !','thaep join membership!','ikoem join membership!','aehah join membership!',
                'thiil join membership!','sheeh give 28624 !','ikoem give 13729 !','uquai give 39891 !','eefah give 31131 !']
    var N = lines[0]
    lines.shift()
    /*
    const fs = require('fs');
    var text = fs.readFileSync("./csv/step14.txt", 'utf8');
    var lines = text.toString().split('\n');
    */
    var listeners = new Map()
    var members = []
    for(var i=0; i<lines.length; i++){
        var ay = lines[i].split(' ')
        if(ay[1]=='give') {
            if(listeners.has(ay[0])){
                var temp = Number.parseInt(listeners.get(ay[0]))
                temp += Number.parseInt(ay[2])
                listeners.set(ay[0],temp)
            }else{
                listeners.set(ay[0],Number.parseInt(ay[2]))
            }            
        }
        if(ay[1]=='join') members.push(ay[0])
    }
    //console.log(listeners)
    var listeners = new Map([...listeners.entries()].sort((a,b) => b[1] -a[1]))
    //console.log(listeners)
    
    for(var [key, value] of listeners){
        console.log(key)
    }
    
    members.sort()
    //console.log(members)
    members.forEach(member=>{
        console.log(member)
    })
    
}
//step14()