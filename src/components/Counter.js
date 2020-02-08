import React from "react";

function Counter(props){
    const dispatch = useDispatch();
        const initial = this.props.initial;
        return (
            <div className="counter">
                <button className="counter-action decrement"
                        onClick={() =>
                            dispatch(this.props.changeScore(initial.id, -1))
                        }> - </button>
                <span className="counter-score">{initial.score}</span>
                <button className="counter-action increment"
                        onClick={() => dispatch(this.props.changeScore(initial.id, 1))}> + </button>
            </div>
        );

}

export default Counter;