import * as fs from 'fs';
import * as rd from 'readline'

var reader = rd.createInterface(fs.createReadStream(__dirname + "/input.txt"))
// var reader = rd.createInterface(fs.createReadStream(__dirname + "/test.txt"))

type Node = { name: string, weight: number }
var left: Array<Node> = []
var right: Array<string> = []

// uylvg (403) -> xrvcjq, hihltxf, junpjcj, onkvtu, cckdoyb, favay, xsygurk
reader.on("line", (l: string) => {
    let line = l.split(' ')
    let name = line[0].trim();
    let weight = parseInt(line[1].slice(1, -1))
    left.push({ name: name, weight: weight })

    try {
        // console.log(l.split('->'))
        line = l.split('->')[1].split(',')
        line.forEach(element => {
            right.push(element.trim())
        });
    } catch (e) { }
})

reader.on("close", () => {
    console.log('Result 1: ' + main1());
    console.log('Result 2: ' + main2());
})

function main1() {

    let result: Array<Node> = []

    left.forEach(element => {
        let found = right.find((value, index, array) => value == element.name)

        if (found == undefined) {
            result.push(element)
        }
    })

    return JSON.stringify(result)
}

function main2(): number {
    return 0
}