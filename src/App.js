import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {CustormPlayer} from './components/CustormPlayer';
import AddPlayerForm from "./components/AddPlayerForm";
import {useSelector} from "react-redux";
import _ from 'lodash';


function App() {
    const players = useSelector(state => state.playerReducer.players);

    // const handleRemovePlayer = (id) => {
    //     this.setState(prevState =>{
    //         const players = prevState.players.filter(item => item.id !==id);
    //         return {players}
    //     })
    // };

    // const handleChangeScore = (id, delta) => {
    //     this.setState(prevState => {
    //         const player = prevState.players;
    //         player.forEach(item => {
    //             if(item.id === id){
    //                item.score += delta;
    //            }
    //         });
    //         return {player : player}
    //     });
    // };

    const isHighScore = () => {
        return _.maxBy(players, 'score').score;
    };

    return (
        <div className="scoreboard">
            <Header title="My scoreboard" players={players}/>
            {
                players.map((item) => (
                    <CustormPlayer id={item.id} name={item.name} score={item.score} key={item.id}
                                   isHighScore={isHighScore() === item.score}
                    />
                    )
                )
            }
            <AddPlayerForm></AddPlayerForm>
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
