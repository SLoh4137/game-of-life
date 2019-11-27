/**
 * @flow
 */
import React, { useState, useMemo } from "react";
import type { BoardType, RowType, CellType } from "types/typeExports";
import { BOARD_ACTIONS } from "hooks/useUniverse";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Cell from "./Cell";

type PropType = {
    row: RowType,
    rowNum: number,
    dispatch: Object,
};

function CellRow(props: PropType) {
    const { row, rowNum, dispatch } = props;
    const displayRow = [];
    for (let colNum = 0; colNum < row.length; colNum++) {
        displayRow.push(
            <Cell
                key={[rowNum, colNum]}
                state={row[colNum]}
                onClick={() =>
                    dispatch({
                        type: BOARD_ACTIONS.CHANGE_CELL,
                        cellLocation: [rowNum, colNum],
                    })
                }
            />
        );
    }

    return <GridContainer wrap="nowrap">{displayRow}</GridContainer>;
}

export default CellRow;
