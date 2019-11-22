/**
 * @flow
 */
import React, { useReducer } from "react";
import Board from "./Board";
import useWindowDimensions from "hooks/useWindowDimensions.jsx";
import { CELL_SIZE, CELL_TYPES, BOARD_STATE } from "./exports";
import type { BoardType } from "./typeExports";
type PropType = {};

type State = {
    evenBoard: BoardType,
    oddBoard: BoardType,
};

function update(
    curState: BoardType,
    nextState: BoardType,
    cellsToUpdate: Array<number, number>
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

function GameOfLifePage(props: PropType) {
    const { width, height } = useWindowDimensions();
    const numRow = Math.floor(width / CELL_SIZE);
    const numCol = Math.floor(height / CELL_SIZE);

    const [state: State, dispatch] = useReducer(reducer, {
        oddBoard: createBoard(numRow, numCol),
        evenBoard: createBoard(numRow, numCol),
        boardState: BOARD_STATE.EVEN,
    });

    const currentBoard: Board =
        state.boardState === BOARD_STATE.EVEN
            ? state.evenBoard
            : state.oddBoard;

    console.log(numRow);
    console.log(numCol);

    return (
        <div>
            {/* <h1 align="center">Welcome</h1> */}
            <Board board={currentBoard}></Board>
        </div>
    );
}

export default GameOfLifePage;
