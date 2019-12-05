/**
 * @flow
 */

import React from "react";

import { ACTIONS as OPTION_ACTIONS } from "hooks/useOptions";

import { Paper } from "@material-ui/core";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import ChooseColorInput from "./ChooseColorInput";

type Props = {
    classes: Object,
    optionsState: Object,
    optionsDispatch: Object,
};

export default function BoardCustomization(props: Props) {
    const { classes, optionsState, optionsDispatch } = props;
    return (
        <Paper>
            <h4 align="center">Board Customization</h4>
            <GridContainer justify="center">
                <GridItem xs={6} zeroMinWidth container justify="center">
                    <ChooseColorInput
                        label="Alive Color"
                        option="aliveColor"
                        actionType={OPTION_ACTIONS.SET_ALIVE_COLOR}
                        defaultValue={optionsState.aliveColor}
                        dispatch={optionsDispatch}
                    />
                </GridItem>

                <GridItem xs={6} zeroMinWidth container justify="center">
                    <ChooseColorInput
                        label="Dead Color"
                        option="deadColor"
                        actionType={OPTION_ACTIONS.SET_DEAD_COLOR}
                        defaultValue={optionsState.deadColor}
                        dispatch={optionsDispatch}
                    />
                </GridItem>
            </GridContainer>
        </Paper>
    );
}
