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
        console.log('remove');

        this.setState(prevState =>{
            const players = prevState.players.filter(item => item.id !==id);
            return {players}
        })
    };

    handleChangeScore = (id, delta) => {
        console.log('remove', id, delta);
    };

    render() {
        console.log('asdadsdsdsd');
        return (
            <div className="scoreboard">
                <Header title="My scoreboard" totalPlayers={1 + 10}/>
                {
                    this.state.players.map((initial) => {
                        return <Player name={initial.name} score={initial.score} key={initial.id}
                                       removePlayer={this.handleRemovePlayer}
                                       changeScore={this.handleChangeScore}
                        />
                    })
                }
            </div>
        );
    }
}

export default App;
