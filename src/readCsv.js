/*
 * 前提：csv-parseパッケージをインストールすること
 * npm install --save csv-parse
 * url:https://www.npmjs.com/package/csv-parse 
 */
const fs = require('fs')
const {parse} = require('csv-parse/sync')

const data = fs.readFileSync('./csv/vegetables.csv', 'utf8')
var records = parse(data)

for (const record of records) {
  console.log(record)
}

records = parse(data,  {columns: true, delimiter: ','})
for (const record of records) console.log(record)
for (const index in records) console.log(records[index]['品名'])