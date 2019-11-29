/**
 * @flow
 */
import React from "react";

import useWindowDimensions from "hooks/useWindowDimensions.jsx";
import { useUniverse } from "hooks/useUniverse.jsx";
import { CELL_SIZE } from "types/exports";

import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Menu from "./Menu";
import Board from "./Board";

function GameOfLife(props) {
    const { width, height } = useWindowDimensions();
    const numRow = Math.floor(height / CELL_SIZE) - 2;
    const numCol = Math.floor(width / CELL_SIZE);

    const { isPaused, setIsPaused, state, dispatch, count } = useUniverse(
        numRow,
        numCol,
        0.3
    );

    return (
        <>
            <GridContainer
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Menu>
                    <h1 align="center">{count}</h1>
                    <Button onClick={() => setIsPaused(true)}>PAUSE</Button>
                    <Button onClick={() => setIsPaused(false)}>START</Button>
                </Menu>
                <Board universe={state.universe} dispatch={dispatch}></Board>
                <Fab onClick={() => setIsPaused(!isPaused)}>
                    {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
                </Fab>
            </GridContainer>
        </>
    );
}

export default GameOfLife;
