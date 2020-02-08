import React from "react"
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {useDispatch} from "react-redux";

const Player = (props) => {
    const dispatch = useDispatch();
    return(
        <div className="player">
            <input type="checkbox"/>
            <button onClick={() => dispatch(removePlayer(props.id))}>delete</button>
            <span className="player-name">{props.name}</span>
            {props.children}
            <div>{props.name}</div>
            <Counter id={props.id} score={props.score} changeScore={props.changeScore}/>
        </div>
    )
};

export default Player;