var N = 3
var K = 12
var persons = []
var event = []
var lines = []
/*
lines[0] = '68'
lines[1] = '85'
lines[2] = '57'
lines[3] = '32'
lines[4] = '90'
lines[5] = '74'
lines[6] = '7'
lines[7] = '2 0'
lines[8] = '4 A'
lines[9] = '3 0'
lines[10] = '1 A'
lines[11] = '4 softdrink 3781'
lines[12] = '6 softdrink 3010'
lines[13] = '4 0'
lines[14] = '5 alcohol 1018'
lines[15] = '1 0'
lines[16] = '1 softdrink 376'
lines[17] = '1 softdrink 797'
lines[18] = '2 alcohol 4284'
*/
lines[0] = '68'
lines[1] = '19'
lines[2] = '20'
lines[3] = '1 0'
lines[4] = '1 softdrink 376'
lines[5] = '1 softdrink 797'
lines[6] = '1 A'
lines[7] = '2 0'
lines[8] = '2 softdrink 376'
lines[9] = '2 softdrink 797'
lines[10] = '2 A'
lines[11] = '3 0'
lines[12] = '3 food 1575'
lines[13] = '3 food 2080'
lines[14] = '3 A'

for (var i = 0; i < lines.length; i++) {
  if (i < N) {
    var person = {
      age: 0,
      total: 0,
      off: false,
    }
    person.age = Number.parseInt(lines[i])
    persons.push(person)
  } else if (i >= N) {
    event.push(lines[i])
  }
}
var exit = 0

for (var et of event) {
  ary = et.split(' ')
  var j = Number.parseInt(ary[0]) - 1
  var total = 0
  total = persons[j].total
  if (isNaN(ary[1]) == false) {
    var price = Number.parseInt(ary[1])

    if (price == 0) {
      if (persons[j].age >= 20) {
        total = total + 500
        persons[j].off = true
      }
    } else {
      if (persons[j].off) {
        total = total + price - 200
      } else {
        total = total + price
      }
    }
    persons[j].total = total
  } else {
    if (ary[1] == 'A') {
      console.log(persons[j].total)
      exit++
    } else {
      if (persons[j].off) {
        total = total + Number.parseInt(ary[2]) - 200
      } else {
        total = total + Number.parseInt(ary[2])
      }
      persons[j].total = total
    }
  }
}
console.log(exit)
