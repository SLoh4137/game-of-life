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

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import Menu from "./Menu/Menu";
import Board from "./Board";
import PlayPauseButton from "./PlayPauseButton";
import ChooseColorInput from "./Menu/ChooseColorInput";
import UniverseControls from "./Menu/UniverseControls";

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

export default function GameOfLife(props) {
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
                <GridContainer
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                >
                    <GridItem xs={6}>
                        <ChooseColorInput
                            label="Alive Color"
                            option="aliveColor"
                            actionType={OPTION_ACTIONS.SET_ALIVE_COLOR}
                            defaultValue={optionsState.aliveColor}
                            dispatch={optionsDispatch}
                        />
                    </GridItem>

                    <GridItem xs={6}>
                        <ChooseColorInput
                            label="Dead Color"
                            option="deadColor"
                            actionType={OPTION_ACTIONS.SET_DEAD_COLOR}
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
