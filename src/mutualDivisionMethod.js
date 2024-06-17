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
    //var lines = ['45 15']
    var lines = ['2 7']
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
        A = getGreatestCommonDivisor(A,lines[i])
    }
    console.log('STEP: 2 ' +A)
}
function getGreatestCommonDivisor(A, B){
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
step2()