import {Component} from 'react';

class Timer extends Component {
    state = {
        seconds : 0,
    };


    interval= {};

    componentWillUnmount = () => {
        clearInterval(this.interval);
    };

    componentDidMount= ()=> {
        this.interval = setInterval(
            () => this.setState({seconds : this.state.seconds+1}),
            1000);
    };

    render() {
        return (
            <>
                <h1>Timer App</h1>
                <div> Seconds Elapsed : {this.state.seconds}</div>
            </>
        );
    }
}

export default Timer;