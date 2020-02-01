import React from "react";
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";

export const Header = (props) => {

    return (
        <header>
            <h1>{ props.title }</h1>
            <Stopwatch></Stopwatch>
            <span className="stats">Players: { props.player.name }</span>
            <Stats/>
        </header>
    )
};