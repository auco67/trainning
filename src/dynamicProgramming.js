/*
 * 動的計画法 Dynamic Programming(DP)
 *  DP は、一言でいうと「問題を部分問題に分割し、部分問題の答えを記録しながら、それらを利用することによって元の問題の答えを得る手法」です。
 *
 */

/*
 * STEP: 1 2項間漸化式 1
 *  整数 x, d, k が与えられます。
 *  次のように定められた数列の k 項目の値を出力してください。
 *   a_1 = x
 *   a_n = a_{n-1} + d (n ≧ 2)
 */
function step1() {
  var lines = ['0 7 9']
  var ary = lines[0].split(' ')
  var n = ary.length
  var x = Number.parseInt(ary[0])
  var d = Number.parseInt(ary[1])
  var k = Number.parseInt(ary[2])
  var num_ary = []
  num_ary.push(x)

  if (x >= -1000 && x <= 1000 && d >= -1000 && d <= 1000 && k >= 1 && k <= 1000) {
    for (var i = 1; i < k; i++) {
      num_ary.push(num_ary[i - 1] + d)
    }
    console.log('STEP: 1 2項間漸化式 1 ' + num_ary[num_ary.length - 1])
  }
}
step1()

/*
 * STEP: 2 2項間漸化式 2
 *  整数 x, d, Q と Q 個の整数 k_1, k_2, ... , k_Q が与えられます。
 *  次のように定められた数列の k_i 項目の値を順に出力してください。
 *  a_1 = x
 *  a_n = a_{n-1} + d (n ≧ 2)
 */
function step2() {
  var lines = ['0 7', 5, 1, 2, 3, 4, 5]
  var ary = lines[0].split(' ')
  var x = Number.parseInt(ary[0])
  var d = Number.parseInt(ary[1])
  lines.shift()
  var Q = Number.parseInt(lines[0])
  lines.shift()
  var result = []
  result.push(0)
  result.push(x)
  for (var i = 2; i < 1001; i++) {
      result.push(Number.parseInt(result[i - 1]) + d)
  }
  for (var i = 0; i < Q; i++) {
    var int = Number.parseInt(lines[i])
    console.log('STEP: 2 2項間漸化式 2 ' + result[int])
  }
}
step2()

/* 
 * STEP: 3 特殊な2項間漸化式 1
 *  整数 x, d_1, d_2, k が与えられます。
 *  次のように定められた数列の k 項目の値を出力してください。
 *   a_1 = x 
 *   a_n = a_{n-1} + d_1 (n が奇数のとき、n ≧ 3) 
 *   a_n = a_{n-1} + d_2 (n が偶数のとき)
 */
function step3(){
    var lines = ['5 -7 10 5']
    var ary = lines[0].split(' ')
    var x = Number.parseInt(ary[0])
    var d_1 = Number.parseInt(ary[1])
    var d_2 = Number.parseInt(ary[2])
    var k = Number.parseInt(ary[3])

    var result = []
    result.push(0)
    result.push(x)
    for(var i=2; i<1001; i++){
        if(i%2!=0){
            result.push(Number.parseInt(result[i-1])+d_1)
        }else{
            result.push(Number.parseInt(result[i-1])+d_2)
        }
    }
    console.log('STEP: 3 特殊な2項間漸化式 1 ' + result[k])
}
step3()

/*
 * STEP: 4 特殊な2項間漸化式 2
 *  整数 x, d_1, d_2, Q と Q 個の整数 k_1, k_2, ... , k_Q が与えられます。
 *  次のように定められた数列の k_i 項目の値を順に出力してください。
 *  a_1 = x 
 *  a_n = a_{n-1} + d_1 (n が奇数のとき、n ≧ 3) 
 *  a_n = a_{n-1} + d_2 (n が偶数のとき)
 */
function step4(){
    var lines = ['3 7 -4', 5, 1, 2, 3, 4, 10]
    var ary = lines[0].split(' ')
    var x = Number.parseInt(ary[0])
    var d_1 = Number.parseInt(ary[1])
    var d_2 = Number.parseInt(ary[2])
    lines.shift()
    var Q = Number.parseInt(lines[0])
    lines.shift()
    var result = []
    result.push(0)
    result.push(x)
    for(var i=2; i<1001; i++){
        if(i%2!=0){
            result.push(Number.parseInt(result[i-1])+d_1)
        }else{
            result.push(Number.parseInt(result[i-1])+d_2)
        }
    }
    for(i=0; i<Q; i++){
        var index = Number.parseInt(lines[i])
        console.log('STEP: 4 特殊な2項間漸化式 2' + result[index])
    }
}
step4()

/*
 * STEP: 5 3項間漸化式 1
 *  整数 k が与えられます。次のように定められた数列の k 項目の値を出力してください。
 *  ちなみに、これはフィボナッチ数列と呼ばれる有名な数列です。
 *  a_1 = 1 
 *  a_2 = 1 
 *  a_n = a_{n-2} + a_{n-1} (n ≧ 3)
 */
function step5(){
    var lines = ['7']
    var k = Number.parseInt(lines[0])
    var x_1 = 1
    var x_2 = 1
    var result = []
    result.push(0)
    result.push(x_1)
    result.push(x_2)
    for(var i=3; i<1002; i++){
        result.push(result[i-2]+ result[i-1])
    }
    console.log('STEP: 5 3項間漸化式 1 ' + result[k])

}
step5()

/*
 * STEP: 6 【漸化式】 3項間漸化式 2 
 *  整数 Q と Q 個の整数 k_1, k_2, ... , k_Q が与えられます。
 *  次のように定められた数列の k_i 項目の値を順に出力してください。
 *  ちなみに、これはフィボナッチ数列と呼ばれる有名な数列です。
 *  a_1 = 1 
 *  a_2 = 1 
 *  a_n = a_{n-2} + a_{n-1} (n ≧ 3)
 */
function step6(){
    var lines = [5, 1, 2, 3, 4, 3]
    var x_1 = 1
    var x_2 = 1
    var Q = Number.parseInt(lines[0])
    lines.shift()
    var result = []
    result.push(0)
    result.push(x_1)
    result.push(x_2)
    for(var i=3; i<102; i++){
        result.push(Number.parseInt(result[i-2])+ Number.parseInt(result[i-1]))
    }
    for(i=0; i<Q; i++){
        var index = Number.parseInt(lines[i])
        console.log('STEP: 6 【漸化式】 3項間漸化式 2  ' +result[index])
    }
}
step6()

/*
 * STEP: 7 階段の上り方 1
 *  整数 n が与えられます。階段を上るのに、1 歩で 1 段または 2 段を上ることができるとき、n 段の階段を上る方法は何通りあるでしょうか。
 *  部分問題として、1 ~ n-1 段の階段を上る方法が何通りあるか、という問題を考えてみましょう。
 *  n 段目に到達するには、n-1 段目から1段上る方法と、n-2 段目から2段上る方法の2種類が考えられます。
 *  dp[n] を n 段の階段を上る方法の数とすれば、この関係は dp[n] = dp[n-1] + dp[n-2] で表すことが出来ます。
 */
function step7(){
    var lines = ['3']
    var n = Number.parseInt(lines[0])
    var steps = []
    steps.push(1)
     
    for(var i= 1; i<n; i++){
        steps.push(i)  
        if(i>=1){
            var num = Number.parseInt(steps[i]) + Number.parseInt(steps[i-1])
        }
        if(i>=2){
            num= Number.parseInt(steps[i]) + Number.parseInt(steps[i-2])
            
        }
        steps[i] = num
        
    }
    console.log('' + steps[n-1])

}
step7()

/*
 * STEP: 8 階段の上り方 2
 */

/*
 * STEP: 9 【階段の上り方】階段の上り方 3
 */

/*
 * STEP: 10 最安値を達成するには 1
 *  八百屋にて、りんご1個が a 円で、りんご2個が b 円で売られています。
 *  りんごの買い方を工夫したとき、n 個のりんごを手に入れるために必要な金額の最小値はいくらでしょうか。
 *  なお、買い方を工夫した結果、買ったりんごが n+1 個以上になってもよいものとします。
 *  部分問題として、りんご i 個 (1 ≦ i ≦ n-1) を買うのに必要な金額の最小値を求める問題を考えてみましょう。
 */
function step10(){
    var lines = ['5 100 150']
    var ary = lines[0].split(' ')
    var n = Number.parseInt(ary[0])
    var a = Number.parseInt(ary[1])
    var b = Number.parseInt(ary[2])
    var method = []
    method.push(0)
    method.push(a)
    if( (n>=1 && n<=1000) && (a>=1 && a<=10000) && (b>=1 && b<=10000)){
        if(a<b){
            for(var i= 2; i<=n; i++){
                method.push(Math.min(method[i-1]+a, method[i-2]+b))
            }
        }
    }
    console.log('STEP: 10 最安値を達成するには 1 ' + method[n])
}
step10()

/*
 * STEP: 11 最安値を達成するには 2
 *  八百屋にて、りんご2個が a 円で、りんご5個が b 円で売られています。
 *  りんごの買い方を工夫したとき、n 個のりんごを手に入れるために必要な金額の最小値はいくらでしょうか。
 *  なお、買い方を工夫した結果、買ったりんごが n+1 個以上になってもよいものとします。
 */
function step11(){
    var lines = ['4 110 200']
    var ary = lines[0].split(' ')
    var n = Number.parseInt(ary[0])
    var a = Number.parseInt(ary[1])
    var b = Number.parseInt(ary[2])
    var method = []
    method.push(0)
    method.push(a)
    if( (n>=1 && n<=1000) && (a>=1 && a<=10000) && (b>=1 && b<=10000)){
        if(a<b){
            for(var i=2; i<n+5; i++){
                method.push(0)
                if(i>=2){
                    method[i] =Math.max(method[i], method[i-2]+a)
                }
                if(i>=5){
                    method[i] =Math.min(method[i], method[i-5]+b)
                }
            }
            for(var i=n+3; i>=1; i--){
                method[i] = Math.min(method[i], method[i+1])
            }
        }
    }
    console.log('STEP: 11 最安値を達成するには 2 ' +method[n])
}
step11()

/*
 * STEP: 12 最安値を達成するには 3
 *  八百屋にて、りんご x 個が a 円で、りんご y 個が b 円で売られています。
 *  りんごの買い方を工夫したとき、最終的に n 個のりんごを手に入れるために必要な金額の最小値はいくらでしょうか。
 *  なお、買い方を工夫した結果、買ったりんごが n+1 個以上になってもよいものとします。
 */
function step12(){
    var lines = ['513 52 4492 593 9803']
    var ary = lines[0].split(' ')
    var n = Number.parseInt(ary[0])
    var x = Number.parseInt(ary[1])
    var a = Number.parseInt(ary[2])
    var y = Number.parseInt(ary[3])
    var b = Number.parseInt(ary[4])
    var method = []
    for(var i=0; i<x+n+y; i++) method.push(0)
    if( (n>=1 && n<=1000) && 
        (x>=1 && x<=1000) && 
        (y>=1 && y<=1000) && 
        (a>=1 && a<=10000) && 
        (b>=1 && b<=10000)){
        if(a<b){
            for(var i=x; i<n+y; i++){
                if(i>=x){
                    method[i] =Math.max(method[i], method[i-x]+a)
                }
                if(i>=y){
                    method[i] =Math.min(method[i], method[i-y]+b)
                }
            }
            for(var i=n+(y-2); i>=1; i--){
                method[i] = Math.min(method[i], method[i+1])
            }
        }
    }
    console.log(method[n])
}
step12()

/*
 * STEP: 13 最安値を達成するには 4
 *  
 */

/*
 * STEP: 14 最長増加連続部分列
 *  n 人が横一列に並んでいます。左から i 番目の人を人 i と呼ぶことにします。人 i の身長は a_i [cm]です。
 *  人 l ,人 l+1, ... , 人 r からなる区間 [l, r] について、すべての l ≦ i < r に対して a_i ≦ a_{i+1} が成り立っているとき、
 *  区間 [l, r] は背の順であると呼ぶことにします。また、区間 [l, r] の長さを r-l+1 とします。
 *  背の順であるような区間のうち、最長であるものの長さを出力してください。
 */
function step14(){
    var lines = [5, 160, 178, 170, 190, 190]
    var n = Number.parseInt(lines[0])
    
    if(n>=1 && n<=200000){
        if(n==1) {
            console.log(1)
        }else{
            lines.shift()
            var dp = []
            dp.push(0)
            for(var i=1; i<lines.length; i++){
                var a_i = Number.parseInt(lines[i-1])
                var a = Number.parseInt(lines[i])
                if(a_i<=a){
                    dp.push(dp[i-1]+1)
                }else{
                    dp.push(1)
                }
            }
            console.log(Math.max(...dp))
        }
    }
}
step14()

/*
 * STEP: 15 【連続列】最長減少連続部分列
 *  n 人が横一列に並んでいます。左から i 番目の人を人 i と呼ぶことにします。人 i の身長は a_i [cm]です。
 *  人 l ,人 l+1, ... , 人 r からなる区間 [l, r] について、すべての l ≦ i < r に対して a_i ≧ a_{i+1} が成り立っているとき、
 *  区間 [l, r] は逆背の順であると呼ぶことにします。また、区間 [l, r] の長さを r-l+1 とします。
 *  逆背の順であるような区間のうち、最長であるものの長さを出力してください。
 */
function step15(){
    var lines = [5, 190, 190, 170, 178, 164]
    var n = Number.parseInt(lines[0])
    
    if(n>=1 && n<=200000){
        if(n==1) {
            console.log(1)
        }else{
            lines.shift()
            var dp = []
            dp.push(0)
            for(var i=1; i<=lines.length; i++){
                var a_i = Number.parseInt(lines[i-1])
                var a = Number.parseInt(lines[i])
                if(a_i>=a){
                    dp.push(dp[i-1]+1)
                }else{
                    dp.push(1)
                }
            }
            console.log(Math.max(...dp))               
        }
    }
}
step15()

/* 
 * STEP: 16 最長部分増加列
 *  n 本の木が横一列に並んでいます。左から i 番目の木を木 i と呼ぶことにします。木 i の高さは a_i [cm] です。
 *  あなたは、何本かの木を伐採することによって、残った木を左から順に見ると高さが単調増加になっているようにしたいと考えています。
 *  つまり、残った木を左から 木 k_1, 木 k_2, ... , 木 k_m とすると、a_{k_1} < a_{k_2} < ... < a_{k_m} が満たされているようにしたいです。
 *  なるべく多くの木が残るように、伐採する木を工夫して選んだとき、伐採されずに残る木の本数が最大でいくつになるか求めてください。
 *  なお、最初から n 本の木が単調増加に並んでいる場合は、1本も伐採しなくてよいものとします。
 */
function step16(){
    var lines = [5, 100, 102, 101, 91, 199]
    var n = Number.parseInt(lines[0])
    lines.shift()
    var dp = []
    for(var i=0; i<n; i++) dp.push(0)
    dp[1] = 1
    for(i=0; i<n; i++){
        dp[i] = 1
        for(var j=0; j<i; j++){
            if(lines[j]<lines[i]){
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }
    console.log(Math.max(...dp))
}
step16()