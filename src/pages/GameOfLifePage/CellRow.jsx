/**
 * @flow
 */
import React, { useState, useMemo } from "react";
import type { RowType, CellType, FlipCellFunc } from "types/typeExports";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Cell from "./Cell";

type PropType = {
    row: RowType,
    rowNum: number,
    flipCell: FlipCellFunc,
};

function CellRow(props: PropType) {
    const { row, rowNum, flipCell } = props;
    const displayRow = [];
    for (let colNum = 0; colNum < row.length; colNum++) {
        displayRow.push(
            <Cell
                key={[rowNum, colNum]}
                state={row[colNum]}
                onClick={() => flipCell(rowNum, colNum)}
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
