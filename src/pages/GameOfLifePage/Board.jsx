/**
 * @flow
 */
import React from "react";
import type { UniverseType } from "types/typeExports";

import GridContainer from "components/Grid/GridContainer.jsx";
import CellRow from "./CellRow";

type PropType = {
    universe: UniverseType,
    universeDispatch: Object,
};


function Board(props: PropType) {
    const { universe, universeDispatch } = props;
    const displayBoard = [];
    const universeLength = universe ? universe.length : 0;
    let rowNum = 0;

    for (rowNum = 0; rowNum < universeLength; rowNum += 1) {
        displayBoard.push(
            <CellRow
                key={rowNum}
                row={universe[rowNum]}
                rowNum={rowNum}
                universeDispatch={universeDispatch}
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
