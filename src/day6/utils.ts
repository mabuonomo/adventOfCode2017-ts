let matrix: Array<string> = []
export function walk(array: Array<number>, step: number) {
    let max = Math.max(...array)
    let iMax = array.indexOf(max)

    let add = Math.floor(max / (array.length - 1))
    // let mod = max % add

    // console.log(array + ' add: ' + add + ' max: ' + max + ' i: ' + iMax)

    array[iMax] = 0

    let value = max
    let i = iMax + 1
    while (value > 0) {
        if (i == array.length) {
            i = 0
        }

        array[i] += 1
        value--
        i++
    }

    step++

    if (matrix.indexOf(JSON.stringify(array)) == -1) {
        matrix.push(JSON.stringify(array))

        return () => walk(array, step)
    }

    return step
}