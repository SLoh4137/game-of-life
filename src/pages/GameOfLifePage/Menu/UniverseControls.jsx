/**
 * @flow
 */
import React from "react";

import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import PlayPauseButton from "../PlayPauseButton";

import { TextField, Paper } from "@material-ui/core";

import { ACTIONS as OPTION_ACTIONS } from "hooks/useOptions";
import { ACTIONS as UNIVERSE_ACTIONS } from "hooks/useUniverse";

type Props = {
    optionsState: Object,
    optionsDispatch: Object,
    universeState: Object,
    universeDispatch: Object,
};

function UniverseControls(props: Props) {
    const { optionsState, optionsDispatch, universeDispatch } = props;

    // Needed for gatsby build
    const { isPaused, cellSize, cellSpacing } = optionsState ? optionsState : {};

    return (
        <Paper>
            <GridContainer
                direction="column"
                justify="center"
                alignItems="center"
                alignContent="center"
            >
                <h4 align="center">Board Controls</h4>

                <PlayPauseButton
                    isPaused={isPaused}
                    dispatch={optionsDispatch}
                />

                <GridContainer justify="center" alignItems="center">
                    <GridItem xs={6} md={6}>
                        <TextField
                            fullWidth
                            id="outlined-set-cell-size"
                            label="Cell Size"
                            type="number"
                            defaultValue={cellSize}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                            onClick={event =>
                                optionsDispatch({
                                    type: OPTION_ACTIONS.SET_CELL_SIZE,
                                    cellSize: event.target.value,
                                })
                            }
                        />
                    </GridItem>
                    <GridItem xs={6} md={6}>
                        <TextField
                            fullWidth
                            id="outlined-set-cell-spacing"
                            label="Cell Spacing"
                            type="number"
                            defaultValue={cellSpacing}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                            onClick={event =>
                                optionsDispatch({
                                    type: OPTION_ACTIONS.SET_CELL_SPACING,
                                    cellSpacing: event.target.value,
                                })
                            }
                        />
                    </GridItem>
                </GridContainer>

                <GridContainer justify="center">
                    <GridItem xs={6}>
                        <Button
                            fullWidth
                            variant="filled"
                            onClick={() => {
                                universeDispatch({
                                    type: UNIVERSE_ACTIONS.RESET,
                                });
                            }}
                        >
                            NEW BOARD
                        </Button>
                    </GridItem>
                    <GridItem xs={6}>
                        <Button
                            fullWidth
                            variant="filled"
                            onClick={() => {
                                universeDispatch({
                                    type: UNIVERSE_ACTIONS.CLEAR,
                                });
                            }}
                        >
                            CLEAR
                        </Button>
                    </GridItem>
                </GridContainer>
            </GridContainer>
        </Paper>
    );
}

export default UniverseControls;
