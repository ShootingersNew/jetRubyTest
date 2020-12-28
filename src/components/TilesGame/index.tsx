import React, {useEffect, useState} from "react";
import TilesView from "../TilesView";
import {TileType} from "../../types";

const TilesGame: React.FC = () => {
    const [tiles, setTiles] = useState<TileType[] | undefined>(undefined)
    //"smart" comp for TilesGame
    useEffect(() => {

        const randomColor: () => string = () => {
            return Math.floor(Math.random() * 16777215).toString(16)
        };
        const generateRandomTiles: () => TileType[] = () => {
            //randomize color
            const randomizePos: (a: any, b: any) => number = (a, b) => {
                return 0.5 - Math.random();
            }
            // generate an array of random colors
            const colors = new Array(8).fill(undefined).map(() => {
                return randomColor();
            });

            //concatenate arrays and randomize the positions of their elements
            return [...colors, ...colors].sort(randomizePos).map((color) => {
                return {color: `#${color}`, isOpened: false, isGuessed: false}
            })
        }
        setTiles(generateRandomTiles())
    }, [])

    return <TilesView arr={tiles}/>
}
export default TilesGame
