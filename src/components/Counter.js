import React from "react";

class Counter extends React.Component{
    constructor(props) {
        super();
        this.state = {
            score : props.score
        }
    }

    setDecrement(type){
        this.setState( chan => {
            let scores = Number(chan.score) + 1;
            if(type === '1'){
                scores = chan.score -1
            }
            return{score : scores}
        })
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.setDecrement('1')}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={() => this.setDecrement('0')}> + </button>
            </div>
        );
    }
}

export default Counter;