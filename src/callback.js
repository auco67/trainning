function execCallback(fnc) {
  console.log('I call callback')
  fnc()
}

var myCallback = function () {
  console.log('This is my callback')
}

execCallback(myCallback)
