export const MARK_TILES = 'MARK_TILES';
export const ADD_TILES = 'ADD_TILES';
export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_ROUND = 'SET_ROUND';
export const SET_SCORE = 'SET_SCORE';
export const RESET_GAME = 'RESET_GAME';

function markAsGuessed(colorPair) {
    return {
        type: MARK_TILES,
        colorPair
    }
}

function addRandomTiles(randomTiles) {
    return {
        type: ADD_TILES,
        randomTiles
    }
}

function setDifficulty(lvl) {
    return {
        type: SET_DIFFICULTY,
        lvl
    }
}
function setRound(round) {
    return {
        type: SET_ROUND,
        round
    }
}
function setScore(score) {
    return {
        type: SET_SCORE,
        score
    }
}
function resetGame() {
    return {
        type: RESET_GAME
    }
}

export {markAsGuessed, addRandomTiles, setDifficulty,setRound,setScore,resetGame}
