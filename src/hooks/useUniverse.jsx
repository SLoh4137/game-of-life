/**
 * @flow
 */
import { useState, useEffect, useReducer } from "react";
import { CELL_TYPES } from "types/exports";

type LiveSet = Set<String>;
type Position = {
    row: number,
    col: number,
};

const DELIMETER = ",";

function convertToKey(row: number, col: number): String {
    return row + DELIMETER + col;
}

function convertToPosition(key: String): Position {
    const arr = key.split(DELIMETER);
    return { row: parseInt(arr[0]), col: parseInt(arr[1]) };
}

function isCellAlive(keyString: string, liveSet: Set<String>): Boolean {
    return liveSet.has(keyString);
}

function getNeighborPositions(
    row: number,
    col: number,
    numRow: number,
    numCol: number
) {
    const left = col - 1 >= 0 ? col - 1 : numCol - 1;
    const right = col + 1 < numCol ? col + 1 : 0;
    const top = row - 1 >= 0 ? row - 1 : numRow - 1;
    const bottom = row + 1 < numRow ? row + 1 : 0;

    return { left, right, top, bottom };
}

/**
 * Checks to see if the passed in neighbor is alive
 * If so, returns numAliveNeighbors + 1
 *
 * Has side effect of adding the cell to the checkSet if it isn't alive
 * @param {String} neighborString
 * @param {number} numAliveNeighbors
 * @param {Set<String>} liveSet
 * @param {Set<String>} checkSet
 */
function checkNeighbor(
    neighborString: String,
    numAliveNeighbors: number,
    liveSet: LiveSet,
    checkSet: LiveSet
): number {
    if (isCellAlive(neighborString, liveSet)) {
        return numAliveNeighbors + 1;
    } else {
        if (checkSet !== null) checkSet.add(neighborString);
        return numAliveNeighbors;
    }
}

/**
 *
 * @param {*} keyString
 * @param {*} liveSet
 * @param {*} checkSet
 * @param {*} numRow
 * @param {*} numCol
 */
function checkAllNeighbors(
    keyString: String,
    liveSet: LiveSet,
    checkSet: LiveSet,
    numRow: number,
    numCol: number
): number {
    const { row, col } = convertToPosition(keyString);
    const { left, right, top, bottom } = getNeighborPositions(
        row,
        col,
        numRow,
        numCol
    );
    // left, right correspond to col
    // top, bottom correspond to row

    let numAliveNeighbors = 0;

    // Top Left
    const topLeftString = convertToKey(top, left);
    numAliveNeighbors = checkNeighbor(
        topLeftString,
        numAliveNeighbors,
        liveSet,
        checkSet
    );

    // Top
    const topString = convertToKey(top, col);
    numAliveNeighbors = checkNeighbor(
        topString,
        numAliveNeighbors,
        liveSet,
        checkSet
    );

    // Top Right
    const topRightString = convertToKey(top, right);
    numAliveNeighbors = checkNeighbor(
        topRightString,
        numAliveNeighbors,
        liveSet,
        checkSet
    );

    // Right
    const rightString = convertToKey(row, right);
    numAliveNeighbors = checkNeighbor(
        rightString,
        numAliveNeighbors,
        liveSet,
        checkSet
    );

    // Bottom Right
    const bottomRightString = convertToKey(bottom, right);
    numAliveNeighbors = checkNeighbor(
        bottomRightString,
        numAliveNeighbors,
        liveSet,
        checkSet
    );

    // Bottom
    const bottomString = convertToKey(bottom, col);
    numAliveNeighbors = checkNeighbor(
        bottomString,
        numAliveNeighbors,
        liveSet,
        checkSet
    );

    // Bottom Left
    const bottomLeftString = convertToKey(bottom, left);
    numAliveNeighbors = checkNeighbor(
        bottomLeftString,
        numAliveNeighbors,
        liveSet,
        checkSet
    );

    // Left
    const leftString = convertToKey(row, left);
    numAliveNeighbors = checkNeighbor(
        leftString,
        numAliveNeighbors,
        liveSet,
        checkSet
    );

    return numAliveNeighbors;
}

function createUniverse(numRow, numCol, liveSet) {
    const newUniverse = [];
    for (let row = 0; row < numRow; row++) {
        const universeRow = [];
        for (let col = 0; col < numCol; col++) {
            const keyString = convertToKey(row, col);
            if (isCellAlive(keyString, liveSet)) {
                universeRow.push(CELL_TYPES.ALIVE);
            } else {
                universeRow.push(CELL_TYPES.DEAD);
            }
        }
        newUniverse.push(universeRow);
    }
    return newUniverse;
}

function initSet(numRow, numCol, spawnRate) {
    const liveSet = new Set();
    for (let row = 0; row < numRow; row++) {
        for (let col = 0; col < numCol; col++) {
            if (Math.random() < spawnRate) {
                const keyString = convertToKey(row, col);
                liveSet.add(keyString);
            }
        }
    }
    return liveSet;
}

function initialize({ numRow, numCol, spawnRate }) {
    const liveSet = initSet(numRow, numCol, spawnRate);
    const universe = createUniverse(numRow, numCol, liveSet);
    return {
        liveSet: liveSet,
        universe: universe,
        numRow: numRow,
        numCol: numCol,
        spawnRate: spawnRate,
    };
}

export const ACTIONS = {
    LIVE_SET: 0,
    FLIP: 1,
    RESET: 2,
    CLEAR: 3,
};

function reducer(state, action) {
    let { liveSet, universe, numRow, numCol, spawnRate } = state;

    switch (action.type) {
        case ACTIONS.LIVE_SET:
            liveSet = action.liveSet;
            universe = createUniverse(numRow, numCol, liveSet);
            break;
        case ACTIONS.FLIP:
            const { row, col } = action;
            const keyString = convertToKey(row, col);
            if (isCellAlive(keyString, state.liveSet)) {
                liveSet.delete();
                universe[row][col] = CELL_TYPES.DEAD;
            } else {
                liveSet.add(keyString);
                universe[row][col] = CELL_TYPES.ALIVE;
            }

            break;
        case ACTIONS.RESET:
            if (action.numRow !== undefined) numRow = action.numRow;
            if (action.numCol !== undefined) numCol = action.numCol;
            if (action.spawnRate !== undefined) spawnRate = action.spawnRate;
            return initialize({ numRow, numCol, spawnRate });
        case ACTIONS.CLEAR:
            liveSet = new Set();
            universe = createUniverse(numRow, numCol, liveSet);
            break;
        default:
            throw new Error("Invalid action provided");
    }

    return {
        liveSet: liveSet,
        universe: universe,
        numRow: numRow,
        numCol: numCol,
        spawnRate: spawnRate,
    };
}

export function useUniverse(
    numRow: number,
    numCol: number,
    spawnRate: number,
    isPaused: Boolean
) {
    const [state, dispatch] = useReducer(
        reducer,
        { numRow, numCol, spawnRate },
        initialize
    );
    const [generation, setGeneration] = useState(0);

    useEffect(() => {
        // Reset the board when parameters change
        dispatch({
            type: ACTIONS.RESET,
            numRow: numRow,
            numCol: numCol,
            spawnRate: spawnRate,
        });
        setGeneration(0);
    }, [numRow, numCol, spawnRate]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPaused) return;

            const newLiveSet = new Set();
            const checkSet = new Set();

            state.liveSet.forEach(keyString => {
                const numAliveNeighbors = checkAllNeighbors(
                    keyString,
                    state.liveSet,
                    checkSet,
                    numRow,
                    numCol
                );
                if (numAliveNeighbors === 2 || numAliveNeighbors === 3) {
                    newLiveSet.add(keyString);
                }
            });

            checkSet.forEach(keyString => {
                const numAliveNeighbors = checkAllNeighbors(
                    keyString,
                    state.liveSet,
                    null,
                    numRow,
                    numCol
                );
                if (numAliveNeighbors === 3) {
                    newLiveSet.add(keyString);
                }
            });

            dispatch({ type: ACTIONS.LIVE_SET, liveSet: newLiveSet });
            setGeneration(generation => generation + 1);
        }, 500);

        return () => clearInterval(interval);
    }, [isPaused, state.liveSet, numRow, numCol]);

    return {
        generation: generation,
        universeState: state,
        universeDispatch: dispatch,
    };
}
