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
    console.log(n, d)
}
step6()