import React from "react"
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

const Player = (props) => {
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

const mapActionToProps = (dispatch) => ({
   removePlayer : (id) => dispatch(removePlayer(id))
});

export default connect(null, mapActionToProps)(Player)