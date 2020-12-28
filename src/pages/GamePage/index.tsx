import React from "react";

const GamePage: React.FC<{ gameName: string }> = ({children, gameName}) => {
    return (
        <>
            <header>
                {gameName}
            </header>
            {children}
        </>
    )
}
export default GamePage
