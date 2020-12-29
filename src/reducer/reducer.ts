import React, {Reducer} from "react";
import {ADD_TILES, MARK_TILES, RESET_GAME, SET_DIFFICULTY, SET_ROUND, SET_SCORE} from './actions'
import {Action, ActionPayloadTypes, ReducerStateType} from "../types";

export const ContextApp = React.createContext<{
    state: any;
    dispatch: any;
}>({state: 0, dispatch: 0});
export const initialState: ReducerStateType = {
    tileGame: {
        tiles: [],
        round: 1,
        score: 0,
        difficulty: 0,
        isEnded: false,
        difficultyArr: [
            {
                difficulty: 'normal',
                maxScore: 8,
                bestResult: 0
            },
            {
                difficulty: 'hard',
                maxScore: 16,
                bestResult: 0
            }],
    }
};

export const AppReducer:Reducer<ReducerStateType, Action<ActionPayloadTypes> >= (state = initialState, action:ActionPayloadTypes) => {
    switch (action.type) {
        case ADD_TILES:
            console.log(action)
            return {
                ...state,
                tileGame: {
                    ...state.tileGame,
                    tiles: action.payload
                }
            };
        case MARK_TILES:
            let isEnded = state.tileGame.score + 1 >= state.tileGame.difficultyArr[state.tileGame.difficulty].maxScore
            return {
                ...state,
                tileGame: {
                    ...state.tileGame,
                    score: state.tileGame.score + 1,
                    isEnded: isEnded,
                    difficultyArr: state.tileGame.difficultyArr.map((d, id) => {
                        return {
                            ...d,
                            bestResult: isEnded && id === state.tileGame.difficulty && ((d.bestResult && state.tileGame.round < d.bestResult) || d.bestResult === 0) ? state.tileGame.round : d.bestResult
                        }
                    }),
                    tiles: state.tileGame.tiles.map((tile) => {
                        return {...tile, isGuessed: tile.colorPair === action.payload ? true : tile.isGuessed}
                    })
                }
            }
        case SET_DIFFICULTY:
            return {
                ...state,
                tileGame: {
                    ...state.tileGame,
                    difficulty: action.payload
                }
            }

        case SET_ROUND:
            return {
                ...state,
                tileGame: {
                    ...state.tileGame,
                    round: action.payload
                }
            }

        case SET_SCORE:
            return {
                ...state,
                tileGame: {
                    ...state.tileGame,
                    score: action.payload
                }
            }
        case RESET_GAME:
            return {
                ...state,
                tileGame: {
                    ...initialState.tileGame,
                    difficulty: state.tileGame.difficulty,
                    difficultyArr: state.tileGame.difficultyArr
                }
            }

        default:
            return state
    }
};
