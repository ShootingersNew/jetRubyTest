import React from "react";
import './style.scss'
import {TileType} from "../../types";

type TilesViewPropTypes = {
    arr: TileType[],
}
const TilesView: React.FC<TilesViewPropTypes> = ({arr}) => {

    const mapTiles: () => JSX.Element[] = () => {
        return arr.map(({color, isGuessed, isOpened},id) => {
            return <div key={id} className="tilesView tile" style={ isOpened && isGuessed ? {backgroundColor: `${color}`} : undefined }/>
        })
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
