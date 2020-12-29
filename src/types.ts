import React from "react";

export type TileType = { ID: number, color?: string, isOpened?: boolean, isGuessed: boolean, colorPair: number }
export type DifficultyType = { difficulty: string, maxScore: number, bestResult: number }
export type OpenTileType = (id: number, colorPair: number) => void
export type TileIdsTypes = { id: number, colorPair: number }
export type IsTileOpenedTypes = (id: number, isGuessed: boolean) => boolean
export type ReducerStateType = {
    tileGame: {
        tiles: TileType[],
        round: number,
        score: number,
        difficulty: number,
        isEnded: boolean,
        difficultyArr: DifficultyType[]
    }
}
export type ReducerE = {
    tileGame: {
        tiles: TileType[],
        round: number,
        score: number,
        difficulty: number,
        isEnded: boolean,
        difficultyArr: DifficultyType[]
    }
}
export type Reducer<S, A> = (prevState: S, action: A) => S;
export type Action<S> = (payload?: S) => { type: string, payload?: S };
export type ActionPayloadTypes = number | TileType[] | any
