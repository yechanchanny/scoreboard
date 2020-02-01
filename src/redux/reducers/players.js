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
    switch (action.type) {
        case 'ADD_PLAYER':
            const players = [ ...state.players];
            players.push({id: ++maxId, name: action.name, score:0});
            return {
                ...state,
                players: players
            }

    }


    return state;
};