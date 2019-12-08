/**
 * @flow
 */

import React, { useMemo } from "react";
import classNames from "classnames";

import { ACTIONS } from "hooks/useUniverse.jsx";
import { CELL_TYPES } from "types/exports";

type PropType = {
    key: [number, number],
    row: Number,
    col: Number,
    state: CELL_TYPES,
    universeDispatch: Object,
};

function getClassName(state, classes) {
    if (state === CELL_TYPES.ALIVE) {
        return classNames(classes.aliveCell, classes.cell);
    } else {
        return classNames(classes.deadCell, classes.cell);
    }
}

function Cell(props: PropType) {
    const { classes, row, col, state, universeDispatch } = props;
    const className = useMemo(() => getClassName(state, classes), [
        state,
        classes,
    ]);

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
        />
    );
}

export default Cell;
