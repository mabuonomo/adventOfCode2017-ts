import { number } from "prop-types";

type Geo = { x: number, y: number, z?: number }

export function manhattanDistance(point1: Geo, point2: Geo): number {
    return Math.abs(point1.x - point2.x) + Math.abs(point1.y - point2.y) + Math.abs(point1.z - point2.z)
}

export enum Step {
    UP,
    DOWN,
    RIGHT,
    LEFT
}

export function createSpiralMatrix(
    matrix: Array<Array<number>>,
    size: number,
    nextDirection: Step,
    nextPosition: Geo,
    nextValue: number
): Array<Array<number>> {

    // exit condition
    if (nextValue == size) {
        return matrix
    }

    if (matrix == undefined) {
        matrix = []
    }

    let actualPosition = { x: nextPosition.x, y: nextPosition.y }
    nextPosition = { x: nextPosition.x + size, y: nextPosition.y + size }

    if (matrix[nextPosition.x] == undefined) {
        matrix[nextPosition.x] = []
    }

    matrix[nextPosition.x][nextPosition.y] = nextValue

    console.log('Direction: ' + nextDirection.toString() + ' ' + nextValue)

    ++nextValue
    switch (nextDirection) {
        case Step.RIGHT:
            if (matrix[nextPosition.x][nextPosition.y - 1] == undefined) {
                return createSpiralMatrix(
                    matrix,
                    size,
                    Step.UP,
                    { x: actualPosition.x, y: actualPosition.y - 1 },
                    nextValue
                )
            } else {
                return createSpiralMatrix(
                    matrix,
                    size,
                    Step.RIGHT,
                    { x: actualPosition.x + 1, y: actualPosition.y },
                    nextValue
                )
            }
        case Step.DOWN:
            if (matrix[nextPosition.x + 1] == undefined || matrix[nextPosition.x + 1][nextPosition.y] == undefined) {
                return createSpiralMatrix(
                    matrix,
                    size,
                    Step.RIGHT,
                    { x: actualPosition.x + 1, y: actualPosition.y },
                    nextValue
                )
            } else {
                return createSpiralMatrix(
                    matrix,
                    size,
                    Step.DOWN,
                    { x: actualPosition.x, y: actualPosition.y + 1 },
                    nextValue
                )
            }

        case Step.LEFT:
            if (matrix[nextPosition.x][nextPosition.y + 1] == undefined) {
                return createSpiralMatrix(
                    matrix,
                    size,
                    Step.DOWN,
                    { x: actualPosition.x, y: actualPosition.y + 1 },
                    nextValue
                )
            } else {
                return createSpiralMatrix(
                    matrix,
                    size,
                    Step.LEFT,
                    { x: actualPosition.x - 1, y: actualPosition.y },
                    nextValue
                )
            }

        case Step.UP:
            if (matrix[nextPosition.x - 1] == undefined || matrix[nextPosition.x - 1][nextPosition.y] == undefined) {
                return createSpiralMatrix(
                    matrix,
                    size,
                    Step.LEFT,
                    { x: actualPosition.x - 1, y: actualPosition.y },
                    nextValue++
                )
            } else {
                return createSpiralMatrix(
                    matrix,
                    size,
                    Step.UP,
                    { x: actualPosition.x, y: actualPosition.y + 1 },
                    nextValue++
                )
            }
    }

    return matrix
}

export function printMatrix(matrix: Array<Array<number>>, size: number) {
    for (let x = 0; x <= size; x++) {
        for (let y = 0; y <= size; y++) {
            if (matrix[x] === undefined || matrix[x][y] === undefined) {
                process.stdout.write('.');
            } else {
                process.stdout.write('-' + matrix[x][y].toString()+ '-');
            }
        }

        process.stdout.write('\n');
    }
    process.stdout.write('\n\n');
}