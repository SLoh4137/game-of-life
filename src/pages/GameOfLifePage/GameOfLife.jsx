/**
 * @flow
 */
import React from "react";

import useWindowDimensions from "hooks/useWindowDimensions.jsx";
import { useUniverse } from "hooks/useUniverse.jsx";
import { CELL_SIZE } from "types/exports";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Board from "./Board";

function GameOfLife(props) {
    const { width, height } = useWindowDimensions();
    const numRow = Math.floor(height / CELL_SIZE) - 2;
    const numCol = Math.floor(width / CELL_SIZE);

    const { setIsPaused, universe, flipCell, count } = useUniverse(
        numRow,
        numCol
    );

    return (
        <GridContainer direction="column" justify="center" alignItems="center">
            <h1 align="center">{count}</h1>
            <GridContainer justify="center" alignItems="center">
                <Button onClick={() => setIsPaused(true)}>PAUSE</Button>
                <Button onClick={() => setIsPaused(false)}>START</Button>
            </GridContainer>
            
            <Board universe={universe} flipCell={flipCell}></Board>
        </GridContainer>
    );
}

export default GameOfLife;
