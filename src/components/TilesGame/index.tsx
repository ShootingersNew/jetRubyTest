import React, {useContext, useEffect, useState} from "react";
import TilesView from "../TilesView";
import {IsTileOpenedTypes, OpenTileType, TileIdsTypes, TileType} from "../../types";
import {ContextApp} from "../../reducer/reducer";
import {addRandomTiles, markAsGuessed, setScore, setRound, setDifficulty,resetGame} from "../../reducer/actions";


const TilesGame: React.FC = () => {
    //"smart" comp for TilesGame

    const {state, dispatch} = useContext(ContextApp);

    // max score of the game; number of tiles = difficultyArr[x]*2
    const [openedTilesIds, setOpenedTilesIds] = useState<TileIdsTypes[]>([]);

    const compareTiles = openedTilesIds && openedTilesIds.length === 2 && openedTilesIds[0].colorPair === openedTilesIds[1].colorPair

    const generateRandomTiles: () => TileType[] = () => {
        const randomColor: () => string = () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        //randomize color
        const randomizePos: (a: any, b: any) => number = (a, b) => {
            return 0.5 - Math.random();
        }
        // generate an array of random colors
        const colors = new Array(state.tileGame.difficultyArr[state.tileGame.difficulty].maxScore).fill(undefined).map((val, id) => {
            return {ID: id, color: randomColor(), isOpened: false, isGuessed: false, colorPair: id};
        });

        //concatenate arrays and randomize the positions of their elements
        return [...colors, ...colors].sort(randomizePos)
    }

    const openTile: OpenTileType = (id, colorPair) => {
        if (openedTilesIds && openedTilesIds.length > 1) {
            //close our tiles
            setOpenedTilesIds([])
            dispatch(setRound(state.tileGame.round + 1))
        } else {

            openedTilesIds && openedTilesIds.length !== 0 && id !== openedTilesIds[0].id
                ?
                setOpenedTilesIds([...openedTilesIds, {id: id, colorPair: colorPair}])
                :
                setOpenedTilesIds([{id: id, colorPair: colorPair}])
        }
    }

    const reset: () => void = () => {
        dispatch(resetGame())
        setOpenedTilesIds([])
        dispatch(addRandomTiles(generateRandomTiles()))
    }

    const isTileOpened: IsTileOpenedTypes = (id, isGuessed) => {
        return openedTilesIds.some((tile) => tile.id === id) || isGuessed
    }
    const dispatchDifficulty: (lvl: number) => void = (lvl) => {
        dispatch(setDifficulty(lvl))
        resetGame();
    }
    useEffect(() => {
        const markTheGuessed: () => void = () => {
            if (compareTiles && openedTilesIds) {
                dispatch(markAsGuessed(openedTilesIds[0].colorPair))
                setOpenedTilesIds([])
                dispatch(setScore(state.tileGame.score + 1))
            }
        }
        markTheGuessed()

    }, [state.tileGame.score, dispatch, compareTiles, openedTilesIds])

    useEffect(() => {
        dispatch(addRandomTiles(generateRandomTiles()))
    }, [dispatch, state.tileGame.difficulty])


    return (
        <TilesView
            {...state.tileGame}
            setDifficulty={dispatchDifficulty}
            isTileOpened={isTileOpened}
            openedTilesIds={openedTilesIds}
            openTile={openTile}
            resetGame={reset}
        />
    )
}
export default TilesGame
