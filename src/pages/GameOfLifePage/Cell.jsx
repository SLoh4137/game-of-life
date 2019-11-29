/**
 * @flow
 */

import React from "react";

import { ACTIONS } from "hooks/useUniverse.jsx";
import { CELL_SIZE, CELL_TYPES } from "types/exports";

type PropType = {
    row: Number,
    col: Number,
    state: CELL_TYPES,
    universeDispatch: Object,
};

function Cell(props: PropType) {
    const { row, col, state, universeDispatch } = props;
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
            onClick={() => universeDispatch({
                        type: ACTIONS.FLIP,
                        row: row,
                        col: col,
                    })}
        ></button>
    );
}

export default Cell;
