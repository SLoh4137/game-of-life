/**
 * @flow
 */
import React from "react";

import { makeStyles } from "@material-ui/styles";

import useDimensions from "hooks/useDimensions.jsx";
import { useOptions, ACTIONS as OPTION_ACTIONS } from "hooks/useOptions.jsx";
import {
    useUniverse,
    ACTIONS as UNIVERSE_ACTIONS,
} from "hooks/useUniverse.jsx";

import Menu from "./Menu/Menu";
import Board from "./Board";
import PlayPauseButton from "./PlayPauseButton";


const useStyles = makeStyles({
    root: {
        overflow: "hidden",
    },
    centered: {
        marginLeft: 'auto',
        marginRight: 'auto',
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

export default function GameOfLife(props) {
    const { optionsState, optionsDispatch } = useOptions();
    const { numRow, numCol } = useDimensions(
        optionsState.cellSize,
        optionsState.cellSpacing,
        false,
    );

    const { universeState, universeDispatch, generation } = useUniverse(
        numRow,
        numCol,
        optionsState.initialSpawnRate,
        optionsState.isPaused
    );

    const classes = useStyles(optionsState);

    return (
        <div className={classes.root}>
            <PlayPauseButton
                className={classes.playPauseButton}
                isPaused={optionsState.isPaused}
                dispatch={optionsDispatch}
            />
            <Menu
                className={classes.menu}
                classes={classes}
                generation={generation}
                optionsState={optionsState}
                optionsDispatch={optionsDispatch}
                universeDispatch={universeDispatch}
            />
            <Board
                classes={classes}
                universe={universeState.universe}
                universeDispatch={universeDispatch}
            />
        </div>
    );
}
