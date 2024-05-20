class employee {
  constructor(num, name) {
    this.number = num
    this.name = name
  }

  get employeeNum() {
    return this.number
  }

  get employeeName() {
    return this.name
  }
}

var lines = []
lines[0] = 'make 100 taizo'
lines[1] = 'make 200 hirosi'
lines[2] = 'make 300 yuko'
lines[3] = 'make 400 maiko'
lines[4] = 'getnum 1'
lines[5] = 'getname 1'
lines[6] = 'getname 3'

var persons = []
for (var i = 0; i < lines.length; i++) {
  var ary = lines[i].split(' ')
  var person = new Object(i)
  var j = 0
  if (lines[i].includes('make')) {
    person = new employee(ary[1], ary[2])
    persons.push(person)
  } else if (lines[i].includes('getnum')) {
    j = ary[1] - 1
    console.log(persons[j].employeeNum)
  } else if (lines[i].includes('getname')) {
    j = ary[1] - 1
    console.log(persons[j].employeeName)
  }
}
