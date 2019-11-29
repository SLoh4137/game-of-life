/**
 * @flow
 */
import React from "react";
import type { RowType } from "types/typeExports";

import { ACTIONS } from "hooks/useUniverse.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import Cell from "./Cell";

type PropType = {
    row: RowType,
    rowNum: number,
    dispatch: Object,
};

function CellRow(props: PropType) {
    const { row, rowNum, dispatch } = props;
    const displayRow = [];
    const rowLength = row ? row.length : 0;
    for (let colNum = 0; colNum < rowLength; colNum++) {
        displayRow.push(
            <Cell
                key={[rowNum, colNum]}
                state={row[colNum]}
                onClick={() =>
                    dispatch({
                        type: ACTIONS.FLIP,
                        row: rowNum,
                        col: colNum,
                    })
                }
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
