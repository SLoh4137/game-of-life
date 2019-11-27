/**
 * @flow
 */
import React, { useMemo } from "react";
import type { BoardType, RowType, CellType } from "types/typeExports";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CellRow from "./CellRow";

type PropType = {
    board: BoardType,
    dispatch: Object,
};

function Board(props: PropType) {
    const { board, dispatch } = props;
    const displayBoard = [];
    let rowNum = 0;

    for (rowNum = 0; rowNum < board.length; rowNum += 1) {
        displayBoard.push(
            <CellRow row={board[rowNum]} rowNum={rowNum} dispatch={dispatch} />
        );
    }

    return <GridContainer direction="column">{displayBoard}</GridContainer>;
}

export default Board;
