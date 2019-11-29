/**
 * @flow
 */
import React from "react";

import { withStyles } from "@material-ui/core/styles/";

import useDimensions from "hooks/useDimensions.jsx";
import { useUniverse } from "hooks/useUniverse.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Menu from "./Menu";
import Board from "./Board";
import PlayPauseButton from "./PlayPauseButton";

const styles = {
    root: {
        overflow: "hidden",
    },
    playPauseButton: {
        position: "absolute",
        top: 10,
        left: 10,
        opacity: 0.9,
    },
};

function GameOfLife(props) {
    const { classes } = props;
    const { numRow, numCol } = useDimensions(50, 0, false);
    const { isPaused, setIsPaused, state, dispatch, count } = useUniverse(
        numRow,
        numCol,
        0.3
    );

    return (
        <div className={classes.root}>
            <Menu>
                <h1 align="center">{count}</h1>
                <PlayPauseButton
                    isPaused={isPaused}
                    setIsPaused={setIsPaused}
                />
            </Menu>

            <Board universe={state.universe} dispatch={dispatch} />

            <PlayPauseButton
                className={classes.playPauseButton}
                isPaused={isPaused}
                setIsPaused={setIsPaused}
            />
        </div>
    );
}

export default withStyles(styles)(GameOfLife);
