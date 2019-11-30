/**
 * @flow
 */

import React from "react";

import { ACTIONS } from "hooks/useUniverse.jsx";
import { CELL_TYPES } from "types/exports";

type PropType = {
    key: [number, number],
    row: Number,
    col: Number,
    state: CELL_TYPES,
    universeDispatch: Object,
};

function Cell(props: PropType) {
    const { classes, row, col, state, universeDispatch } = props;
    let className = "";
    if (classes !== undefined) {
        className =
            state === CELL_TYPES.ALIVE ? classes.aliveCell : classes.deadCell;
    }

    return (
        <button
            className={className}
            onClick={() =>
                universeDispatch({
                    type: ACTIONS.FLIP,
                    row: row,
                    col: col,
                })
            }
        ></button>
    );
}

export default Cell;
