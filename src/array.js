var count = {}
var numbers = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 4, 2, 1, 1, 1, 1]
console.log(numbers)
numbers.forEach(function (i) {
  count[i] = (count[i] || 0) + 1
})
console.log(count)

count = {}
var strings = ['A', 'A', 'A', 'B', 'B', 'C', 'Z']
console.log(strings)
strings.forEach(function (i) {
  count[i] = (count[i] || 0) + 1
})
console.log(count)

count = {}
var colors = ['red', 'red', 'blue', 'blue', 'green', 'red', 'green']
console.log(colors)
colors.forEach(function (i) {
  count[i] = (count[i] || 0) + 1
})
console.log(count)
