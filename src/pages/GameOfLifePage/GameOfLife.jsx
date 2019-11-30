/**
 * @flow
 */
import React, { useReducer } from "react";

import { makeStyles } from "@material-ui/styles";

import { Grid } from "@material-ui/core";

import useDimensions from "hooks/useDimensions.jsx";
import { useUniverse } from "hooks/useUniverse.jsx";

import Menu from "./Menu";
import Board from "./Board";
import PlayPauseButton from "./PlayPauseButton";
import ChooseColorInput from "./ChooseColorInput";

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
    menu: {
        position: "absolute",
        top: 10,
        right: 10,
        opacity: 0.7,
    },
    aliveCell: {
        width: props => props.cellSize,
        height: props => props.cellSize,
        borderStyle: "dotted",
        borderColor: "black",
        backgroundColor: props => props.aliveColor,
    },
    deadCell: {
        width: props => props.cellSize,
        height: props => props.cellSize,
        borderStyle: "dotted",
        borderColor: "black",
        backgroundColor: props => props.deadColor,
    },
});

type State = {
    isPaused: boolean,
    cellSize: number,
    initialSpawnRate: number,
    aliveColor: String,
    deadColor: String,
};

export const ACTIONS = {
    PLAYPAUSE: 0,
    SET_CELL_SIZE: 1,
    SET_SPAWN_RATE: 2,
    RESET: 3,
    SET_ALIVE_COLOR: 4,
    SET_DEAD_COLOR: 5,
};

function reducer(state: State, action) {
    let { isPaused, cellSize, initialSpawnRate, aliveColor, deadColor } = state;
    switch (action.type) {
        case ACTIONS.PLAYPAUSE:
            isPaused = !isPaused;
            break;
        case ACTIONS.SET_CELL_SIZE:
            if (action.cellSize === undefined)
                throw new Error("Cell size not provided");
            cellSize = action.cellSize;
            break;
        case ACTIONS.SET_SPAWN_RATE:
            if (action.initialSpawnRate === undefined)
                throw new Error("Initial spawn rate not provided");
            initialSpawnRate = action.initialSpawnRate;
            break;
        case ACTIONS.RESET:
            return init();
        case ACTIONS.SET_ALIVE_COLOR:
            if (action.aliveColor === undefined)
                throw new Error("Alive color not provided");
            aliveColor = action.aliveColor;
            break;
        case ACTIONS.SET_DEAD_COLOR:
            if (action.deadColor === undefined)
                throw new Error("Dead color not provided");
            deadColor = action.deadColor;
            break;
        default:
            throw new Error("Invalid action type");
    }

    return {
        isPaused,
        cellSize,
        initialSpawnRate,
        aliveColor,
        deadColor,
    };
}

function init() {
    return {
        isPaused: false,
        cellSize: 50,
        initialSpawnRate: 0.3,
        aliveColor: "#000000",
        deadColor: "#ffffff",
    };
}

function GameOfLife(props) {
    const [optionsState, optionsDispatch] = useReducer(reducer, init());
    const { numRow, numCol } = useDimensions(50, 0, false);

    const { universeState, universeDispatch, generation } = useUniverse(
        numRow,
        numCol,
        optionsState.initialSpawnRate,
        optionsState.isPaused
    );

    const classes = useStyles(optionsState);

    return (
        <div className={classes.root}>
            <Menu className={classes.menu}>
                <h3>Generation: {generation}</h3>
                <PlayPauseButton
                    isPaused={optionsState.isPaused}
                    dispatch={optionsDispatch}
                />
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} lg={4}>
                        <ChooseColorInput
                            label="Alive Cells Color: "
                            option="aliveColor"
                            actionType={ACTIONS.SET_ALIVE_COLOR}
                            defaultValue={optionsState.aliveColor}
                            dispatch={optionsDispatch}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <ChooseColorInput
                            label="Dead Cells Color: "
                            option="deadColor"
                            actionType={ACTIONS.SET_DEAD_COLOR}
                            defaultValue={optionsState.deadColor}
                            dispatch={optionsDispatch}
                        />
                    </Grid>
                </Grid>
            </Menu>
            =
            <Board
                classes={classes}
                universe={universeState.universe}
                universeDispatch={universeDispatch}
            />
            =
            <PlayPauseButton
                className={classes.playPauseButton}
                isPaused={optionsState.isPaused}
                dispatch={optionsDispatch}
            />
        </div>
    );
}

//export default withStyles(gameOfLifeStyle)(GameOfLife);
export default GameOfLife;
