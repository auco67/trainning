console.log('Map関数')
var a = 3
var ary = [1, 2, 3, 4, 5]
console.log('　配列のすべての値に' + a + 'を足す')
console.log('　配列：', ary)
// 配列のすべての値をaの値だけ足します。
var result = ary.map((item) => item + a)
console.log('　結果：', result)

console.log('forEach関数')
var ary2 = [1, 2, 3, 4, 5]
// 配列の中のものをすべてconsole.logします。
ary2.forEach((item) => {
  console.log(item)
})

console.log('filter関数')
console.log('　3より小さいものを抜き出す')
const ary3 = [1, 2, 3, 4, 5]
console.log('　配列：', ary3)
// 3より小さいものだけを抜き出します。
result = ary3.filter((item) => item < 3)
console.log('　結果：', result)

console.log('find関数')
a = 'blue'
const ary4 = ['red', 'green', 'blue', 'yellow', 'white']
console.log(' ' + a + 'と同じ要素を返す')
console.log('　配列：', ary4)
// aと同じ要素があれば、抜き出します。
result = ary4.find((item) => item === a)
console.log('　結果：', result)

console.log('findIndex関数')
a = 'blue'
const ary5 = ['red', 'green', 'blue', 'yellow', 'white']
console.log(' ' + a + 'の配列インデックスを返す')
console.log('　配列：', ary5)
// aと同じ要素があれば、そのインデックス(何番目か)を返します。
var index = ary5.findIndex((item) => item === a)

console.log('　結果：', index)
