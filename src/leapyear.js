/*
 * 閏年：西暦年号が4で割り切れる年をいう。
 * 　　　ただし、西暦年号が100で割り切れて400で割り切れない年は閏年ではない
 */

var year = 1600;
console.log(year + "年は、閏年ですか？")
if(year%4 == 0){
    if(year%100 == 0 && year%400 != 0){
      console.log("閏年ではありません。");    
    }else{
        console.log("閏年です。");
    }

}else{
    console.log("閏年ではありません。");
}

/*
 * 西暦と月から日数を算出する
 */

var y = 1600
var m = 1
var day30 = [4,6,9,11]

if(y%4 == 0){
    if(y%100== 0 && y%400!= 0){
        if(day30.includes(m)){
            console.log(30);
        }else{
            if(m == 2){
                console.log(28);
            }else{
                console.log(31);
            }
        }
    }else{
        if(day30.includes(m)){
            console.log(30);
        }else{
            if(m == 2){
                console.log(29);
            }else{
                console.log(31);
            }
        }
    }
}else{
    if(day30.includes(m)){
        console.log(30);
    }else{
        if(m == 2){
            console.log(28);
        }else{
            console.log(31);
        }
    }
}

/*
 * 西暦と月と日から次の日を算出する
 */
var dDate = new Date();
var y = dDate.getFullYear();
var m = dDate.getMonth()+1;
var d = dDate.getDate();
console.log('本日:', y, m, d);
dDate.setDate(dDate.getDate()+1);
d = dDate.getDate();
console.log('翌日:',y, m, d);

/*
 * 本日が何曜日か算出する
 */
var dDate = new Date();
var week = ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'];

for(var i in week){
    if(i == dDate.getDay()){
        console.log(week[i]);
        break;
    }
}