/**
 * @flow
 */
import React, { useState, useReducer } from "react";

import useWindowDimensions from "hooks/useWindowDimensions.jsx";
import { useUpdateBoard, BOARD_ACTIONS } from "hooks/useUpdateBoard.jsx";
import { CELL_SIZE, CELL_TYPES, BOARD_STATE } from "types/exports";
import type { BoardType } from "types/typeExports";

import Button from "components/CustomButtons/Button.jsx";
import Board from "./Board";

type PropType = {};

type State = {
    evenBoard: BoardType,
    oddBoard: BoardType,
};

function update(
    curState: BoardType,
    nextState: BoardType,
    cellsToUpdate: Array<[number, number]>
) {}

function reducer(state, action) {
    const { row, col, status, boardState } = action;
    if (boardState === BOARD_STATE.ODD) {
        const { oddBoard } = state;
        oddBoard[row][col] = status;
        return { oddBoard: oddBoard };
    } else {
        const { evenBoard } = state;
        evenBoard[row][col] = status;
        return { evenBoard: evenBoard };
    }
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

function GameOfLife(props) {
    const { width, height } = useWindowDimensions();
    const numRow = Math.floor(height / CELL_SIZE) - 1;
    const numCol = Math.floor(width / CELL_SIZE) - 1;

    const { count, updateBoardState, updateBoardDispatch } = useUpdateBoard(
        numRow,
        numCol
    );

    return (
        <div>
            <h1>{count}</h1>
            <Button
                onClick={() => {
                    updateBoardDispatch({
                        type: BOARD_ACTIONS.ADD_CELL,
                        cell: { row: 1, col: 2 },
                    });
                }}
            >
                ADD
            </Button>
            <Button
                onClick={() => {
                    updateBoardDispatch({ type: BOARD_ACTIONS.PAUSE });
                }}
            >
                PAUSE
            </Button>
            <Button
                onClick={() => {
                    updateBoardDispatch({ type: BOARD_ACTIONS.PLAY });
                }}
            >
                START
            </Button>
            <Board
                board={updateBoardState.board}
                dispatch={updateBoardDispatch}
            ></Board>
        </div>
    );
}

export default GameOfLife;
