/**
 * @flow
 */
import React from "react";

import type { UniverseType } from "types/typeExports";
import { withStyles } from "@material-ui/core";

import GridContainer from "components/Grid/GridContainer.jsx";
import Cell from "./Cell";

type PropType = {
    classes: Object,
    universe: UniverseType,
    universeDispatch: Object,
};

const boardStyle = {
    cell: {
        width: props => props.cellSize,
        height: props => props.cellSize,
        margin: props => props.cellSpacing,
        borderRadius: "5px",
    },
    aliveCell: {
        backgroundColor: props => props.aliveColor,
    },
    deadCell: {
        backgroundColor: props => props.deadColor,
    },
};

function Board(props: PropType) {
    const { classes, universe, universeDispatch } = props;
    const displayBoard = [];
    const universeLength = universe ? universe.length : 0;

    for (let rowNum = 0; rowNum < universeLength; rowNum++) {
        const cells = [];
        const row = universe[rowNum];
        const rowLength = row ? row.length : 0;
        for (let colNum = 0; colNum < rowLength; colNum++) {
            cells.push(
                <Cell
                    classes={classes}
                    key={[rowNum, colNum]}
                    row={rowNum}
                    col={colNum}
                    state={row[colNum]}
                    universeDispatch={universeDispatch}
                />
            );
        }

        displayBoard.push(
            <GridContainer key={rowNum} wrap="nowrap" justify="center" alignItems="center">
                {cells}
            </GridContainer>
        );
    }

    return (
        <GridContainer direction="column" justify="center" alignItems="center" alignContent="center">
            {displayBoard}
        </GridContainer>
    );
}

export default withStyles(boardStyle)(Board);
