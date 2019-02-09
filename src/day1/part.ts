import * as fs from 'fs';
import * as rd from 'readline'

var reader = rd.createInterface(fs.createReadStream("./src/day1/input.txt"))

var data: string;
reader.on("line", (l: string) => {
    data = l;
})

reader.on("close", () => {
    let value = main1();
    console.log('Result 1: ' + value);
})

function main1(): number {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        let actual = parseInt(data[i]);
        let next = -1;
        if (i + 1 == data.length) {
            next = parseInt(data[0]);
        } else {
            next = parseInt(data[i + 1]);
        }

        if (actual === next) {
            sum += actual;
        }
    }

    return sum;
}