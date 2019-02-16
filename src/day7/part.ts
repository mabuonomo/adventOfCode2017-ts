import * as fs from 'fs';
import * as rd from 'readline'
import { Tower, Tree } from './utils';

var reader = rd.createInterface(fs.createReadStream(__dirname + "/input.txt"))
// var reader = rd.createInterface(fs.createReadStream(__dirname + "/test.txt"))

var tree: Tree = new Tree()
var left: Array<string> = []
var right: Array<string> = []

// uylvg (403) -> xrvcjq, hihltxf, junpjcj, onkvtu, cckdoyb, favay, xsygurk
reader.on("line", (l: string) => {
    let line = l.split(' ')
    left.push(line[0].trim())
    // let father: Tower = { name: line[0].trim(), weight: 0 }

    // let childs: Array<Tower> = []
    try {
        // console.log(l.split('->'))
        line = l.split('->')[1].split(',')
        line.forEach(element => {
            // let child: Tower = { name: element.trim(), weight: 0 }
            // childs.push(child)
            right.push(element.trim())
        });
    } catch (e) { }

    // // console.log(data)
    // let node = tree.createNode(father, childs)
    // tree.insertNode(node)

    // console.log(tree.getHead())
})

reader.on("close", () => {
    console.log('Result 1: ' + main1());
    console.log('Result 2: ' + main2());
})

function main1() {

    let result: Array<string> = []

    left.forEach(element => {
        let found = right.find((value, index, array) => value == element)

        if (found == undefined) {
            result.push(element)
        }
    })

    return result
}

function main2(): number {
    return 0
}