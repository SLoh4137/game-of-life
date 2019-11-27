import type { CellType } from "./typeExports.js";

export const CELL_SIZE = 100;

export const CELL_TYPES: { DEAD: CellType, ALIVE: CellType } = {
    DEAD: false,
    ALIVE: true,
};

export const BOARD_STATE = {
    ODD: 0,
    EVEN: 1,
}

