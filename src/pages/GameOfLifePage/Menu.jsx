import React, { useState } from "react";

import { Button, SwipeableDrawer } from "@material-ui/core";

const menuStyle = {
    position: "absolute",
    top: 10,
    right: 10,
    opacity: 0.7,
};

function Menu(props) {
    const { children } = props;
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
                style={menuStyle}
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
                {children}
            </SwipeableDrawer>
        </>
    );
}

export default Menu;
