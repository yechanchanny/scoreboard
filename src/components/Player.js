import React from "react"
import Counter from "./Counter";

export const Player = (props) => {
    return(
        <div className="player">
            <input type="checkbox"/>
            <button onClick={props.removePlayer(props.id)}>delete</button>
            <span className="player-name">1111{props.name}</span>
            <Counter></Counter>
        </div>
    )
};