/**
 * @flow
 */
import React from "react";

import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";

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
        <GridContainer justify="center">
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
