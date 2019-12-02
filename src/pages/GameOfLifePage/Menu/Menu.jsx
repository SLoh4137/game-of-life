import React, { useState } from "react";

import { ACTIONS as OPTION_ACTIONS } from "hooks/useOptions";

import { Fab, SwipeableDrawer, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import PlayPauseButton from "../PlayPauseButton";
import ChooseColorInput from "./ChooseColorInput";
import UniverseControls from "./UniverseControls";

type Props = {
    className: String,
    generation: number,
    optionsState: Object,
    optionsDispatch: Object,
    universeDispatch: Object,
};

function Menu(props: Props) {
    const {
        className,
        generation,
        optionsState,
        optionsDispatch,
        universeDispatch,
    } = props;
    const [isOpen, setOpen] = useState(false);

    const toggleDrawer = open => event => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpen(open);
    };

    return (
        <>
            <Fab
                className={className}
                size="small"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </Fab>
            <SwipeableDrawer
                anchor="bottom"
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <GridContainer
                    direction="column"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                >


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



                </GridContainer>
            </SwipeableDrawer>
        </>
    );
}

export default Menu;
