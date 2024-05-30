/*
 * 閏年：西暦年号が4で割り切れる年をいう。
 * 　　　ただし、西暦年号が100で割り切れて400で割り切れない年は閏年ではない
 */

var year = 3141601912
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

var y = 3141601912
var m = 3
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
var y = 3141601912
var m = 3
var d = 31
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
var y = 3141601912
var m = 3
var d = 31
var w = ['日', '月', '火', '水', '木', '金','土']
var weekday = 2
var leaps =((y-1) / 4 - (y-1) / 100 + (y-1) / 400) - (1799 / 4 - 1799 / 100 + 1799 / 400)
weekday += (leaps + 365 * (y - 1800)) % 7

for(var i=1; i<m; i++){
    if(i==1 || i==3 || i==5 || i==7 || i==8 || i==10 || i==12){
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
weekday +=d
var h = Math.floor(weekday%7)

for (var i in w) {
    if (i == h) {
      console.log(w[i]+'曜日')
    }
}

function isLeap(y){
    return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0
}

/*
 * 翌営業日を算出する
 * 条件：１．平日は月～金曜日で休日は土～日で祝日は考慮しない
 * 　　　２．2月は28日までとし閏年は考慮しない
 */
var date = new Date();
var m = 2
var d = 28
var w = 'FRI'
var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

if( (m>=1 && m<=12) && (d>=1 && d<=31)){
  date.setMonth(m-1,d)
  console.log(date)
  
  var plusNum = d
  if(d==28) plusNum +=1
  for(var i=0; i<week.length; i++){
    if(week[i]==w){
      switch (week[i]){
        case "SUN":
        case "MON":
        case "TUE":
        case "WED":
        case "THU":
          plusNum+=1
          break
        case "FRI":
          plusNum+=3
          break
        case "SAT":
          plusNum+=2
          break
      }
    }
  }
  date.setDate(plusNum)
  m = date.getMonth()+1
  d = date.getDate()
  if(m==2 && d==29){
    date.setDate(d+1)
    m = date.getMonth()+1
    d = date.getDate()
  }
  console.log(m+"月"+d+"日")
}

/*
 * 西暦2019年の最長となる連休の日数を算出する
 * 条件：休業日とは、土曜日、日曜日、または、内閣府の定める国民の祝日・休日のこと
 */
var year =2019
var holiday = [ [1, 1], [1, 14], [2, 11], [3, 21], [4, 29], [4, 30],
                [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [7, 15],
                [8, 11], [8, 12], [9, 16], [9, 23], [10, 14], [10, 22],
                [11, 3], [11, 4], [11, 23]]
var daysOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var isHoliday = []
for(var i=0; i<13; i++){
  isHoliday[i] = []
  for(var j=0; j<32; j++){
    isHoliday[i][j] = false
  }
}
for(i=0; i<holiday.length; i++){
  var one = holiday[i][0]
  var two = holiday[i][1]
  isHoliday[one][two] = true
}

var M=1
var D=1
var weekday = 2
var answer = 0
var temp = 0

while(true){
  if(weekday == 0 || weekday == 6 || isHoliday[M][D]){
    temp++
  }else{
    answer = Math.max(temp, answer)
    temp = 0
  }
  if(M==12 && D==31){
    answer = Math.max(temp, answer)
    break
  }
  if(D==daysOfMonth[M]){
    M+=1
    D=1
  }else{
    D+=1
  }
  weekday = (weekday+1)%7
}
console.log(answer)
