import React from "react"

export class Stopwatch extends React.Component {
    tickerRef;

    state = {
        isRunning : false,
        timer : 0
    };

    //Dom이 렌더링 된 직후에 호출
    // api, 3rd 라이브러리 로딩
    componentDidMount() {
        this.tickRef = setInterval(this.tick, 1000);
    }

    //DOM이 파괴되기 직전에 호출
    //리소스 해체
    componentWillUnmount() {
        clearInterval(this.tickerRef)
    }

    tick = () => {
        if(this.state.isRunning){
            this.setState(prevState => ({
                timer: prevState.timer + 1
            }))
        }
    };

    handleStopwatch = () => {
        this.setState(prevState => {
            return {
                isRunning: !prevState.isRunning
            }
        })
    };

    render() {
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{this.state.timer}</span>
                <button onClick={() => this.handleStopwatch}>
                    {
                        this.state.isRunning ? 'Start' : 'Stop'
                    }
                </button>
                <button onClick={() => this.setState({timer:0})}>Reset</button>
            </div>
        )
    }

}