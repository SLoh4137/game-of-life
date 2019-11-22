/**
 * @flow
 */

import React from "react";
import type { CellType } from "./typeExports.js";
import { CELL_SIZE, CELL_TYPES } from "./exports.js";

type PropType = {
    status: CellType,
};

function Cell(props: PropType) {
    const { status} = props;
    const style = {
        width: CELL_SIZE,
        height: CELL_SIZE,
        backgroundColor: status === CELL_TYPES.ALIVE ? "black" : "white",
        borderStyle: "dotted",
        borderColor: "black",
    }
    console.log("rendered");
    return <div style={style}></div>;
}

export default Cell;
