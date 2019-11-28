/**
 * @flow
 */
import React, { useMemo } from "react";
import type { UniverseType, FlipCellFunc } from "types/typeExports";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CellRow from "./CellRow";

type PropType = {
    universe: UniverseType,
    dispatch: Object,
};

function Board(props: PropType) {
    const { universe, dispatch } = props;
    const displayBoard = [];
    let rowNum = 0;

    for (rowNum = 0; rowNum < universe.length; rowNum += 1) {
        displayBoard.push(
            <CellRow
                row={universe[rowNum]}
                rowNum={rowNum}
                dispatch={dispatch}
            />
        );
    }

    return (
        <GridContainer direction="column" justify="center" alignItems="center">
            {displayBoard}
        </GridContainer>
    );
}

export default Board;
