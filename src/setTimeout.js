function waitTime(){
    setTimeout(() =>{
        console.log('１番目のメッセージ')
    },5000)

    setTimeout(() =>{
        console.log('２番目のメッセージ')
    },3000)

    setTimeout(() =>{
        console.log('３番目のメッセージ')
    },1000)
}

waitTime()

function fnc(){
    console.log('funが実行されました')
}

setTimeout(() =>{
    console.log('6行後に実行されました')
    fnc()
},6000)
