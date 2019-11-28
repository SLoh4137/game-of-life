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
    flipCell: FlipCellFunc,
};

function Board(props: PropType) {
    const { universe, flipCell } = props;
    const displayBoard = [];
    let rowNum = 0;

    for (rowNum = 0; rowNum < universe.length; rowNum += 1) {
        displayBoard.push(
            <CellRow
                row={universe[rowNum]}
                rowNum={rowNum}
                flipCell={flipCell}
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
