/**
 * @flow
 */
import React from "react";

import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import { TextField } from "@material-ui/core";

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
        <GridContainer justify="center" alignItems="center" alignContent="center">
            <GridItem xs={12} md={6}>
                <TextField
                    fullWidth
                    id="outlined-set-cell-size"
                    label="Cell Size"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
            </GridItem>
            <GridItem xs={12} md={6}>
                <TextField
                    fullWidth
                    id="outlined-set-cell-spacing"
                    label="Cell Spacing"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
            </GridItem>

            <Button
                onClick={() => {
                    universeDispatch({
                        type: UNIVERSE_ACTIONS.RESET,
                        initialSpawnRate: optionsState.initialSpawnRate,
                    });
                }}
            >
                RESET
            </Button>
            <Button
                onClick={() => {
                    universeDispatch({
                        type: UNIVERSE_ACTIONS.CLEAR,
                    });
                }}
            >
                CLEAR
            </Button>
        </GridContainer>
    );
}

export default UniverseControls;
