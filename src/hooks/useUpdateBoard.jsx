/**
 * @flow
 */
import { useState, useEffect, useReducer } from "react";
import {
    CELL_SIZE,
    CELL_TYPES,
    BOARD_STATE,
} from "pages/GameOfLifePage/exports";
import type {
    BoardType,
    BoardActionsState,
} from "pages/GameOfLifePage/typeExports";

function initial() {
    // Idea is to populate the initial update list and then from then on use update to update
}

function flip(state: CELL_TYPES) {
    return state === CELL_TYPES.ALIVE ? CELL_TYPES.DEAD : CELL_TYPES.ALIVE;
}

function createBoard(numRow: number, numCol: number): Board {
    const board: BoardType = [];
    for (let i = 0; i < numRow; i++) {
        const row = [];
        for (let j = 0; j < numCol; j++) {
            row.push(CELL_TYPES.DEAD);
        }
        board.push(row);
    }
    return board;
}

function createDisplayBoard(board) {
    const displayBoard = [];
    const numRow = board.length;
    const numCol = board[0].length;
    for (let i = 0; i < numRow; i++) {
        const row = [];
        for (let j = 0; j < numCol; j++) {
            row.push(board[i][j]);
        }
        displayBoard.push(row);
    }
    return displayBoard;
}

export const BOARD_ACTIONS = {
    PAUSE: 0,
    PLAY: 1,
    CHANGE_CELL: 2,
    UPDATE_BOARD: 3,
};

function reducer(state: BoardActionsState, action) {
    const { isPaused, addList, board } = state;
    switch (action.type) {
        case BOARD_ACTIONS.PAUSE:
            return {
                isPaused: true,
                addList: addList,
                board: board,
            };
        case BOARD_ACTIONS.PLAY:
            return {
                isPaused: false,
                addList: addList,
                board: board,
            };
        case BOARD_ACTIONS.CHANGE_CELL:
            const [row, col] = action.cellLocation;
            addList.push([row, col]);
            board[row][col] = flip(board[row][col]);
            return {
                isPaused: isPaused,
                addList: addList,
                board: board,
            };
        /*case BOARD_ACTIONS.UPDATE_BOARD:
            return {
                isPaused: isPaused,
                addList: addList,
                board: action.board,
            };*/
        default:
            throw new Error("Invalid action type");
    }
}

export function useUpdateBoard(numRow: number, numCol: number) {
    const [evenBoard, setEvenBoard] = useState(createBoard(numRow, numCol));
    const [oddBoard, setOddBoard] = useState(createBoard(numRow, numCol));
    const [checkList, setCheckList] = useState([]);
    const [boardState, setBoardState] = useState(BOARD_STATE.EVEN);
    const [count, setCount] = useState(0);

    const [updateBoardState, updateBoardDispatch] = useReducer(reducer, {
        isPaused: true,
        addList: [],
        board: createDisplayBoard(evenBoard),
    });


    useEffect(() => {
        const interval = setInterval(() => {
            if (updateBoardState.isPaused) return;

            setCount(count => count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [updateBoardState.isPaused]);

    return { count, updateBoardState, updateBoardDispatch };
}
