/**
 * @flow
 */
import { useReducer } from "react";

type State = {
    isPaused: boolean,
    cellSize: number,
    initialSpawnRate: number,
    aliveColor: String,
    deadColor: String,
};

export const ACTIONS = {
    RESET: 0,
    PLAYPAUSE: 1,
    SET_CELL_SIZE: 2,
    SET_CELL_SPACING: 3,
    SET_SPAWN_RATE: 4, 
    SET_ALIVE_COLOR: 5,
    SET_DEAD_COLOR: 6,
};

function reducer(state: State, action) {
    let {
        isPaused,
        cellSize,
        cellSpacing,
        initialSpawnRate,
        aliveColor,
        deadColor,
    } = state;
    switch (action.type) {
        case ACTIONS.RESET:
            return init();
        case ACTIONS.PLAYPAUSE:
            isPaused = !isPaused;
            break;
        case ACTIONS.SET_CELL_SIZE:
            if (action.cellSize === undefined)
                throw new Error("Cell size not provided");
            cellSize = parseInt(action.cellSize);
            break;
        case ACTIONS.SET_CELL_SPACING:
            if (action.cellSpacing === undefined)
                throw new Error("Cell spacing not provided");
            cellSpacing = parseInt(action.cellSpacing);
            break;
        case ACTIONS.SET_SPAWN_RATE:
            if (action.initialSpawnRate === undefined)
                throw new Error("Initial spawn rate not provided");
            initialSpawnRate = action.initialSpawnRate;
            break;  
        case ACTIONS.SET_ALIVE_COLOR:
            if (action.aliveColor === undefined)
                throw new Error("Alive color not provided");
            aliveColor = action.aliveColor;
            break;
        case ACTIONS.SET_DEAD_COLOR:
            if (action.deadColor === undefined)
                throw new Error("Dead color not provided");
            deadColor = action.deadColor;
            break;
        default:
            throw new Error("Invalid action type");
    }

    return {
        isPaused,
        cellSize,
        cellSpacing,
        initialSpawnRate,
        aliveColor,
        deadColor,
    };
}

function init() {
    return {
        isPaused: false,
        cellSize: 40,
        cellSpacing: 0,
        initialSpawnRate: 0.3,
        aliveColor: "#00ff80",
        deadColor: "#0080c0",
    };
}

export function useOptions() {
    const [optionsState, optionsDispatch] = useReducer(reducer, init());
    return { optionsState, optionsDispatch };
}
