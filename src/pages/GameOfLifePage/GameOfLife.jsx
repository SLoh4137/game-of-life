/**
 * @flow
 */
import React, { useState } from "react";

import { makeStyles, ThemeProvider } from "@material-ui/styles";

import useDimensions from "hooks/useDimensions.jsx";
import { useUniverse } from "hooks/useUniverse.jsx";

import Button from "components/CustomButtons/Button.jsx";
import Menu from "./Menu";
import Board from "./Board";
import PlayPauseButton from "./PlayPauseButton";

const useStyles = makeStyles({
    root: {
        overflow: "hidden",
    },
    playPauseButton: {
        position: "absolute",
        top: 10,
        left: 10,
        opacity: 0.9,
    },
});

function GameOfLife(props) {
    const [isPaused, setIsPaused] = useState(false);
    const [cellSize, setCellSize] = useState(50);
    const classes = useStyles({ cellSize: cellSize });
    const { numRow, numCol } = useDimensions(50, 0, false);

    const {universeState, universeDispatch, generation } = useUniverse(
        numRow,
        numCol,
        0.3,
        isPaused,
    );

    const theme = {
        cellSize: cellSize,
        aliveColor: "black",
        deadColor: "white",
    };

    return (
        <div className={classes.root}>
            <Menu>
                <h3 align="center">Generation: {generation}</h3>
                <PlayPauseButton
                    isPaused={isPaused}
                    setIsPaused={setIsPaused}
                />
            </Menu>
            <ThemeProvider theme={theme}>
                <Board
                    classes={classes}
                    universe={universeState.universe}
                    universeDispatch={universeDispatch}
                />
            </ThemeProvider>

            <PlayPauseButton
                className={classes.playPauseButton}
                isPaused={isPaused}
                setIsPaused={setIsPaused}
            />
        </div>
    );
}

export default GameOfLife;
