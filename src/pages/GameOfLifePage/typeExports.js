// @flow

export type CellType = {
    row: number,
    col: number,
    state: Boolean,
};
export type RowType = Array<CellType>;
export type BoardType = Array<RowType>;

export type BoardActionsState = {
    isPaused: boolean,
    addList: Array<{row: number, col: number}>,
    board: BoardType,
}