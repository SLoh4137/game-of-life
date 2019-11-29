/**
 * @flow
 */
import React from "react";

import useDimensions from "hooks/useDimensions.jsx";
import { useUniverse } from "hooks/useUniverse.jsx";

import Fab from "@material-ui/core/Fab";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Menu from "./Menu";
import Board from "./Board";

function GameOfLife(props) {
    const { numRow, numCol } = useDimensions(50, 0, false);
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
                <GridContainer justify="center">
                    <Menu>
                        <h1 align="center">{count}</h1>
                        <Button onClick={() => setIsPaused(true)}>PAUSE</Button>
                        <Button onClick={() => setIsPaused(false)}>
                            START
                        </Button>
                    </Menu>
                    <Fab size="small" onClick={() => setIsPaused(!isPaused)}>
                        {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
                    </Fab>
                </GridContainer>

                <Board universe={state.universe} dispatch={dispatch}></Board>
            </GridContainer>
        </>
    );
}

export default GameOfLife;
