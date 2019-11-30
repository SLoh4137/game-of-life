/**
 * @flow
 */

import React from "react";
import { makeStyles  } from '@material-ui/styles';

import { ACTIONS } from "hooks/useUniverse.jsx";
import { CELL_TYPES } from "types/exports";

type PropType = {
    row: Number,
    col: Number,
    state: CELL_TYPES,
    universeDispatch: Object,
};

const useStyles = makeStyles(theme => ({
    aliveCell: {
        width: theme.cellSize,
        height: theme.cellSize,
        borderStyle: "dotted",
        borderColor: "black",
        backgroundColor: theme.aliveColor,
    },
    deadCell: {
        width: theme.cellSize,
        height: theme.cellSize,
        borderStyle: "dotted",
        borderColor: "black",
        backgroundColor: theme.deadColor,
    },
}));

function Cell(props: PropType) {
    const { row, col, state, universeDispatch } = props;
    const classes = useStyles();
    return (
        <button
            className={state === CELL_TYPES.ALIVE ? classes.aliveCell : classes.deadCell}
            onClick={() => universeDispatch({
                        type: ACTIONS.FLIP,
                        row: row,
                        col: col,
                    })}
        ></button>
    );
}

export default Cell;
