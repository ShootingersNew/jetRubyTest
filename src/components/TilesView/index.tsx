import React from "react";
import './style.scss'
import Tile from "../Tile";
import {DifficultyType, IsTileOpenedTypes, OpenTileType, TileIdsTypes, TileType} from "../../types";

type TilesViewPropTypes = {
    tiles?: TileType[],
    isTileOpened: IsTileOpenedTypes,
    openedTilesIds: TileIdsTypes[]
    openTile: OpenTileType,
    round: number,
    score: number,
    resetGame: () => void,
    difficulty: number,
    difficultyArr: DifficultyType[],
    setDifficulty: (idx: number) => void,
    isEnded: boolean,
}
const TilesView: React.FC<TilesViewPropTypes>
    = ({
           tiles,
           openTile,
           isTileOpened,
           round,
           score,
           resetGame,
           isEnded,
           difficultyArr,
           setDifficulty,
           difficulty
       }) => {
    const mapTiles: () => JSX.Element = () => {
        return <>
            {
                tiles && (tiles as TileType[]).map(({ID, color, isGuessed, isOpened, colorPair}, id) => {
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
                {
                    !isEnded && <div className="tilesView__difficulty">
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
                }
                <button onClick={resetGame} className="tileView__reset">Сбросить и сменить цвета</button>
            </div>
            {
                !isEnded ? <div className={'tilesView__tiles'}>
                        {
                            mapTiles()
                        }
                    </div>
                    :
                    <>
                        <h1>ВЫ ПОБЕДИЛИ</h1>
                        <h2>Вы справили с уровнем
                            сложности {difficultyArr[difficulty].difficulty} за {round} раундов</h2>
                        <h3>Ваш лучший результат на этом уровне сложности
                            - {difficultyArr[difficulty].bestResult} раунд</h3>
                    </>

            }
        </>
    )
};

export default TilesView
