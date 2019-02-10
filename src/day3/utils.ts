import { Geo } from "../utils/utils";

export function findNext(matrix: Array<Array<number>>, position: Geo): Geo {
    let value = matrix[position.x][position.y]

    if (matrix[position.x + 1][position.y] == value + 1) {
        return { x: position.x + 1, y: position.y }
    }

    if (matrix[position.x - 1][position.y] == value + 1) {
        return { x: position.x - 1, y: position.y }
    }

    if (matrix[position.x][position.y + 1] == value + 1) {
        return { x: position.x, y: position.y + 1 }
    }

    if (matrix[position.x][position.y - 1] == value + 1) {
        return { x: position.x, y: position.y - 1 }
    }

    return { x: position.x, y: position.y }
}

export function sumNear(matrix: Array<Array<number>>, position: Geo): number {
    let value = matrix[position.x][position.y]

    let sum = value;

    try {
        sum += matrix[position.x - 1][position.y] < value ? matrix[position.x - 1][position.y] : 0
    } catch (e) { }
    try {
        sum += matrix[position.x + 1][position.y] < value ? matrix[position.x + 1][position.y] : 0
    } catch (e) { }
    try {
        sum += matrix[position.x][position.y + 1] < value ? matrix[position.x][position.y + 1] : 0
    } catch (e) { }
    try {
        sum += matrix[position.x][position.y - 1] < value ? matrix[position.x][position.y - 1] : 0
    } catch (e) { }

    return sum
}

export function findSum(matrix: Array<Array<number>>, position: Geo, size: number) {
    let sum = sumNear(matrix, position)

    if (sum > size) {
        return sum
    }

    return () => findSum(matrix, findNext(matrix, position), size)
}