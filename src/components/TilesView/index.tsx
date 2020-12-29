import React from "react";
import './style.scss'
import Tile from "../Tile";
import {DifficultyType, IsTileOpenedTypes, OpenTileType, TileIdsTypes, TileType} from "../../types";

type TilesViewPropTypes = {
    arr?: TileType[],
    isTileOpened: IsTileOpenedTypes,
    openedTilesIds: TileIdsTypes[]
    openTile: OpenTileType,
    round: number,
    score: number,
    resetGame: () => void,
    difficulty: number,
    difficultyArr: DifficultyType[],
    setDifficulty: (idx: number) => void
}
const TilesView: React.FC<TilesViewPropTypes>
    = ({
           arr,
           openTile,
           isTileOpened,
           round,
           score,
           resetGame,
           difficultyArr,
           setDifficulty,
           difficulty
       }) => {

    const mapTiles: () => JSX.Element = () => {
        return <>
            {
                arr && arr.map(({ID, color, isGuessed, isOpened, colorPair}, id) => {
                    return (
                        <Tile
                            colorPair={colorPair}
                            openTile={openTile}
                            ID={ID}
                            key={id}
                            idx={id}
                            color={color}
                            className="tilesView__tile"
                            isTileOpened={isTileOpened}
                            isGuessed={isGuessed}
                        />
                    )
                })
            }
        </>
    }

    return (
        <>
            <div className="tilesView__controls">
                <div className="tilesView__statistic">
                    <div>Ваш счет {score}</div>
                    <div>Раунд {round}</div>
                </div>
                <div className="tilesView__difficulty">
                    Difficulty
                    <ul>
                        {
                            difficultyArr.map((d, idx) => {
                                return <li key={idx}>
                                    {
                                        <label>
                                            <input
                                                onChange={() => setDifficulty(idx)}
                                                checked={difficulty === idx}
                                                type="radio"
                                                value={idx}
                                                name={'diff'}/>
                                            {d.difficulty}
                                        </label>
                                    }
                                </li>
                            })
                        }
                    </ul>
                </div>
                <button onClick={resetGame} className="tileView__reset">Сбросить и сменить цвета</button>
            </div>
            <div className={'tilesView__tiles'}>
                {
                    mapTiles()
                }
            </div>
        </>
    )
}
export default TilesView
