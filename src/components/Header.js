import React from "react";
import {Stats} from "./Stats";

export const Header = (props) => {

    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.player.name }</span>
            <Stats/>
        </header>
    )
};