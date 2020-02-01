import React from "react"
import Counter from "./Counter";

export const Player = (props) => {
    const initial = props.initial;
    console.log(initial);
    return(
        <div className="player">
            <input type="checkbox"/>
            <button onClick={props.removePlayer(initial.id)}>delete</button>
            <span className="player-name">{initial.name}</span>
            <Counter initial={initial}/>
        </div>
    )
};