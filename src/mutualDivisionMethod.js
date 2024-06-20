/*
 * STEP: 1 ユークリッドの互除法
 *  2 つの整数 A , B の最大公約数（以後 gcd(A , B)）を高速に求めるアルゴリズムとして、ユークリッドの互除法があります。
 *  gcd(A, B) をユークリッドの互除法で求める手順は次の通りです。
 *   1. A , B のうち、いずれかが 0 の場合 手順 3 に進む
 *   2. A , B のうち小さい方で大きい方をわり、大きい方をその余りで置き換え、手順 1 に戻る
 *   3. このとき、0 でない方の数が求めたい最大公約数になっている。
 *  2 つの整数 A , B が与えられるので、ユークリッドの互除法を用いて A , B の最大公約数を求めましょう。
 */
function step1(){
    var lines = ['45 15']
    //var lines = ['2 7']
    var ay = lines[0].split(' ')
    var A = Number.parseInt(ay[0])
    var B = Number.parseInt(ay[1])
    
    while(A!=0 ||B!=0){

        if(A<B){
            B %= A
            if(B==0) {
                console.log('STEP: 1 ' + A)
                break
            }            
        }else{
            A %= B
            if(A==0) {
                console.log('STEP: 1 ' + B)
                break
            }
        }
    }
}
//step1()

/*
 * STEP: 2 3 つ以上の整数の最大公約数
 *  2 つの整数 A , B の最大公約数 (以後 gcd(A , B)) を高速に求めるアルゴリズムとして、ユークリッドの互除法があります。
 * gcd の演算では、3 つの整数 a, b, c の最大公約数は、gcd(gcd(a,b),c) で求めることができます。
 * これは 4 つ以上の整数の場合も同様に、a , b , c , d , e , ... の最大公約数は
 * gcd(...gcd(gcd(gcd(gcd(a,b),c),d),e)...) で求めることができます。
 * 与えられる整数の数 N と、整数 A_1, ..., A_N が与えられるので、 A_1, ..., A_N の最大公約数を求めてください。
 */
function step2(){
    var lines = [3,6,18,30]
    //var lines = [5,7,10,30,55,175]
    var N = Number.parseInt(lines[0])
    lines.shift()
    var A = lines[0]
    for(var i=1; i<N; i++){ 
        A = getGCD(A,lines[i])
    }
    console.log('STEP: 2 ' +A)
}
function getGCD(A, B){
    while(A!=0 ||B!=0){

        if(A<B){
            B %= A
            if(B==0) return A
        }else{
            A %= B
            if(A==0) return B
        }
    }
}
//step2()

/*
 * STEP: 3 最小公倍数
 *  最大公約数（以後 gcd）と対になる値として、最小公倍数（以後 lcm）があります。
 * 一般的に直接 lcm を求めるよりも、gcd を求めてから計算によって lcm を求める方が簡単とされています。
 * 2 つの整数 A , B の lcm(A,B) は、lcm(A,B) = A×B/gcd(A,B) で求めることができます。
 * 2 つの整数 A , B が与えられるので、lcm (A,B) を求めてください。
 */
function step3(){
    //var lines = ['6 39']
    var lines = ['2464 2461']
    var ay = lines[0].split(' ')
    var A = Number.parseInt(ay[0])
    var B = Number.parseInt(ay[1])
    var gdc = getGCD(A,B)
    var lcm = A * B / gdc
    console.log(lcm)
}
//step3()

/*
 * STEP: 4 ax + by = c
 *  ユークリッドの互除法の操作を応用させると、一見最大公約数とは関連のなさそうな 2 変数の一次方程式の整数解を求めることができます。
 *  例として、15x + 100y = 10 の整数解 x , y を求めることを考えます。
 *  x , y の係数である 15 , 100 についてユークリッドの互除法の操作を行うと、100 / 15 = 6 余り 10
 *  この式を変形することで、 100 - 6×15 = 10 が得られるので、答えは x = -6 , y = 1 と求まります。
 *  整数 A,B,C が与えられるので、Ax + By = C の整数解 x , y の値を 1 行で半角スペース区切りで出力してください。
 *  解の組 (x , y) のうち、x または y が 1 であるような解の組の値を出力してください。
 */
function step4(){
    var lines = ['8373 24 21']
    //var lines = ['3 1048 1']
    //var lines = ['15 100 10']
    var ay = lines[0].split(' ')
    var A = Number.parseInt(ay[0])
    var B = Number.parseInt(ay[1])
    var C = Number.parseInt(ay[2])
    var x = 0
    var y = 0
    while(A!=C || B!=C){
        if(A<B){
            x = Math.floor(B/A)
            B %= A            
        }else{
            y = Math.floor(A/B)
            A %= B            
        }
        if(A==C || B==C) break
    }
    if(x==0) {
        x=1
    }else{
        x = -x
    }
    if(y==0) {
        y=1
    }else{
        y = -y
    }
    console.log('STEP: 4 ' ,x, y)
    
}
//step4()

/*
 * STEP: 5 拡張ユークリッドの互除法
 *  割り算から一次方程式の解を求める方法とユークリッドの互除法を応用させると、
 *  整数 A , B を用いた一次方程式 Ax + By = gcd(A, B) の整数解 x , y を求めることができます。
 *  この x , y を求めるアルゴリズムを拡張ユークリッドの互除法といいます。拡張ユークリッドの互除法の疑似コードは以下の通りです。
 * 
 * // ax + by = gcd(a,b) を満たす x, y と gcd(a,b) を返すプログラム
 * ectgcd(a, b) {
 *   if (b != 0) {
 *     c, y, x = extgcd(b, a % b)
 *     y -= (a / b) * x
 *     return c, x, y // 最終的に返される c が gcd(a,b) となる
 *   }
 *   return a, 1, 0
 * }
 * 
 *  整数 A , B が与えられるので、拡張ユークリッドの互除法を用いて Ax + By = gcd(A, B) の整数解 x , y を求めてください。
 */
function step5(){
    var lines = ['2944 3958']
    var ay = lines[0].split(' ')
    var a = Number.parseInt(ay[0])
    var b = Number.parseInt(ay[1])
    //console.log(extGCD(a, b))
    var c = extGCD(a, b)
    var x = 0
    var y = 0
    while(a!=c || b!=c){
        if(a<b){
            x = Math.floor(b/a)
            b %= a            
        }else{
            y = Math.floor(a/b)
            a %= b            
        }
        if(a==c || b==c) break
    }
    if(x==0) {
        x=1
    }else{
        x = -x
    }
    if(y==0) {
        y=1
    }else{
        y = -y
    }
    console.log(x, y)
}
function extGCD(a, b){
    var c = a
    if(b != 0){
        c = extGCD(b, (a%b))
    }
    return c
}
//step5()

/* 
 * STEP: 6 分数
 * 演算子 cal と、整数 A , B , C , D が与えられるので、A/B cal C/D の計算結果を、これ以上約分できない分数 n/d の形式にした際の 
 * n , d の値を求めてください。ただし、答えが整数 X (0 を含む) の時は n = X , d = 1 と出力してください。
 * また、答えが負となる場合は n を負の数、 d を正の数とすることで負の分数を表してください。
 */
function step6(){
    var lines = ['2 3 * -9 2']
    var ay = lines[0].split(' ')
    var A = Number.parseInt(ay[0])
    var B = Number.parseInt(ay[1])
    var C = Number.parseInt(ay[3])
    var D = Number.parseInt(ay[4])
    var cal = ay[2]
    var n =0
    var d = 0
    switch(cal){
        case '+':
            n = (A*D) + (C*B)
            d = B*D
            break
        case '-':
            n = (A*D) - (C*B)
            d = B*D
            break
        case '*':
            n = A*C
            d = B*D
            break
        case '/':
            n = A*D
            d = B*C
    }
    
    if(n==0){
        d =1
    }else{
        var div = extGCD(Math.abs(n), Math.abs(d))
        n /= div
        d /= div
        if(d<0){
            d *= -1
            n *= -1
        }        
    }
    console.log('STEP: 6 ',n, d)
}
//step6()

/*
 * STEP: 7 意地悪すごろく
 *  A 君と B さんは今日の肉代をかけてすごろくで勝負することになりました。すごろくのルールは次の通りです。
 *   ・スタート地点のマス (0 マス目) から左右に無限にマスが続いていて、右が正のマス数、左が負のマス数となっており、N マス目にゴールマスがあります。
 *   ・プレイヤーは -A , -B , 0 , 0 , A , B の 6 つの目を持つサイコロを振って出た目のマス数を移動します。
 *     ただし、A , B は A ≠ B を満たす 1 以上 1,000 以下の自然数です。
 *  2　人が振るそれぞれのサイコロに登場する自然数 A , B のうち、 A を A 君が、 B を B さんが決めることになりました。
 *  B さんのサイコロは A 君が A に 2 を、B さんが B に 1 を選んだため、6 つの目は-2 , -1 , 0 , 0 , 1 , 2に決まりました。
 *  続けて A 君のサイコロの目を決めます。なんとしても勝ちたい B さんは、ゴールのマス数 N と、 A 君が選んだ自然数 A の値によっては、 
 *  B をうまく設定することで A 君が絶対にゴールできないように妨害ができることに気がつきました。
 *  N , A の値が与えられるので、1 〜 1000 のうち、B さんが B として選ぶことで A 君が絶対にゴールできなくなる値を小さい方から順に全て出力してください。
 *  そのような値が存在しない場合は、-1 を出力してください。
 */
function step7(){

}
//step7()

/*
 * STEP: 8 合同式
 *  ある自然数 N について、整数を N で割った余りに注目した数式を合同式と言います。
 *  整数 A を N で割った余りと、整数 B を N で割った余りが等しい場合、「N を法として A と B は合同である」といい A ≡ B(mod N)と表されます。
 *  例として、7 と 19 の間には 7 ≡ 19(mod 6) が成り立ちます。
 *  自然数 N と整数 A が与えられるので、1 〜 100,000 の数のうち、N を法として A と合同なもの（A を含む）を、小さい方から順に全て出力してください。
 */
function step8(){
    //var lines = ['6 7']
    //var lines = ['28446 39582']
    var lines = ['10000 1']
    var ay = lines[0].split(' ')
    var N = Number.parseInt(ay[0])
    var A = Number.parseInt(ay[1])
    var re = A%N
    //console.log(remaindar)
    
    for(var i=1; i<=100000; i++){
        if(re==(i%N)){
            console.log(i)
        }
    }    
}
//step8()

/*
 * STEP: 9 mod の演算
 *  ある自然数 N について、整数を N で割った余りに注目した数式を合同式と言います。
 *  整数 A を N で割った余りと、整数 B を N で割った余りが等しい場合、「N を法として a と b は合同である」といい a ≡ b(mod N)と表されます。
 *  mod N での足し算・割り算・掛け算・累乗では次のような関係が成り立ちます。
 *   a ≡ b(mod N) , c ≡ d(mod N) のとき
 *   a + c ≡ b + d (mod N)
 *   a - c ≡ b - d (mod N)
 *   a × c ≡ b × d (mod N)
 *   a ^ n ≡ b ^ n (mod N) (n は自然数)
 *  演算子 cal と、自然数 N , 整数 A , B が与えられるので、A[cal]B (mod N) を計算してください.
 */
function step9(){
    //var lines = [17,'56 + 927']
    //var lines = [837,'9282 * 10384']
    var lines = [9246,'28474 ^ 83745']
    //var lines = [92747,'3765 - 87626']
    var N = Number.parseInt(lines[0])
    lines.shift()
    var ay = lines[0].split(' ')
    var A = Number.parseInt(ay[0])
    var B = Number.parseInt(ay[2])
    var cal = ay[1]
    var ans = 0
    switch(cal){
        case '+':
            ans = ((A%N)+(B%N))%N
            break
        case '-':
            ans = (((A%N)-(B%N))+N)%N
            break
        case '*':
            ans = ((A%N)*(B%N))%N
            break
        case '^':
            ans = 1
            for(var j=0; j<B; j++){
                ans *= A
                ans %= N
            }
    }
    console.log(ans)
}
//step9()

/*
 * STEP: 10 mod の逆元
 *  ある自然数 M について、整数を M で割った余りに注目した数式を合同式と言います。
 *  整数 A を M で割った余りと、整数 B を M で割った余りが等しい場合、「M を法として A と B は合同である」といい A ≡ B(mod M)と表されます。
 *  M と互いに素である整数 A に対して、 A × N = 1(mod M) となる 1 以上 M 未満の整数 N が必ず存在し、
 *  この N を 「mod M での A の mod 逆元」といい、 A^{-1} (mod M) と書きます。
 *  mod M での A の mod 逆元を求めるには、 x , y についての 1 次方程式 Ax + My = 1 の 解 x が分かれば良いです。
 *  gcd(A,M) = 1 であるので、この方程式の解 x は拡張ユークリッドの互除法を用いることで求めることができます。
 *  互いに素である整数 A , M が与えられるので、mod M での A の mod 逆元を求めてください。
 *  ただし、答えは 1 以上 M 未満の整数で出力してください。
 */
function step10(){
    var lines = ['123 56']
    var ay = lines[0].split(' ')
    var M = Number.parseInt(ay[0])
    var A = Number.parseInt(ay[1])
    var x = 1
    var y = 0
    var ans = 0
    extgcd(A, M, x, y)
    ans = (x + M)%M
    console.log(ans)
}
function extgcd(a, b, x, y){
    var c = a    
    if(b != 0){
        c = extgcd(b, a%b, y, x)
        y -=(a/b)*x
    }else{
        x = 1
        y = 0
    }
    return c
}
//step10()

/* 
 * STEP: 11 高速な累乗の計算
 *  高速に累乗を計算する方法として、繰り返し二乗法というものがあります。
 *  このアルゴリズムは、a の b 乗 (a ^ b) を、 a ^ (2 ^ i) 乗を用いて表すことで計算量を落とすアルゴリズムです。
 *    まず b の ２ 進数表現を考えます。b の最下位の桁が １ かどうかを確認します。
 *    最下位の桁が １ の場合、 a を ans にかけます。
 *    この処理が終わったら、a を a の ２ 乗に置き換え、b を右に １ ビットシフト(割る 2)します。
 *  これを b が 0 以下になるまで繰り返すことで、i 回目のときに、a ^ (2 ^ (i - 1)) のかけ算を行うことができます。
 *  整数 A , B , M が与えられるので、 A^B(mod M) を求めましょう。
 */