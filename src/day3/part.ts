import { createSpiralMatrix, Step, printMatrix } from "../utils/utils";

let size = 25
let matrix = createSpiralMatrix([], size, Step.RIGHT, { x: 0, y: 0 }, 1)
printMatrix(matrix, size * 2)