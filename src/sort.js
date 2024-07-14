/*
 * STEP: 1 挿入ソート
 *  挿入ソートは、データ列を「整列済み」と「未整列」の2つに分け、「未整列な配列」からデータを1つ取り出し、
 *  整列済み配列」の適切な位置に挿入することを繰り返す手法です。「未整列な配列」が空になるまで処理を繰り返すと、
 *  1つの「整列済み配列」が得られます。この手法は、手持ちのトランプを並び替える際などによく用いられる、自然で比較的直感的なものです。
 *  挿入ソート (昇順) は以下のようなアルゴリズムです。初期状態では A[0] ~ A[0] を「整列済み」、A[1] ~ A[n-1] を「未整列」とします。
 *    insertion_sort(A : 配列, n : Aの要素数)
 *       for i = 1 to n-1
 *          // A[i] を、整列済みの A[0] ~ A[i-1] の適切な位置に挿入する
 *          
 *          // 実装の都合上、A[i] の値が上書きされてしまうことがあるので、予め A[i] の値をコピーしておく        
 *          x <- A[i]
 *          
 *          // A[i] の適切な挿入位置を表す変数 j を用意
 *          j <- i-1
 *          
 *          // A[i] の適切な挿入位置が見つかるまで、A[i] より大きい要素を1つずつ後ろにずらしていく
 *          while j >= 0 AND A[j] > x
 *              A[j+1] = A[j]
 *              j--
 *          
 *          // A[i] を挿入
 *          A[j+1] <- x
 *          
 *          // A[0] ~ A[i] が整列済みになった
 *  挿入ソートの計算量を考えます。最も多くの計算ステップがかかるのは、while ループ中で値をずらす処理です。
 *  よって、この処理が最大で何回行われるかに注目し、計算量を導きます。各 i について、while ループ中で値をずらす処理は最大で i 回行われます。
 *  つまり、最悪の場合この処理は全体で 1 + 2 + ... + n-1 = (n-1)*n/2 = (n^2-n)/2 回行われます。よって、挿入ソートは O(n^2) のアルゴリズムとなります。
 *  挿入ソートは、入力される配列によって効率が変わるアルゴリズムです。例えば、入力される配列が予め昇順にソートされている場合は値をずらす処理が
 *  全く行われませんが、降順にソートされている場合は (n^2-n)/2 回行われます。
 *  では、要素数 n の数列を昇順にソートする挿入ソートのプログラムを作成してください。上の疑似コードに従って実装してください。
 *  アルゴリズムが正しく実装されていることを確認するために、各 i についてその処理が終わった時点での配列を出力してください。
 */
function step1(){
  //var lines = [5,'4 1 3 5 2']
  var lines = [5,'-9247 8112 1394 56 -574']
  var N = Number.parseInt(lines[0])
  var ary = lines[1].split(' ')
  
  for(var i=1; i<N; i++){
    var x = Number.parseInt(ary[i])
    var j = i-1
    while(j>=0 && Number.parseInt(ary[j])>x){
      ary[j+1] = ary[j]
      j--
    }
    ary[j+1] = x
    print(ary, N)
  }  
}
function print(ary, N){
  var str = ''
  for(var i=0; i<N; i++){
    if(i>0){
      str = str + ' ' + ary[i]
    }else{
      str = str + ary[i]
    }
  }
  console.log(str)
}
//step1()

/*
 * STEP: 2 選択ソート
 *  選択ソート (昇順) は、データ列を「整列済み」と「未整列」の2つに分け、「未整列な配列」の最小値を取り出し、
 * 「整列済み配列」の末尾に付け加えることを繰り返す手法です。「未整列な配列」の要素数が 1 になるまで処理を繰り返すと、
 *  1つの「整列済み配列」が得られます。
 *  選択ソート (昇順) は以下のようなアルゴリズムです。初期状態では配列全体 A[0] ~ A[n-1] を「未整列」とします。
 *  selection_sort(A : 配列, n : Aの要素数)
 *    for i = 0 to n-2
 *        // A[i] ~ A[n-1] の最小値を見つけ、A[i]と交換する
 *        // つまり、整列済みとなっている A[0] ~ A[i-1] の末尾に、A[i] ~ A[n-1] の最小値を付け加える
 *        
 *        // A[i] ~ A[n-1] の最小値の位置を保存する変数 min_index を用意
 *        // 暫定的に A[i] を最小値とする
 *        min_index <- i
 *  
 *        // 最小値を探す
 *        for j = i+1 to n-1
 *            if A[j] < A[min_index] then
 *                min_index = j
 *  
 *        // A[i] と A[min_index]を交換
 *        swap(A[i], A[min_index])
 *  
 *        // A[0] ~ A[i] が整列済みになった
 *  選択ソートの計算量を考えます。最も多くの計算ステップがかかるのは、二重 for ループ中にて値を比較する処理です。
 *  よって、この処理が何回行われるかに注目し、計算量を導きます。この処理は、各 i について n-i-1 回行われます。
 *  つまり、この処理は全体で n-1 + ... + 1 = (n-1)*n/2 = (n^2-n)/2 回行われます。よって、選択ソートは O(n^2) のアルゴリズムとなります。
 *  選択ソートは、入力によって効率が左右されないアルゴリズムです。
 *  では、要素数 n の数列を昇順にソートする選択ソートのプログラムを作成してください。上の疑似コードに従って実装してください。
 *  アルゴリズムが正しく実装されていることを確認するために、各 i についてその処理が終わった時点での配列を出力してください。
 */
function step2(){
  var lines = [5,'4 1 3 5 2']
  var N = Number.parseInt(lines[0])
  var ary = lines[1].split(' ')
  
  for(var i=0; i<N-1; i++){
    var minIndex = i
    for(var j=i+1; j<N; j++){
      if(Number.parseInt(ary[j]) < Number.parseInt(ary[minIndex])){
        minIndex = j
      }
    }
    var min = ary[minIndex]
    ary[minIndex] = ary[i]
    ary[i] = min
    print(ary, N)
  }  

}
//step2()

/*
 * STEP: 3 バブルソート
 *  バブルソートは、データ列の隣り合う要素を比較し交換することを繰り返すことによりデータ列をソートする手法です。
 *  バブルとは「泡」の意味で、ソートの過程でデータが移動する様子が、水中で泡が浮かんでいくように見えることからこの名前がついています。
 *  バブルソート (昇順) は以下のようなアルゴリズムです。
 *  bubble_sort(A : 配列, n : Aの要素数)
 *  for i = 0 to n-2
 *      for j = n-1 down to i+1
 *          if a[j-1] > a[j] then
 *              swap(a[j-1], a[j])
 *  データ列を左から右へ昇順ソートすることを考えます。バブルソートの基本方針は、左の要素と比較し、左の方が大きければ交換するです。
 *  これを右から左まで1回行うと、最小の要素が一番左に移動します。 (首を左に傾けてこの処理を眺めると、泡が水面へと上がっていく様子に見えてきませんか？)
 *  次に、一番左の要素を除いて、同じ処理を繰り返します。すると、2番目に小さい要素が左から2番目に移動します。
 *  これを最後まで繰り返せば、ソート完了です。
 *  バブルソートの計算量を考えます。最も多くの計算ステップがかかるのは、二重 for ループ中にて値を比較する処理です。
 *  よって、この処理が何回行われるかに注目し、計算量を導きます。この処理は、各 i について n-i-1 回行われます。
 *  つまり、この処理は全体で n-1 + ... + 1 = (n-1)*n/2 = (n^2-n)/2 回行われます。よって、バブルソートは O(n^2) のアルゴリズムとなります。
 *  では、要素数 n の数列を昇順にソートするバブルソートのプログラムを作成してください。上の疑似コードに従って実装してください。
 *  アルゴリズムが正しく実装されていることを確認するために、各 i についてその処理が終わった時点での配列を出力してください。
 */
function step3(){
  var lines = [5,'4 1 3 5 2']
  var N = Number.parseInt(lines[0])
  var ary = lines[1].split(' ')
  
  for(var i=0; i<N-1; i++){
    for(var j=N-1; j>i; j--){
      if(Number.parseInt(ary[j-1]) > Number.parseInt(ary[j])){
        var min = ary[j]
        ary[j] = ary[j-1]
        ary[j-1] = min
      }
    }
    print(ary, N)
  }  
}
//step3()

/**
 * STEP: 4 シェルソート
 *  シェルソートは、挿入ソートを改良したアルゴリズムです。挿入ソートが整列済みのデータ列に強いことを利用しています。
 *  シェルソートでは、データ列において一定の間隔 h だけ離れた要素たちからなる部分列を対象とした挿入ソートを、
 *  h を小さくしながら (間隔を狭めながら) 繰り返してソートを行っていきます。h は適当に大きな値から始め、
 *  段階的に小さくしていき、最終的に 1 にします。h が 1 のとき、間隔が 1 離れた要素たちからなる部分列というのは元のデータ列そのものですから、
 *  このとき単純な挿入ソートを行うことになります。この時点でデータ列は既にほとんど整列済みとなっていることが期待されるため、
 *  ここで挿入ソートの強みが活かされます。シェルソート (昇順) は以下のようなアルゴリズムです。
 * 
 *  insertion_sort(A : 配列, n : Aの要素数, h : 間隔)
 *  // アルゴリズムが正しく実装されていることを確認するために導入するカウンタ変数、
 *  //ソート処理には関係がないことに注意
 *  num_of_move <- 0
 *  
 *  for i = h to n-1
 *      // A[i] を、整列済みの A[i-ah], ..., A[i-2h], A[i-h] の適切な位置に挿入する
 *  
 *      // 実装の都合上、A[i] の値が上書きされてしまうことがあるので、予め A[i] の値をコピーしておく 
 *      x <- A[i]
 *  
 *      // A[i] の適切な挿入位置を表す変数 j を用意
 *      j <- i-h
 *  
 *      // A[i] の適切な挿入位置が見つかるまで、A[i] より大きい要素を後ろにずらしていく
 *      while j >= 0 AND A[j] > x
 *          A[j+h] = A[j]
 *          j -= h
 *          num_of_move++
 *      
 *      // A[i] を挿入
 *      A[j+h] <- x
 * 
 *  shell_sort(A : 配列, n : Aの要素数, H : 間隔列)
 *  for h in H
 *      insertion_sort(A, n, h)
 *  シェルソートの計算量は間隔列 H に強く依存します。シェルソートの計算量解析を正確に行うことは難しく、未解決です。
 *  いくつかの有名な間隔列に対しては計算量解析が行われており、例えば h_i = 3h_{i+1} + 1を満たす整数列 (..., 364, 121, 40, 13, 4, 1) を
 *  間隔列として採用した際のシェルソートは、平均計算量が O(n^{1.25}) になることが知られています。
 *  では、要素数 n の数列を昇順にソートするシェルソートのプログラムを、上の疑似コードに従って実装してください。数列 h_1, ... , h_k が
 *  入力として与えられるので、それを間隔列として採用してください。なお、この数列は上で示した漸化式h_i = 3h_{i+1} + 1を満たしています。
 *  アルゴリズムが正しく実装されていることを確認するために、各間隔 h_i について、num_of_move を出力してください。
 */
function step4(){
  var lines = [10,'7 6 10 2 5 4 8 3 9 1',2,'4 1']
  var n = lines[0]
  var A = lines[1].split(' ')
  var k = lines[2]
  var H = lines[3].split(' ')
  
  for(var h of H){
    insertion_sort(A, n, Number.parseInt(h))
  }
}

function insertion_sort(A, n, h){
  var num_of_move = 0
  for(var i=h; i<n; i++){
    var x = Number.parseInt(A[i])
    var j= i-h
    while(j>=0 && Number.parseInt(A[j])>x){
      A[j+h] = Number.parseInt(A[j])
      j -= h
      num_of_move++
    }
    A[j+h] = x
  }
  console.log(num_of_move)
}
//step4()

/**
 * STEP: 5 マージソート
 *  マージソート (昇順) は、データ列を二分し、それぞれをマージソートした後それらを「マージ (統合) 」することを繰り返すソートアルゴリズムです。
 *  マージソートは、問題を小さな問題に分割して解くことを繰り返すことによって元の問題の答えを得る手法である「分割統治法」に基づいたアルゴリズムです。
 *  マージソート (昇順) は以下のようなアルゴリズムです。データ列を二分してマージソートを行う merge_sort と、
 *  昇順にソートされた2つの部分データ列をマージする merge から成ります。
 *  / アルゴリズムが正しく実装されていることを確認するために導入するカウンタ変数、ソート処理には関係がないことに注意
 *  count <- 0
 *  
 *  部分データ列 A[left] ~ A[mid-1], A[mid] ~ A[right-1] はそれぞれ整列済み
 *  2つの部分データ列をマージし、A[left] ~ A[right-1] を整列済みにする
 *  
 *  merge(A : 配列, left : 整数, mid : 整数, right : 整数)
 *  // 2つの部分データ列のサイズ
 *  nl <- mid-left
 *  nr <- right-mid
 *  
 *  // 部分データ列をコピー
 *  for i = 0 to nl-1
 *      L[i] <- A[left+i]
 *  for i = 0 to nr-1
 *      R[i] <- A[mid+i]
 *  
 *  // 番兵
 *  L[nl] <- INF
 *  R[nr] <- INF
 *  
 *  // 2つの部分データ列をマージして A[left] ~ A[right-1] に書き込む
 *  lindex <- 0
 *  rindex <- 0
 *  
 *  for i = left to right-1
 *      if L[lindex] < R[rindex] then
 *          A[i] <- L[lindex]
 *          lindex++
 *      else
 *          A[i] <- R[rindex]
 *          rindex++
 *          count++
 *  
 *  A[left] ~ A[right-1] をマージソートする
 *  配列 A をマージソートするには merge_sort(A, 0, n) を呼び出す
 *  
 *  merge_sort(A : 配列, left : 整数, right : 整数)
 *  if left+1 < right
 *      mid = (left + right) / 2
 *      merge_sort(A, left, mid)
 *      merge_sort(A, mid, right)
 *      merge(A, left, mid, right)
 *  このプログラムでは番兵と呼ばれるテクニックを使っています。これは、処理を行う範囲の境界部分に特殊なデータを置いておくことで、
 *  プログラムをすっきりさせるテクニックです。番兵を使わずに上のプログラムを書こうとすると、データ列をマージする処理において
 *   lindex や rindex がそれぞれ nl, nr 未満であるかどうかを確かめながら複雑な条件分岐の処理を書く必要が出てきます。
 *  今回は、入力の最大値より大きい数 INF を2つのデータ列の末尾に配置することで、番兵を実現しています。
 *  マージソートの計算量を考えます。merge_sort ではデータ列を2つに分割していますが、この分割は入力されるデータ列のサイズ n に
 *  対して約 log n 段行われます (上図参照) 。そして、各段のマージに合計 O(n) かかるため、マージソート全体の計算量は O(n log n) です。
 *  では、要素数 n の数列を昇順にソートするマージソートのプログラムを、上の疑似コードに従って実装してください。
 *  アルゴリズムが正しく実装されていることを確認するために、数列をソートした結果に加え、マージソート後の count の値を出力してください。
 */
var INF = 1000000001
var count = 0
function step5(){
  var lines = [10,'7 6 10 2 5 4 8 3 9 1']
  var n = Number.parseInt(lines[0])
  var A = lines[1].split(' ')
  for(var i=0; i<A.length; i++){
    A[i] = Number.parseInt(A[i])
  }
  mergeSort(A, 0, n)

  var str = ""
  for(i=0; i<A.length; i++){
    if(i==A.length-1){
      str += A[i]
    }else{
      str += A[i] + " "
    }
  }
  //str = str.slice(0, str.length-1)
  console.log(str)
  console.log(count)  
}
function merge(A,left, mid, right){
  var nl = mid -left
  var nr = right - mid
  var l = [], r = []
  for(var i = 0; i<nl; i++){
    l.push(A[left + i])
  }
  for(var j = 0; j<nr; j++){
    r.push(A[mid + j])
  }

  l.push(INF)
  r.push(INF)

  var lindex = 0
  var rindex = 0
  
  for(var k = left; k<right; k++){
    if(l[lindex]<r[rindex]){
      A[k] = l[lindex]
      lindex++
    }else{
      A[k] = r[rindex]
      rindex++
      count++
    }
  }
}
function mergeSort(A, left, right){
  
  if(left+1<right){
    var mid = Math.floor((left+right)/2)
    mergeSort(A, left, mid)
    mergeSort(A, mid, right)
    merge(A, left, mid, right)  
  }  
}
step5()