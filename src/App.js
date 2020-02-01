import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';
import {useSelector} from "react-redux";

function App() {

    const players = useSelector(state => state.playerReducer.players);

    const handleRemovePlayer = (id) => {
        this.setState(prevState =>{
            const players = prevState.players.filter(item => item.id !==id);
            return {players}
        })
    };

    const handleChangeScore = (id, delta) => {
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

    return (
        <div className="scoreboard">
            <Header title="My scoreboard" players={players}/>
            {

                players.map((initial) => (
                    <Player key={initial.id}
                                   initial={initial}
                                   removePlayer={handleRemovePlayer}
                                   changeScore={handleChangeScore}>
                    </Player>
                    )
                )
            }
        </div>
    );
}
//
// const  mapStateToProps = (state) => ({
//   //왼쪽은 props, 오른쪽은 store의 state
//   players: state.playerReducer.players,
// });

// export default connect(mapStateToProps)(App);
export default App;
