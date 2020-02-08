import {act} from "react-dom/test-utils";

let maxId = 4;

const playerInitialState = {
    players : [
        {name: 'LDK1', score: 5, id: 1},
        {name: 'LDK2', score: 5, id: 2},
        {name: 'LDK3', score: 5, id: 3},
        {name: 'LDK4', score: 5, id: 4},
    ]
};

export const playerReducer = (state = playerInitialState, action) => {
    let players = null;

    switch (action.type) {
        case 'ADD_PLAYER':
            players = [ ...state.players];
            players.push({id: ++maxId, name: action.name, score:0});
            return {
                ...state,
                players: players
            };

        case 'CHANGE_SCORE':
            players = [...state.players];
            players.forEach(item => {
                if (item.id === action.id) {
                    item.score += action.delta;
                }
            });
            return{
                ...state,
                players
            };

        case 'REMOVE_PLAYER':
            players = state.players.filter(item => item.id !== action.id);
            return players;

        default:
                return state;
    }
};