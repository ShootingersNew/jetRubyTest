import {Action, TileType} from "../types";

export const MARK_TILES = 'MARK_TILES';
export const ADD_TILES = 'ADD_TILES';
export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_ROUND = 'SET_ROUND';
export const SET_SCORE = 'SET_SCORE';
export const RESET_GAME = 'RESET_GAME';

const markAsGuessed: Action<number> = (colorPair) => {
    return {
        type: MARK_TILES,
        payload: colorPair
    }
}

const addRandomTiles: Action<TileType[]> = (tiles) => {
    return {
        type: ADD_TILES,
        payload: tiles
    }
}

const setDifficulty: Action<number> = (lvl) => {
    return {
        type: SET_DIFFICULTY,
        payload: lvl
    }
}

const setRound: Action<number> = (round) => {
    return {
        type: SET_ROUND,
        payload: round
    }
}

const setScore: Action<number> = (score) => {
    return {
        type: SET_SCORE,
        payload: score
    }
}

const resetGame: Action<any> = () => {
    return {
        type: RESET_GAME,
    }
}

export {markAsGuessed, addRandomTiles, setDifficulty, setRound, setScore, resetGame}
