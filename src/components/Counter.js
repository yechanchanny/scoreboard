import React from "react";

class Counter extends React.Component{
    render() {
        const initial = this.props.initial;
        return (
            <div className="counter">
                <button className="counter-action decrement"
                        onClick={() => {
                            this.props.changeScore(initial.id, -1)
                        }}> - </button>
                <span className="counter-score">{initial.score}</span>
                <button className="counter-action increment"
                        onClick={() => this.props.changeScore(initial.id, 1)}> + </button>
            </div>
        );
    }
}

export default Counter;