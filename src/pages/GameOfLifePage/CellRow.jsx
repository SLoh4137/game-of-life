/**
 * @flow
 */
import React from "react";
import type { RowType } from "types/typeExports";

import GridContainer from "components/Grid/GridContainer.jsx";
import Cell from "./Cell";

type PropType = {
    row: RowType,
    rowNum: number,
    universeDispatch: Object,
};

function CellRow(props: PropType) {
    const { classes, row, rowNum, universeDispatch } = props;
    const displayRow = [];
    const rowLength = row ? row.length : 0;
    for (let colNum = 0; colNum < rowLength; colNum++) {
        displayRow.push(
            <Cell
                classes={classes}
                key={[rowNum, colNum]}
                row={rowNum}
                col={colNum}
                state={row[colNum]}
                universeDispatch={universeDispatch}
            />
        );
    }

    return (
        <GridContainer wrap="nowrap" justify="center" alignItems="center">
            {displayRow}
        </GridContainer>
    );
}

export default CellRow;
