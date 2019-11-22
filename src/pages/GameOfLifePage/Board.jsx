/**
 * @flow
 */
import React from "react";
import type { BoardType} from "./typeExports";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Cell from "./Cell";

type PropType = {
    board: BoardType
}

function Board(props) {
    const {board} = props;
    return (
        <GridContainer>
            {board.map((row: RowType) =>
                row.map((cell: CellType) => <Cell status={cell} />)
            )}
        </GridContainer>
    );
}

export default Board;
