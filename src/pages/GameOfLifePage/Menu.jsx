import React, { useState } from "react";

import { ACTIONS } from "./GameOfLife";

import { Button, SwipeableDrawer, Grid } from "@material-ui/core";
import PlayPauseButton from "./PlayPauseButton";
import ChooseColorInput from "./ChooseColorInput";

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
            <Button
                color="primary"
                className={className}
                onClick={toggleDrawer(true)}
            >
                Open Menu
            </Button>
            <SwipeableDrawer
                anchor="bottom"
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
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
                </Grid>
            </SwipeableDrawer>
        </>
    );
}

export default Menu;
