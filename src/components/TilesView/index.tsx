import React from "react";
import './style.scss'
import Tile from "../Tile";
import {TileType} from "../../types";

type TilesViewPropTypes = {
    arr?: TileType[],
}
const TilesView: React.FC<TilesViewPropTypes> = ({arr}) => {

    const mapTiles: () => JSX.Element = () => {
        return <>
            {
                arr && arr.map(({color, isGuessed, isOpened}, id) => {
                    return (
                        <Tile
                            key={id}
                            className="tilesView__tile"
                            style={isOpened && isGuessed ? {backgroundColor: `${color}`} : undefined}
                        />
                    )
                })
            }
        </>
    }

    return (
        <div className={'tilesView'}>
            {
                mapTiles()
            }
        </div>
    )
}
export default TilesView
