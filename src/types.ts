import React from "react";

export type TileType = { ID: number, color?: string, isOpened?: boolean, isGuessed: boolean, colorPair: number }
export type DifficultyType = { difficulty: string, maxScore: number, bestResult: 0 }
export type OpenTileType = (id: number, colorPair: number) => void
export type TileIdsTypes = { id: number, colorPair: number }
export type IsTileOpenedTypes = (id: number, isGuessed: boolean) => boolean
