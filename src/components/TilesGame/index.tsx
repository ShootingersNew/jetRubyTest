import React, {useEffect, useState} from "react";
import TilesView from "../TilesView";
import {IsTileOpenedTypes, OpenTileType, TileIdsTypes, TileType, DifficultyType} from "../../types";

const TilesGame: React.FC = () => {
    //"smart" comp for TilesGame

    const [tiles, setTiles] = useState<TileType[] | undefined>(undefined);
    const [round, setRound] = useState(1);
    const [score, setScore] = useState(0);
    const [difficulty, setDifficulty] = useState(0)

    // max score of the game; number of tiles = difficultyArr[x]*2
    const difficultyArr: DifficultyType[] = [{difficulty: 'normal', maxScore: 8}, {difficulty: 'hard', maxScore: 16}]

    const [openedTilesIds, setOpenedTilesIds] = useState<TileIdsTypes[]>([]);

    const compareTiles = tiles && openedTilesIds && openedTilesIds.length === 2 && openedTilesIds[0].colorPair === openedTilesIds[1].colorPair

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
        const colors = new Array(difficultyArr[difficulty].maxScore).fill(undefined).map((val, id) => {
            return {ID: id, color: randomColor(), isOpened: false, isGuessed: false, colorPair: id};
        });

        //concatenate arrays and randomize the positions of their elements
        return [...colors, ...colors].sort(randomizePos)
    }

    const openTile: OpenTileType = (id, colorPair) => {

        if (openedTilesIds && openedTilesIds.length > 1) {
            //close our tiles
            setOpenedTilesIds([])
            setRound(round + 1)
        } else {

            openedTilesIds && openedTilesIds.length !== 0 && id !== openedTilesIds[0].id
                ?
                setOpenedTilesIds([...openedTilesIds, {id: id, colorPair: colorPair}])
                :
                setOpenedTilesIds([{id: id, colorPair: colorPair}])
        }
    }

    const resetGame: () => void = () => {
        setTiles(generateRandomTiles())
        setOpenedTilesIds([])
        setScore(0)
        setRound(1)
    }

    const isTileOpened: IsTileOpenedTypes = (id, isGuessed) => {
        return openedTilesIds.some((tile) => tile.id === id) || isGuessed
    }
    useEffect(() => {
        const markTheGuessed: () => void = () => {
            if (compareTiles && tiles && openedTilesIds) {
                const copiedTilesArr = tiles?.slice();
                copiedTilesArr.forEach((tile, id) => {
                    if (tile.colorPair === openedTilesIds[0].colorPair) {
                        copiedTilesArr[id].isGuessed = true
                    }
                })
                setTiles(copiedTilesArr)
                setOpenedTilesIds([])
                setScore(score + 1)
            }
        }
        markTheGuessed()

    }, [compareTiles, openedTilesIds, tiles, score])

    useEffect(() => {
        setTiles(generateRandomTiles())
    }, [difficulty])


    return <TilesView
        setDifficulty={setDifficulty}
        difficultyArr={difficultyArr}
        difficulty={difficulty}
        score={score}
        round={round}
        isTileOpened={isTileOpened}
        openedTilesIds={openedTilesIds}
        openTile={openTile}
        arr={tiles}
        resetGame={resetGame}
    />
}
export default TilesGame
