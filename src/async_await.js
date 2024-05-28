const fs = require('fs')
const {parse} = require('csv-parse/sync')

async function fetchCSVFile() {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = fs.readFileSync('./csv/vegetables.csv', 'utf8')
            records = parse(data,  {columns: true, delimiter: ','})
            resolve(records);
        }, 2000); 
    });
}

async function main() {
    try {
        console.log("csvファイルを読み込みます...");
        const records = await fetchCSVFile()
        console.log("csvファイルを読み込みました");
        console.dir(records)
    } catch (error) {
        console.error("Error:", error);
    }
}

main();