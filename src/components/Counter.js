import React from "react";

class Counter extends React.Component{
    render() {
        return (
            <div className="counter">
                {this.initial}
                {/*<button className="counter-action decrement"*/}
                {/*        onClick={this.props.changeScore(this.id, -1)}> - </button>*/}
                {/*<span className="counter-score">{this.score}</span>*/}
                {/*<button className="counter-action increment"*/}
                {/*        onClick={this.props.changeScore(this.props.id, 1)}> + </button>*/}
            </div>
        );
    }
}

export default Counter;