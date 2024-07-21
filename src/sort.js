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
//step5()

/**
 * STEP: 6 クイックソート
 *  クイックソートは、ピボットと呼ばれる値を1つ選び、それを基準としてデータ列を「ピボット未満の要素からなるデータ列」と
 *  「ピボット以上の要素からなるデータ列」に二分することを再帰的に行うアルゴリズムです。このアルゴリズムは、問題を小さな問題に分割して解くことを
 *  繰り返すことによって元の問題の答えを得る手法である「分割統治法」に基づいており、実用的なソートアルゴリズムの中で最も高速であるとされています 
 *  (名前に quick と付いていることからも、その高速さが評価されていることが窺えます)。
 *  ピボットの選び方にはいくつか種類があり、
 *   ・データ列の先頭をとる
 *   ・データ列の末尾をとる
 *   ・データ列からランダムにとる
 *   ・データ列からランダムに2つとり、その中央値をとる
 *  等が例として挙げられます。今回は、2つ目の方法「データ列の末尾をとる」でピボットを選択することにします。
 *  ピボットを選択したら、データ列の先頭からデータを1つずつ確認していき、ピボット未満のデータをデータ列の先頭に集めます。
 *  そして、ピボットより左側がピボット未満、右側がピボット以上となるようにピボットを移動し、そこでデータ列を二分します。そして、
 *  分割された2つのデータ列に対して再び同じ操作を繰り返します。
 *  クイックソート (昇順) は以下のようなアルゴリズムです。
 *  // アルゴリズムが正しく実装されていることを確認するために導入するカウンタ変数、ソート処理には関係がないことに注意
 *  count <- 0
 *  
 * //A[left] ~ A[right-1] をクイックソートする配列 A をクイックソートするには quick_sort(A, 0, n) を呼び出す
 *  
 *  quick_sort(A : 配列, left : 整数, right : 整数)
 *  // ソートする範囲の長さが1以下の場合は何もしない
 *  if left+1 >= right then
 *      return
 *  
 *  // データ列の末尾 A[right-1] をピボットとする
 *  pivot <- A[right-1]
 *  
 *  // ピボット未満のデータを挿入する位置を保持する変数を用意
 *  cur_index <- left
 *  
 *  for i = left to right-2
 *      if A[i] < pivot then
 *          swap(A[cur_index], A[i])
 *          cur_index++
 *  
 *          count++
 *  
 *  // ピボットを A[cur_index] へ移動し、データ列を分割する
 *  swap(A[cur_index], A[right-1])
 *  
 *  // 分割されたデータ列に対して再帰的にクイックソートを行う
 *  quick_sort(A, left, cur_index)
 *  quick_sort(A, cur_index+1, right)
 *  クイックソートは、データ列がバランスよくちょうど半分ずつに分割されていけば、データ列のサイズ n に対して約 log n 段にわたり分割が行われることに
 *  なり、最も効率よくソートを行うことができます。データ列がバランスよく分割されるかどうかは、「ピボットの選び方とデータ列の相性」に強く依存して
 *  います。クイックソートの平均計算量は O(n log n) であり、最悪計算量は O(n^2) であることが知られています。
 *  では、要素数 n の数列を昇順にソートするクイックソートのプログラムを、上の疑似コードに従って実装してください。
 *  アルゴリズムが正しく実装されていることを確認するために、数列をソートした結果に加え、クイックソート後の count の値を出力してください。
 */
function step6(){
  var lines = [10,"7 6 10 2 5 1 8 3 9 4"]
  var n = Number.parseInt(lines[0])
  var a = lines[1].split(" ")
  for(var i=0; i<a.length; i++){
    a[i]= Number.parseInt(a[i])
  }
  quickSort(a, 0, n)
  var str = ""
  for(i=0; i<a.length; i++){
    if(i==a.length-1){
      str += a[i]
    }else{
      str += a[i] + " "
    }
  }
  //str = str.slice(0, str.length-1)
  console.log(str)
  console.log(count)
}
function quickSort(a, left, right) {
  if(left+1<right){
    // pivot に a[right-1] を代入
    var pivot = a[right-1];
      
    // curIndex を left で初期化
    var curIndex = left;
    for (var i = left; i < right - 1; i++) {
        // もし a[i] が pivot より小さいなら
        if (a[i]<pivot) {
            // a[curIndex] と a[i] を交換
            var cp = a[curIndex];
            a[curIndex]=a[i];
            a[i]=cp;
            
            // curIndex を 1 だけ増やす
            curIndex++;
            count++;
        }
    }

    // ピボットと a[curIndex] を交換
    a[right-1] = a[curIndex];
    a[curIndex] = pivot;

    // quickSort(a, left, curIndex) を呼び出す
    quickSort(a, left, curIndex);

    // quickSort(a, curIndex+1, right) を呼び出す
    quickSort(a, curIndex+1, right);
  }
  
}
//step6()

/**
 * STEP: 7 ソートの基本
 *  整数 n と、数列 a_1, ... , a_n が与えられます。
 *  数列 a が昇順でソートされた状態かどうか判定してください。言い換えると、 a_1 ≦ a_2 ≦ ... ≦ a_n かどうか判定してください。
 */
function step7(){
  //var lines = [5,"1 3 5 7 9"]
  //var lines = [5,"4 3 5 1 9"]
  var lines = [1,100]
  var n = Number.parseInt(lines[0])
  var a = []
  if(n!=1){
    a = lines[1].split(" ")
  }else{
    a = [lines[1]]
  }
  
  var blnFlg = []
  for(var i=0; i<n; i++){
    if(i<n-1){
      var a_i = Number.parseInt(a[i])
      var a_i_1 = Number.parseInt(a[i+1])
      if(a_i > a_i_1){
        blnFlg.push(false)
      }else{
        blnFlg.push(true)
      }
    }
  }
  if(blnFlg.includes(false)){
    console.log("No")
  }else{
    console.log("Yes")
  }
  
}
//step7()

/**
 * STEP: 8 最大最小
 *  整数 n と、数列 a_1, ... , a_n が与えられます。
 *  数列 a の最大値と最小値をそれぞれ半角スペース区切りで出力してください。
 */
function step8(){
  //var lines = [5,"1 3 5 7 9"]
  //var lines = [5,"4 3 9 1 2"]
  var lines =[1,100]
  var n = Number.parseInt(lines[0])
  var a = []
  if(n!=1){
    a = lines[1].split(" ")
  }else{
    a = [Number.parseInt(lines[1])]
  }
  
  for(var i=0; i<n; i++){
    a[i] = Number.parseInt(a[i])
  }
  var max = Math.max(...a)
  var min = Math.min(...a)
  console.log(max, min)
}
//step8()

/**
 * STEP :9 Top - k (easy) 
 *  整数 n と、数列 a_1, ... , a_n と数値 k が与えられます。
 *  数列 a の k 番目に大きい値を出力してください。
 */
function step9(){
  //var lines = ["5 2","1 3 5 7 9"]
  //var lines = ["5 2","4 9 9 1 2"]
  var lines = ["1 1","100"]
  var ay = lines[0].split(" ")
  var n = Number.parseInt(ay[0])
  var k = Number.parseInt(ay[1])
  var a = []
  if(n!=1){
    a = lines[1].split(" ")
  }else{
    a = [Number.parseInt(lines[1])]
  }
  for(var i=0; i<n; i++){
    a[i] = Number.parseInt(a[i])
  }
  a.sort((a, b) => {return(b-a)})
  console.log(a[k-1])
}
//step9()

/**
 * STEP :10 重複削除
 *  整数 n と、数列 a_1, ... , a_n が与えられます。
 *  数列 a から重複した要素をすべて削除し、残った要素を昇順かつ半角スペース区切りで出力してください。
 */
function step10(){
  //var lines = [6,"2 2 2 1 3 3"]
  //var lines = [5,"1 1 1 1 1"]
  var lines = [1,"100"]
  var n = Number.parseInt(lines[0])
  var a = [], b = []
  if(n!=1){
    a = lines[1].split(" ")
  }else{
    a = [Number.parseInt(lines[1])]
  }
  for(var i=0; i<n; i++){
    a[i] = Number.parseInt(a[i])
    if(!b.includes(a[i])) b.push(a[i])
  }
  b.sort((a, b) => {return(a-b)})
  console.log(b.join(",").replaceAll(",", " "))
}
//step10()

/**
 * STEP: 11 区間のソート
 *  整数 n, l, r と、数列 a_1, ... , a_n が与えられます。
 *  数列 a の l 番目の要素から r - 1 番目の要素だけを昇順でソートしてください。 
 *  l 番目の要素から r - 1 番目の要素以外の要素は操作する必要がありません。
 *  また、操作後の数列 a を半角スペース区切りで出力してください。
 */
function step11(){
  var lines = ["6 2 6","6 5 4 3 2 1"]
  //var lines = ["6 1 7","6 5 4 3 2 1"]
  //var lines = ["1 1 2","1"]
  var ay = lines[0].split(" ")
  var n = Number.parseInt(ay[0])
  var l = Number.parseInt(ay[1])-1
  var r = Number.parseInt(ay[2])-2
  var a = [],b = [], c = []
  if(n!=1){
    a = lines[1].split(" ")
  }else{
    a = [Number.parseInt(lines[1])]
  }
  for(var i=0; i<n; i++){
    a[i] = Number.parseInt(a[i])
    if(i>=l && i<=r){
      b.push(a[i])
    }
  }
  b.sort((a, b) => {return(a-b)})
  for(i=0; i<n; i++){
    if(i<l){
      c.push(a[i])
    }else if(i>=l && i<=r){
      c.push(b[i-l])
    }else if(i>r){
      c.push(a[i])
    }
  }
  console.log(c.join(",").replaceAll(","," "))
}
//step11()

/**
 * STEP: 12 Top - k (hard)
 *  整数 n, q と、数列 a_1, ..., a_n と数列 k_1, ..., k_q が与えられます。
 *  1 以上 n 以下の各 i について、 a の k_i 番目に大きい値をそれぞれ求め、改行区切りで出力してください。
 */
function step12(){
  var lines = ["6 3","11 9 7 5 3 1","1 2 3"]
  //var lines = ["5 6","3 5 7 9 11","1 2 3 2 5 4"]
  var ay = lines[0].split(" ")
  var n = Number.parseInt(ay[0])
  var q = Number.parseInt(ay[1])
  var a = lines[1].split(" ")
  var k = lines[2].split(" ")
  a = a.map(Number)
  a.sort((a, b)=>{return (b-a)})
  k = k.map(Number)
  
  for(var i=0; i<q; i++){
    console.log(a[k[i]-1])
  }
}
//step12()

/**
 * STEP: 13 プログラミングレベル
 *  問題集に、新たに n 個の問題が収録された問題集が公開されました。
 *  各問題の難易度は数値で表され、 a_1, ... , a_n です。問題は好きな順序で解くことができますが、
 *  難易度 a_i の問題を解くには「プログラミングレベル」が a_i 以上である必要があります。
 *  また、難易度 a_i の問題を解くと「プログラミングレベル」が a_i + 1 になります。
 *  プログラミング初心者である京子ちゃんは現在「プログラミングレベル」が 1 です。
 *  京子ちゃんは問題集内のすべての問題を解くことができるでしょうか。
 */
function step13(){
  //var lines = [5,"3 1 4 2 5"]
  //var lines = [1,100]
  const fs = require('fs');
  var text = fs.readFileSync("./csv/step13_2.txt", 'utf8');
  var lines = text.toString().split('\n');

  var level = 1
  var n = Number.parseInt(lines[0])
  var a = []
  if(n==1){
    a.push(Number.parseInt(lines[1]))
  }else{
    a = lines[1].split(" ")
    a = a.map(Number)
  }
  a.sort((a,b)=>{return (a-b)})
  console.log(a)
  var blnFlg =false
  if(a[0]==1) blnFlg = true
  
  for(var i=0; i<n; i++){
    if(i<n-1){
      if(a[i+1]-a[i]>1){
        blnFlg = false
        break
      }
    }
    if(level>=a[i]){
      blnFlg = true
      level +=(i+1)
    }else{
      blnFlg = false
    }
  }
  
  if(blnFlg){
    console.log("Yes")
  }else{
    console.log("No")
  }
}
//step13()

/**
 * STEP: 14 辞書順
 *  数値 k が与えられます。
 *  アルファベット小文字 3 文字で作られる文字列のうち、辞書順で k 番目に小さい文字列を答えてください。
 *  辞書順とは、辞書に出てくる順番のことで、たとえばabc, aaa, acb, abdの四つを辞書順に並び替えると
 *  aaa, abc, abd, acbの順になります。
 */
function step14(){
  var lines = [15566]
  var k = Number.parseInt(lines[0])-1
  var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var one = alpha.concat()
  var two = alpha.concat()
  var three = alpha.concat()
  var alphaLen = 26
  var maxNum = alphaLen ** 3
  var cnt1= 0, cnt2= 0, cnt3=0
  var str = ""
  for(var i=0; i<maxNum; i++){
    if(i==k){      
      if(i<(alphaLen ** 1)){
        cnt1 = i%alphaLen

      }else if(i>(alphaLen ** 1) && i<(alphaLen ** 2)){
        cnt2 = Math.floor(i/(alphaLen ** 1))
        cnt1 = i%(alphaLen ** 1)

      }else if(i>(alphaLen ** 2) && i<(alphaLen ** 3)){
        cnt3 = Math.floor(i/(alphaLen ** 2))
        if(i%(alphaLen ** 2) > (alphaLen ** 1)){
          cnt2 = Math.floor( (i%(alphaLen ** 2)) / (alphaLen ** 1) )
          cnt1 = (i%(alphaLen ** 2))%(alphaLen ** 1)
        }
      }
      str = one[cnt3]+two[cnt2]+three[cnt1]
      console.log(str)
      break
    }    
  }
}
//step14()

/**
 * STEP:15 部分列
 * 整数 n, x と、数列 a_1, ... , a_n が与えられます。
 * a からいくつかの要素を選び、それらの和を x 以上にするためには最低いくつの要素を選ぶ必要がありますか。
 * たとえば、 a = [ 5, 3, 6, 2 ], x = 12 とします。和が 12 以上になる a の要素の組み合わせは以下の 3 つです。
 * ・ [ 5, 3, 6 ]
 * ・ [ 5, 6, 2 ]
 * ・ [ 5, 3, 6, 2 ]
 * この場合、 a からいくつかの要素を選び、それらの和を 12 以上にするためには最低 3 つの要素を選ぶ必要があります。
 */
function step15(){
  //var lines = ["4 12","5 3 6 2"]
  //var lines = ["4 17","5 3 6 2"]
  var lines = ["4 200000000000","1000000 1000000 1000000 1000000"]
  var ay = lines[0].split(" ")
  var n = Number.parseInt(ay[0])
  var x = Number.parseInt(ay[1])
  var a = lines[1].split(" ")
  a = a.map(Number)
  a.sort((a, b)=>{return(b-a)})
  var count = 1
  var total = 0
  for(var i=0; i<n; i++){
    total += a[i]
    if(total<x){
      count++
    }else{
      break
    }
  }
  if(total<x){
    console.log(-1)
  }else{
    console.log(count)
  }
  
}
//step15()

/**
 * STEP: 16 ペアソート
 * 整数 n と n 行 2 列の表 a が与えられます。 a を行単位で、 1 列目の数値に基づいて昇順でソートしてください。
 * また、 1 列目の数値が等しい 2 つの行に関しては 2 列目の数値に基づいて昇順でソートしてください。
 * たとえば、以下の表について考えます。
 *  11 21
 *  1 100
 *  100 200
 *  11 20
 * 
 * この表を問題文の条件でソートすると以下のようになります。
 *  1 100
 *  11 20
 *  11 21
 *  100 200
 */
function step16(){
  var lines = [4,"11 21","1 100","100 200","11 20"]
  var n = Number(lines[0])
  var a = []
  for(var i=1; i<n+1; i++){
    a.push(lines[i].split(" ").map(Number))
  }
  a.sort((a,b)=>{
      if (a[0] < b[0]) return -1
      if (a[0] > b[0]) return 1
      if (a[1] < b[1]) return -1
      if (a[1] > b[1]) return 1
      return 0
  })
  a.forEach(a=>{
    console.log(a.join(",").replaceAll(",", " "))
  })
}
//step16()

/**
 * STEP: 17 タプルソート
 *  整数 n, m, k と n 行 m 列の表 a が与えられます。以下の条件をすべて満たすように、 a を行単位でソートしてください。
 * ・ a の k 列目が昇順になっている
 * ・ a の k 列目の値が等しい 2 つの行では、 a の 1 列目の値が昇順になっている
 * ・ a の k 列目 と a の 1 列目から i 列目までのすべての値が等しい 2 つの行では、
 *  a の i + 1 列目の値が昇順になっている ( 1 ≦ i ≦ m - 1 )
 */
function step17(){
  var lines = ["4 3 3","10 100 1","10 100 11","10 200 2","20 200 1"]
  //var lines = ["4 2 2","1 1","1 1","1 3","1 2"]
  var ay = lines[0].split(" ")
  ay = ay.map(Number)
  var n = ay[0]
  var m = ay[1]
  var k = ay[2]-1
  var a = []
  for(var i=1; i<n+1; i++){
    a.push(lines[i].split(" ").map(Number))
  }
  a.sort((a, b)=>{
    if (a[k] < b[k]) return -1
    if (a[k] > b[k]) return 1
    for(var j= 0; j<m; j++){
      if (a[j] < b[j]) return -1
      if (a[j] > b[j]) return 1
    }
    return 0
  })
  a.forEach(a=>{
    console.log(a.join(",").replaceAll(","," "))
  })
}
//step17()

/**
 * STEP: 18 スケジューリング
 *  スキルチェックでは年に何度かキャンペーンを開催しています。各回ではキャンペーン問題が提供され、その問題を解くと抽選で商品がもらえます。
 *  また、キャンペーンは n 回開催され、 i 回目のキャンペーンは サービス開始日から数えて、 
 *  l_i 日目から r_i 日目の間(l_i 日目、 r_i 日目を含む)に開催される予定です。多くの商品がほしい京子ちゃんはできるだけ
 *  多くのキャンペーンに参加したいと思っています。しかし、京子ちゃんにとってキャンペーン問題は非常に難しく、
 *  開催期間中はずっとその問題に取りかかるため、 2 つの問題を同時に考えることはできません。
 *  このとき、京子ちゃんは最大でいくつのキャンペーンに参加できますか？
 *  たとえば、 n = 3, l = [ 1, 4, 7 ], r = [ 4, 7, 10 ]の場合、以下の画像のようにキャンペーンが開催されています。
 *  このときは最大でキャンペーン 1 とキャンペーン 3 の 2 つに参加できます。別のサンプルも見てみましょう。 
 *  n = 3, l = [ 1, 3, 6 ], r = [ 8, 5, 9 ] の場合も 2 つのキャンペーン (キャンペーン 2 とキャンペーン 3) に参加できます。
 */
function step18(){
  var lines = [3,"1 4","4 7","7 10"]
  //var lines = [3,"1 8","3 5","6 9"]
  //var lines = [5, "4 5", "2 3", "1 2", "3 5", "6 9"]
  var n = Number(lines[0])
  var l = []
  for(var i=1; i<n+1; i++){
    l[i-1] = lines[i].split(" ")
    l[i-1] = l[i-1].map(Number)
  }
  l.sort((a, b)=>{return a[1]-b[1]})
  var start = -0, end = 0, count = 0
  for(i=0; i<n; i++){
    if(i===0){
      start = l[i][0]
      end = l[i][1]
      count++
    }else{
      if(end<l[i][0] && end<l[i][1]){
        start = l[i][0]
        end = l[i][1]
        count++
      }
    }
  }
  console.log(count)
}
//step18()

/**
 * STEP: 19 文字列のソート
 * 文字列が n 個与えられます。以下の条件を満たすように並び替えてください。
 * 1. 各文字列の文字数が昇順になるようにする。
 * 2. 文字数が等しい複数の文字列の中では、辞書順になるようにする。
 */
function step19(){
  var lines = [4,"b","ab","a","aa"]
  lines.shift()
  lines.sort((a, b)=>{
    if (a.length < b.length) return -1
    if (a.length > b.length) return 1
    if (a.length === b.length){
      if (a < b) return -1
      if (a > b) return 1
    }
  })
  lines.forEach(l=>{
    console.log(l)
  })
}
step19()
