import React, { useState } from "react";

import { Fab, SwipeableDrawer, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

type Props = {
    className: String,
};

function Menu(props: Props) {
    const { className, children } = props;
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
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    {children}
                </Grid>
            </SwipeableDrawer>
        </>
    );
}

export default Menu;
