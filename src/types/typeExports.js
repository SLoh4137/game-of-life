// @flow

export type CellType = Boolean;
export type RowType = Array<CellType>;
export type UniverseType = Array<RowType>;

export type FlipCellFunc = (number, number) => void;