/**
 * @flow
 */
import React from "react";

import useWindowDimensions from "hooks/useWindowDimensions.jsx";
import { useUpdateBoard, BOARD_ACTIONS } from "hooks/useUpdateBoard.jsx";
import { CELL_SIZE } from "types/exports";

import Button from "components/CustomButtons/Button.jsx";
import Board from "./Board";

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
