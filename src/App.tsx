import React from 'react';
import GamePage from "./pages/GamePage";
import './App.css';
import TilesGame from "./components/TilesGame";

function App() {
    return (
        <div className="App">
            <GamePage gameName={'TILES GAME'}>
                <TilesGame/>
            </GamePage>
        </div>
    );
}

export default App;
