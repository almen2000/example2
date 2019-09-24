import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            realSeconds: 120,
            showMins: 0,
            showSecs: 0
        };
    }

    tick() {
        this.setState(state => ({
            realSeconds: state.realSeconds - 1
        }));
        let mins = Math.floor(this.state.realSeconds / 60);
        let secs = this.state.realSeconds % 60;
        this.setState(state => ({
            showMins: mins,
            showSecs: secs
        }));

    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Timer: {this.state.showMins}:{this.state.showSecs}
            </div>
        );
    }
}

export default Timer;
