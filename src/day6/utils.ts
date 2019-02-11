let matrix: Array<string> = []
export function walk(array: Array<number>, step: number) {
    let max = Math.max(...array)
    let iMax = array.indexOf(max)

    let add = Math.floor(max / (array.length - 1))
    // let mod = max % add

    console.log(array + ' add: ' + add + ' max: ' + max + ' i: ' + iMax)

    let value = max
    for (let i = 0; i < array.length; i++) {
        if (i != iMax) {
            array[i] += add
            value -= add
        }
    }

    array[iMax] = value

    step++

    if (matrix.indexOf(JSON.stringify(array)) == -1) {
        matrix.push(JSON.stringify(array))

        return () => walk(array, step)
    }

    return step
}