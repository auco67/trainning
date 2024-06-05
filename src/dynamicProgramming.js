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