import { number } from "prop-types";

type Geo = { x: number, y: number, z?: number }

export function manhattanDistance(point1: Geo, point2: Geo): number {
    return Math.abs(point1.x - point2.x) + Math.abs(point1.y - point2.y) + Math.abs(point1.z - point2.z)
}

export enum Step {
    UP,
    DOWN,
    RIGHT,
    LEFT,
    CENTER
}

export function createSpiralMatrix(
    matrix: Array<Array<number>>,
    size: number,
    nextDirection: Step,
    nextPosition: Geo,
    nextValue: number
): Array<Array<number>> {

    // exit condition
    if (nextValue > size) {
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
        case Step.CENTER:
            return createSpiralMatrix(
                matrix,
                size,
                Step.RIGHT,
                { x: actualPosition.x + 1, y: actualPosition.y },
                nextValue
            )
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
                    { x: actualPosition.x, y: actualPosition.y - 1 },
                    nextValue++
                )
            }
    }

    return matrix
}

export function printMatrix(matrix: Array<Array<number>>, size: number, showPosition: boolean = false) {
    for (let y = 0; y <= size; y++) {
        for (let x = 0; x <= size; x++) {
            if (matrix[x] === undefined || matrix[x][y] === undefined) {
                // process.stdout.write(' ');
            } else {
                if (showPosition)
                    process.stdout.write('.' + matrix[x][y].toString() + '[' + x + ',' + y + '].');
                else
                    process.stdout.write('.' + matrix[x][y].toString() + '.');
            }
        }

        process.stdout.write('\n');
    }
    process.stdout.write('\n\n');
}

export function indexOf2d(arr: Array<Array<number>>, val: number) {
    var index = [-1, -1];

    if (!Array.isArray(arr)) {
        return index;
    }

    arr.some(function (sub, posX) {
        if (!Array.isArray(sub)) {
            return false;
        }

        var posY = sub.indexOf(val);

        if (posY !== -1) {
            index[0] = posX;
            index[1] = posY;
            return true;
        }

        return false;
    });

    return index;
}