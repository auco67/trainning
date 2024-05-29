/*
 * 和暦
 * 　明治：1868/10/23から1912/07/29まで
 * 　大正：1912/07/30から1926/12/24まで
 * 　昭和：1926/12/25から1989/01/07まで
 * 　平成：1989/01/08から2019/04/30まで
 * 　令和：2019/05/01から現在まで 
 */

var year = "1868"
var month = "10"
var day = "23"

var strYear = "年";
var strMonth = "月";
var strDay = "日";
var strGan = "元";
var meijiStart = new Date("1868/10/23");
var meijiEnd = new Date("1912/7/29");
var taishoStart = new Date("1912/7/30");
var taishoEnd = new Date("1926/12/24");
var showaStart = new Date("1926/12/25");
var showaEnd = new Date("1989/01/07");
var heiseiStart = new Date("1989/01/08");
var heiseiEnd = new Date("2019/04/30");
var reiwaStart = new Date("2019/05/01");

if(year >= 1873 && year <= 3000){
    var dDate = new Date(year + "/" + month + "/" + day);
    var eMonth = dDate.getMonth() + 1;
    var thisYear = year;
    if(dDate >= meijiStart && dDate <= meijiEnd){
        var meijiYear = meijiStart.getFullYear();
        thisYear = year -meijiYear+1;
        if(thisYear == 1){
            console.log("明治" + strGan + strYear + eMonth + strMonth + dDate.getDate() + strDay);
        }else{
            console.log("明治" + thisYear + strYear + eMonth + strMonth + dDate.getDate() + strDay);
        }        
    }else if(dDate >= taishoStart && dDate <= taishoEnd){
        var taishoYear = taishoStart.getFullYear();
        thisYear = year - taishoYear+1;
        if(thisYear == 1){
            console.log("大正" + strGan + strYear + eMonth + strMonth + dDate.getDate() + strDay);
        }else{
            console.log("大正" + thisYear + strYear + eMonth + strMonth + dDate.getDate() + strDay);
        }
    }else if(dDate >= showaStart && dDate <= showaEnd){
        var showYear = showaStart.getFullYear();
        thisYear = year - showYear+1;
        if(thisYear == 1){
            console.log("昭和" + strGan + strYear + eMonth + strMonth + dDate.getDate() + strDay);
        }else{
            console.log("昭和" + thisYear + strYear + eMonth + strMonth + dDate.getDate() + strDay);
        }
    }else if(dDate >= heiseiStart && dDate <= heiseiEnd){
        var heiseiYear = heiseiStart.getFullYear();
        thisYear = year - heiseiYear+1;
        if(thisYear == 1){
            console.log("平成" + strGan + strYear + eMonth + strMonth + dDate.getDate() + strDay);
        }else{
            console.log("平成" + thisYear + strYear + eMonth + strMonth + dDate.getDate() + strDay);
        }
    }else if(dDate >= reiwaStart){
        var reiwaYear = reiwaStart.getFullYear();
        thisYear = year - reiwaYear+1;
        if(thisYear == 1){
            console.log("令和" + strGan + strYear + eMonth + strMonth + dDate.getDate() + strDay);
        }else{
            console.log("令和" + thisYear + strYear + eMonth + strMonth + dDate.getDate() + strDay);
        }
    }    
}
