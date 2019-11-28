/**
 * @flow
 */
import { useState, useEffect, useReducer } from "react";
import { CELL_TYPES, BOARD_STATE } from "types/exports";
import type { BoardType } from "types/typeExports";

type LiveList = Map<String, Position>;
type CellAliveFunc = Position => Boolean;
type Position = {
    row: number,
    col: number,
};

const DELIMETER = ",";

function flip(state: CELL_TYPES) {
    return state === CELL_TYPES.ALIVE ? CELL_TYPES.DEAD : CELL_TYPES.ALIVE;
}

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
    liveSet: Set,
    checkSet: Set
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
 * @param {*} getNeighborPositions
 */
function checkAllNeighbors(
    keyString: String,
    liveSet: Set,
    checkSet: Set,
    getNeighborPositions
): number {
    const { row, col } = convertToPosition(keyString);
    const { left, right, top, bottom } = getNeighborPositions(row, col);
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

function initializeSet(numRow, numCol) {
    const liveSet = new Set();
    for (let row = 0; row < numRow; row++) {
        for(let col = 0; col < numCol; col++) {
            if(Math.random() < 0.3) {
                const keyString = convertToKey(row, col);
                liveSet.add(keyString);
            }
        }
    } 
    return liveSet;
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

export function useUniverse(numRow: number, numCol: number) {
    const [liveSet, setLiveSet] = useState(initializeSet(numRow, numCol));
    const [universe, setUniverse] = useState(
        createUniverse(numRow, numCol, liveSet)
    );
    const [isPaused, setIsPaused] = useState(true);
    const [count, setCount] = useState(0);
    const [flipCell, setFlipCell] = useState((row, col) => {
        const keyString = convertToKey(row, col);
        if (isCellAlive(keyString, liveSet)) {
            liveSet.delete();
        } else {
            liveSet.add(keyString);
        }
        setLiveSet(liveSet);
    });

    const getNeighborPositions = (row: number, col: number) => {
        const left = col - 1 >= 0 ? col - 1 : numCol - 1;
        const right = col + 1 < col ? numCol + 1 : 0;
        const top = row - 1 >= 0 ? row - 1 : numRow - 1;
        const bottom = row + 1 < row ? numRow + 1 : 0;

        return { left, right, top, bottom };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPaused) return;

            const newLiveSet = new Set();
            const checkSet = new Set();

            liveSet.forEach(keyString => {
                const numAliveNeighbors = checkAllNeighbors(
                    keyString,
                    liveSet,
                    checkSet,
                    getNeighborPositions
                );
                if (numAliveNeighbors == 2 || numAliveNeighbors == 3) {
                    newLiveSet.add(keyString);
                }
            });

            checkSet.forEach(keyString => {
                const numAliveNeighbors = checkAllNeighbors(
                    keyString,
                    liveSet,
                    null,
                    getNeighborPositions
                );
                if (numAliveNeighbors == 3) {
                    newLiveSet.add(keyString);
                }
            });

            setUniverse(createUniverse(numRow, numCol, newLiveSet));
            setLiveSet(newLiveSet);
            setCount(count => count + 1);
            setFlipCell((row, col) => {
                const keyString = convertToKey(row, col);
                if (isCellAlive(keyString, newLiveSet)) {
                    newLiveSet.delete();
                } else {
                    newLiveSet.add(keyString);
                }
                setLiveSet(newLiveSet);
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isPaused, liveSet, numRow, numCol, getNeighborPositions]);

    console.log(flipCell);
    return {
        setIsPaused: setIsPaused,
        universe: universe,
        flipCell: flipCell,
        count: count,
    };
}
