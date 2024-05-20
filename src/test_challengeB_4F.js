var lines = []
lines[0] = '21 25'
lines[1] = 'The quick brown fox jumps over the lazy dog.'
var ary = lines[0].split(' ')
var a = Number.parseInt(ary[0]) - 1
var b = Number.parseInt(ary[1])
var lower = lines[1].slice(a, b)
var Upper = lower.toLocaleUpperCase()
console.log(lines[1].replace(lower, Upper))
