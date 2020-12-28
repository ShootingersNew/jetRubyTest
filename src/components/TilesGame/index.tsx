import React from "react";
import TilesView from "../TilesView";
import {TileType} from "../../types";

const TilesGame: React.FC = () => {
    //"smart" comp
    const tilesArr: TileType[] = [
        {
            color: '#000',
            isOpened: false,
            isGuessed: false
        },
        {
            color: '#000',
            isOpened: false,
            isGuessed: false
        },
        {
            color: '#000',
            isOpened: false,
            isGuessed: false
        }
    ];
    return <TilesView arr={tilesArr}/>
}
export default TilesGame
