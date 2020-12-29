import React, {useReducer} from 'react';
import GamePage from "./pages/GamePage";
import {ContextApp, initialState, AppReducer} from "./reducer/reducer";
import './App.css';
import TilesGame from "./components/TilesGame";

function App() {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <ContextApp.Provider value={{dispatch, state}}>
            <div className="App">
                <GamePage gameName={'TILES GAME'}>
                    <TilesGame/>
                </GamePage>
            </div>
        </ContextApp.Provider>
    );
}

export default App;
