import React, {HTMLAttributes} from "react";
import './style.scss';
import cn from 'classnames'

type TilePropTypes = {
    className?: string
}
const Tile: React.FC<TilePropTypes & HTMLAttributes<any>> = ({className, ...rest}) => {
    const tileClassNames = cn({
        tile: true,
        [`${className}`]: className
    });
    return (
        <div {...rest} className={tileClassNames}/>
    )
}
export default Tile
