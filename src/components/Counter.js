import React from "react";

class Counter extends React.Component{

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.props.changeScore}> - </button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment" onClick={this.props.changeScore}> + </button>
            </div>
        );
    }
}

export default Counter;