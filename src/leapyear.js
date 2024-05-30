/*
 * 閏年：西暦年号が4で割り切れる年をいう。
 * 　　　ただし、西暦年号が100で割り切れて400で割り切れない年は閏年ではない
 */

var year = 9999999992
console.log(year + '年は、閏年ですか？')
if (year % 4 == 0) {
  if (year % 100 == 0 && year % 400 != 0) {
    console.log('閏年ではありません。')
  } else {
    console.log('閏年です。')
  }
} else {
  console.log('閏年ではありません。')
}

/*
 * 西暦と月から日数を算出する
 */

var y = 9999999992
var m = 2
var day30 = [4, 6, 9, 11]

if (y % 4 == 0) {
  if (y % 100 == 0 && y % 400 != 0) {
    if (day30.includes(m)) {
      console.log(30)
    } else {
      if (m == 2) {
        console.log(28)
      } else {
        console.log(31)
      }
    }
  } else {
    if (day30.includes(m)) {
      console.log(30)
    } else {
      if (m == 2) {
        console.log(29)
      } else {
        console.log(31)
      }
    }
  }
} else {
  if (day30.includes(m)) {
    console.log(30)
  } else {
    if (m == 2) {
      console.log(28)
    } else {
      console.log(31)
    }
  }
}

/*
 * 西暦と月と日から次の日を算出する
 */
var dDate = new Date()
var y = dDate.getFullYear()
var m = dDate.getMonth() + 1
var d = dDate.getDate()
console.log('本日:', y, m, d)
dDate.setDate(dDate.getDate() + 1)
d = dDate.getDate()
console.log('翌日:', y, m, d)

/*
 * 本日が何曜日か算出する
 */
var dDate = new Date()
console.log(dDate)
var week = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']

for (var i in week) {
  if (i == dDate.getDay()) {
    console.log(week[i])
    break
  }
}

/*
 * 西暦が10^11の場合何曜日か算出する(ツェラーの公式)
 */
var y = 9999999992
var m = 2
var d = 29
var w = ['土', '日', '月', '火', '水', '木', '金']
console.log(y, m, d)
if (m < 3) {
  m = m + 12
  y = y - 1
}

var c = y / 100
var Y = y % 100
var g = -2 * c + c / 4
var h = (d + (26 * (m + 1)) / 10 + Y + Y / 4 + g) % 7
h = Math.floor((7 + h) % 7)

for (var i in w) {
  if (i == h) {
    console.log(w[i]+'曜日')
  }
}

/*
 * 西暦が10^11の場合何曜日か算出する
 */
var y = 2019
var m = 4
var d = 9
var w = ['日', '月', '火', '水', '木', '金','土']
var weekday = 2
var leaps =((y-1) / 4 - (y-1) / 100 + (y-1) / 400) - (1799 / 4 - 1799 / 100 + 1799 / 400)
console.log(y, m, d)
weekday += (leaps + 365 * (y - 1800)) % 7
for(var i=1; i<m; ++i){
    if(i=1 || i==3 || i==5 || i==7 || i==8 || i==10 || i==12){
        weekday +=31
    }else{
        if(i==2){
            if(isLeap(y)){
                weekday +=29    
            }else{
                weekday +=28
            }
        }else{
            weekday +=30
        }
    }
}
weekday += d
var h = Math.floor(weekday%7)

for (var i in w) {
    if (i == h) {
      console.log(w[i]+'曜日')
    }
  }

function isLeap(y){
    return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0
}