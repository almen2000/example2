import React, { Component } from 'react';
import { runInThisContext } from 'vm';

class Timer extends Component {
    state = {
        mins: 2,
        secs: 120
    };

    countDown() {
        setTimeout(this.decrement, 60);
    }

    decrement() {
        let minutes = this.state.mins;
        let seconds = this.state.seconds;

        if (mins < 0) { 
            alert('time up');
        } else {
            this.setState({ secs: this.state.secs - 1, });
            setTimeout(this.decrement, 1000);
        }
    }

    getMinutes = () => { 
        let mins = Math.floor(this.state.secs / 60);
        this.setState({ mins: mins, });
        return mins;
    }

    getSeconds = () => {
        console.log("Alexandr");
        return this.state.secs - Math.round(this.state.mins * 60);
    }

    f = () => {
        return 5;
    }

    g = () => {
        return this.getMinutes();
    }

    render() {

        let minutes = this.g();
        let seconds = this.getSeconds();
        let f = this.f();
        // let ga = g();

        return (
            // <div>{this.getminutes}:{this.getseconds}</div>
            <div>
                {}:{seconds}
            </div>
        );
    }
}

export default Timer;
