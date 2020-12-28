import React from "react";
import Container from "../../components/Container";

const GamePage: React.FC<{ gameName: string }> = ({children, gameName}) => {
    return (
        <>
            <header>
                <h1>{gameName}</h1>
            </header>
            <Container>
                {children}
            </Container>
        </>
    )
}
export default GamePage
