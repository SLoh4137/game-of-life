/**
 * @flow
 */
import React from "react";

import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import { TextField } from "@material-ui/core";

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

    return (
        <GridContainer
            justify="center"
            alignItems="center"
            alignContent="center"
        >
            <GridItem xs={12} md={6}>
                <TextField
                    fullWidth
                    id="outlined-set-cell-size"
                    label="Cell Size"
                    type="number"
                    defaultValue={optionsState.cellSize}
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
            <GridItem xs={12} md={6}>
                <TextField
                    fullWidth
                    id="outlined-set-cell-spacing"
                    label="Cell Spacing"
                    type="number"
                    defaultValue={optionsState.cellSpacing}
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

            <GridContainer justify="center">
                <GridItem xs={6}>
                    <Button
                        fullWidth
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
    );
}

export default UniverseControls;
