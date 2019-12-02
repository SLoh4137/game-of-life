/**
 * @flow
 */
import React, { useReducer } from "react";

import { makeStyles } from "@material-ui/styles";

import useDimensions from "hooks/useDimensions.jsx";
import {
    useUniverse,
    ACTIONS as UNIVERSE_ACTIONS,
} from "hooks/useUniverse.jsx";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import Menu from "./Menu";
import Board from "./Board";
import PlayPauseButton from "./PlayPauseButton";
import ChooseColorInput from "./ChooseColorInput";
import UniverseControls from "./UniverseControls";

const useStyles = makeStyles({
    root: {
        overflow: "hidden",
    },
    gridGrow: {
        flexGrow: 1,
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
    SET_CELL_SPACING: 2,
    SET_SPAWN_RATE: 3,
    RESET: 4,
    SET_ALIVE_COLOR: 5,
    SET_DEAD_COLOR: 6,
    SET_CELL_SPACING: 7,
};

function reducer(state: State, action) {
    let {
        isPaused,
        cellSize,
        cellSpacing,
        initialSpawnRate,
        aliveColor,
        deadColor,
    } = state;
    switch (action.type) {
        case ACTIONS.PLAYPAUSE:
            isPaused = !isPaused;
            break;
        case ACTIONS.SET_CELL_SIZE:
            if (action.cellSize === undefined)
                throw new Error("Cell size not provided");
            cellSize = action.cellSize;
            break;
        case ACTIONS.SET_CELL_SPACING:
            if (action.cellSpacing === undefined)
                throw new Error("Cell spacing not provided");
            cellSpacing = action.cellSpacing;
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
        cellSpacing,
        initialSpawnRate,
        aliveColor,
        deadColor,
    };
}

function init() {
    return {
        isPaused: false,
        cellSize: 50,
        cellSpacing: 0,
        initialSpawnRate: 0.3,
        aliveColor: "#000000",
        deadColor: "#ffffff",
    };
}

function GameOfLife(props) {
    const [optionsState, optionsDispatch] = useReducer(reducer, init());
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

    const classes = useStyles(optionsState);

    return (
        <div className={classes.root}>
            <PlayPauseButton
                className={classes.playPauseButton}
                isPaused={optionsState.isPaused}
                dispatch={optionsDispatch}
            />
            <Menu className={classes.menu}>
                <h3>Generation: {generation}</h3>
                <PlayPauseButton
                    isPaused={optionsState.isPaused}
                    dispatch={optionsDispatch}
                />
                <UniverseControls
                    optionsState={optionsState}
                    optionsDispatch={optionsDispatch}
                    universeDispatch={universeDispatch}
                />
                <h4>Board Customization</h4>
                <GridContainer justify="center" alignContent="center" alignItems="center">
                    <GridItem xs={6}>
                        <ChooseColorInput
                            label="Alive Color"
                            option="aliveColor"
                            actionType={ACTIONS.SET_ALIVE_COLOR}
                            defaultValue={optionsState.aliveColor}
                            dispatch={optionsDispatch}
                        />
                    </GridItem>

                    <GridItem xs={6}>
                        <ChooseColorInput
                            label="Dead Color"
                            option="deadColor"
                            actionType={ACTIONS.SET_DEAD_COLOR}
                            defaultValue={optionsState.deadColor}
                            dispatch={optionsDispatch}
                        />
                    </GridItem>
                </GridContainer>
            </Menu>
            <Board
                classes={classes}
                universe={universeState.universe}
                universeDispatch={universeDispatch}
            />
        </div>
    );
}

export default GameOfLife;
