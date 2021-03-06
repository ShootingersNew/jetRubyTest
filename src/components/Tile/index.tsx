import React, {HTMLAttributes, useEffect, useState} from "react";
import './style.scss';
import cn from 'classnames'
import {IsTileOpenedTypes, OpenTileType} from "../../types";



type TilePropTypes = {
    className?: string,
    ID: number,
    openTile: OpenTileType,
    colorPair: number,
    color?: string
    idx: number,
    isTileOpened: IsTileOpenedTypes,
    isGuessed: boolean
}
const Tile: React.FC<TilePropTypes & HTMLAttributes<any>>
    = ({
           className,
           openTile,
           color,
           colorPair,
           isTileOpened,
           idx,
           isGuessed,

       }) => {
    const [isClosed, setIsClosed] = useState(false)
    const [isColorHidden, setIsColorHidden] = useState(true)
    const tileClassNames = cn({
        tile: true,
        [`${className}`]: className,
        [`tile_closed_${isClosed}`]: true,
        applyflip: isClosed,
        [`tile_guessed_${isGuessed}`]: true
    });
    const clickHandler: () => void = () => {
        setIsColorHidden(false)
        openTile(idx, colorPair)
    }
    //set state to closed
    useEffect(() => {
        setIsClosed(isTileOpened(idx, isGuessed))

    }, [setIsClosed, idx, isGuessed, isTileOpened])

    useEffect(() => {
        // hide the colors after closing the tile to prevent cheating
        const hideColor: () => void = () => {
            if (!isClosed) {
                setTimeout(() => {
                    setIsColorHidden(true)
                }, 700)
            }
        }
        hideColor()
    }, [isClosed])

    return (
        <div className={"card " + tileClassNames} onClick={!isGuessed ? clickHandler : undefined}>
            <div className="content">
                <div className="cardFront tile__back"/>
                <div className="cardBack"
                     style={{backgroundColor: isClosed || !isColorHidden? `${color}` : "wheat"}}/>
            </div>
        </div>
    )
}
export default Tile
