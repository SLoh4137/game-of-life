/**
 * @flow
 */
import React, { useMemo } from "react";
import type { BoardType, RowType, CellType } from "./typeExports";

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

    for (let rowNum = 0; rowNum < board.length; rowNum++) {
        displayBoard.push(
            <CellRow row={board[rowNum]} rowNum={rowNum} dispatch={dispatch} />
        );
    }

    return <GridContainer direction="column">{displayBoard}</GridContainer>;
}

export default Board;
