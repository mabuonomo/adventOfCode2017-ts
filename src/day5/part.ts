import * as fs from 'fs';
import * as rd from 'readline'

var reader = rd.createInterface(fs.createReadStream(__dirname + "/input.txt"))

var data: Array<number> = [];

reader.on("line", (l: string) => {
    data.push(parseInt(l))
})

reader.on("close", () => {
    console.log('Result 1: ' + main1());
    console.log('Result 2: ' + main2());
})

function main1(): number {
    let step = 0
    let index = 0

    // console.log(data)

    while (index < data.length) {
        data[index] += 1
        index += data[index] - 1
        step++

        // console.log(data)
        // console.log('Pivot: ' + index)
    }

    return step
}

function main2(): number {
    return 0
}