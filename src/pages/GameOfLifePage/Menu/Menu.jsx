import React, { useState } from "react";

import { ACTIONS as OPTION_ACTIONS } from "hooks/useOptions";

import { Fab, SwipeableDrawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import BoardCustomization from "./BoardCustomization";
import UniverseControls from "./UniverseControls";

type Props = {
    className: String,
    classes: String,
    generation: number,
    optionsState: Object,
    optionsDispatch: Object,
    universeDispatch: Object,
};

function Menu(props: Props) {
    const {
        className,
        classes,
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
                <h3 align="center">Generation: {generation}</h3>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={6}>
                        <UniverseControls
                            classes={classes}
                            optionsState={optionsState}
                            optionsDispatch={optionsDispatch}
                            universeDispatch={universeDispatch}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                        <BoardCustomization
                            classes={classes}
                            optionsState={optionsState}
                            optionsDispatch={optionsDispatch}
                        />
                    </GridItem>
                </GridContainer>
            </SwipeableDrawer>
        </>
    );
}

export default Menu;
