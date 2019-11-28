/**
 * @flow
 */
import React from "react";

import useWindowDimensions from "hooks/useWindowDimensions.jsx";
import { useUniverse } from "hooks/useUniverse.jsx";
import { CELL_SIZE } from "types/exports";

import Card from "components/Card/Card.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Board from "./Board";

function GameOfLife(props) {
    const { width, height } = useWindowDimensions();
    const numRow = Math.floor(height / CELL_SIZE) - 1;
    const numCol = Math.floor(width / CELL_SIZE) - 1;

    const { setIsPaused, universe, flipCell, count } = useUniverse(
        numRow,
        numCol
    );

    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={() => setIsPaused(true)}>PAUSE</Button>
            <Button onClick={() => setIsPaused(false)}>START</Button>
            <Card>
                <Board universe={universe} flipCell={flipCell}></Board>
            </Card>
        </div>
    );
}

export default GameOfLife;
