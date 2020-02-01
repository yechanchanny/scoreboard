import React from "react"
import Counter from "./Counter";

export const Player = (props) => {
    const initial = props.initial;
    return(
        <div className="player">
            <input type="checkbox"/>
            <button onClick={() => props.removePlayer(initial.id)}>delete</button>
            <span className="player-name">{initial.name}</span>
            <div>{initial.name}</div>
            <Counter initial={initial} changeScore={props.changeScore}/>
        </div>
    )
};