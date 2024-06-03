//同期関数 synchronization
function syncAfter3second() {
  var start = new Date().getTime()
  // 無限ループ内で毎回時間を取得し、3秒経過していたらbreakで抜ける
  while (true) {
    var current = new Date().getTime()
    if (current - start >= 3000) break
  }
  // while文を抜けた時の時間を終了時間とする
  var end = current
  console.log('### 同期関数の実行結果 ###')
  console.log('start       : ' + start)
  console.log('end         : ' + end)
  console.log('end - start : ' + (end - start))
  console.log()
}

//非同期関数 asynchronous
function asyncAfter3second() {
  var start = new Date().getTime()
  // setTimeoutを使い、3秒後に引数の無名関数の処理を実行する
  setTimeout(function () {
    var end = new Date().getTime()
    console.log('### 非同期関数の実行結果 ###')
    console.log('start       : ' + start)
    console.log('end         : ' + end)
    console.log('end - start : ' + (end - start))
    console.log()
  }, 3000)
}
asyncAfter3second()
syncAfter3second()
