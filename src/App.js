import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';

class App extends React.Component{
    state = {
        players : [
            {name: 'LDK1', score: 5, id: 1},
            {name: 'LDK2', score: 5, id: 2},
            {name: 'LDK3', score: 5, id: 3},
            {name: 'LDK4', score: 5, id: 4},
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState(prevState =>{
            const players = prevState.players.filter(item => item.id !==id);
            return {players}
        })
    };

    handleChangeScore = (id, delta) => {
        this.setState(prevState => {
            const player = prevState.players;
            player.forEach(item => {
                if(item.id === id){
                   item.score += delta;
               }
            });
            return {player : player}
        });
    };

    render() {
        return (
            <div className="scoreboard">
                <Header title="My scoreboard" player={this.state.players}/>
                {

                    this.state.players.map((initial) => (
                        <Player key={initial.id}
                                       initial={initial}
                                       removePlayer={this.handleRemovePlayer}
                                       changeScore={this.handleChangeScore}>
                        </Player>
                        )
                    )
                }
            </div>
        );
    }
}

export default App;
