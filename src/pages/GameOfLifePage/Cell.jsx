/**
 * @flow
 */

import React from "react";
import { CELL_SIZE, CELL_TYPES } from "types/exports";

type PropType = {
    state: CELL_TYPES,
    onClick: Object,
};

function Cell(props: PropType) {
    const { state, onClick } = props;
    const style = {
        width: CELL_SIZE,
        height: CELL_SIZE,
        backgroundColor: state === CELL_TYPES.ALIVE ? "black" : "white",
        borderStyle: "dotted",
        borderColor: "black",
    };
    return (
        <button
            style={style}
            onClick={onClick}
        ></button>
    );
}

export default Cell;
