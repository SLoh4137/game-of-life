/**
 * @flow
 */
import React from "react";

import { makeStyles, withStyles } from "@material-ui/styles";

import useDimensions from "hooks/useDimensions.jsx";
import { useOptions } from "hooks/useOptions.jsx";
import { useUniverse } from "hooks/useUniverse.jsx";

import Menu from "./Menu/Menu";
import Board from "./Board";
import PlayPauseButton from "./PlayPauseButton";

const gameOfLifeStyles = {
    root: {
        overflow: "hidden",
    },
    playPauseButton: {
        position: "absolute",
        top: 10,
        left: 10,
        opacity: 0.9,
    },
    menu: {
        position: "absolute",
        top: 10,
        right: 10,
        opacity: 0.9,
    },
};

const useStyles = makeStyles({
    aliveCell: {
        width: props => props.cellSize,
        height: props => props.cellSize,
        margin: props => props.cellSpacing,
        borderStyle: "dotted",
        borderColor: "black",
        backgroundColor: props => props.aliveColor,
    },
    deadCell: {
        width: props => props.cellSize,
        height: props => props.cellSize,
        margin: props => props.cellSpacing,
        borderStyle: "dotted",
        borderColor: "black",
        backgroundColor: props => props.deadColor,
    },
});

function GameOfLife(props) {
    const { classes } = props;
    const { optionsState, optionsDispatch } = useOptions();
    const { numRow, numCol } = useDimensions(
        optionsState.cellSize,
        optionsState.cellSpacing,
        false
    );

    const { universeState, universeDispatch, generation } = useUniverse(
        numRow,
        numCol,
        optionsState.initialSpawnRate,
        optionsState.isPaused
    );

    const boardClasses = useStyles({
        cellSize: optionsState.cellSize,
        cellSpacing: optionsState.cellSpacing,
        aliveColor: optionsState.aliveColor,
        deadColor: optionsState.deadColor,
    });

    return (
        <div className={classes.root}>
            <PlayPauseButton
                className={classes.playPauseButton}
                isPaused={optionsState.isPaused}
                dispatch={optionsDispatch}
            />
            <Menu
                className={classes.menu}
                generation={generation}
                optionsState={optionsState}
                optionsDispatch={optionsDispatch}
                universeDispatch={universeDispatch}
            />
            <Board
                classes={boardClasses}
                universe={universeState.universe}
                universeDispatch={universeDispatch}
            />
        </div>
    );
}

export default withStyles(gameOfLifeStyles)(GameOfLife);
