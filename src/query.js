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
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var Q = Number.parseInt(ay[1])
    lines.shift()

    var aryA = []
    var aryK = []
    for(var i=0; i<lines.length; i++){
        if(i<N){
            aryA.push(lines[i])
        }else{
            aryK.push(lines[i])
        }
    }
    //console.log(aryA, aryK)
    aryK.forEach(k =>{
        if(aryA.includes(k)){
            console.log('YES')
        }else{
            console.log('NO')
        }
    })
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
    
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var K = Number.parseInt(ay[1])
    lines.shift()
    var ids = []
    var classes = []
    for(var i=0; i<lines.length; i++){
        if(i<N){
            ay.splice(0)
            ay = lines[i].split(' ')
            var cls = {
                id: ay[0],
                name: ay[1],
            }
            classes.push(cls)
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
                var cls = {
                    id:id,
                    name:name,
                }
                classes.splice(id-1,0,cls)
                break
            case 'leave':
                classes.splice(id-1,1)
                break
            case 'call':
                for(var c in classes){
                    if(classes[c].id==id){
                        console.log(classes[c].name)
                        break
                    }
                }
        }
    }
    
}
//step7()
