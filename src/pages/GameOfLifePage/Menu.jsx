import React, { useState } from "react";

import { Button, SwipeableDrawer, Grid } from "@material-ui/core";

function Menu(props) {
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
                    {children}
                </Grid>
            </SwipeableDrawer>
        </>
    );
}

export default Menu;
