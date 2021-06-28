import React from 'react';
// State
class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {seconds: 0}
    }
    // Adelanto de Component LifeCycle
    componentDidMount(){
        this.inteval = setInterval(() => this.tick(), 1000)
    }

    tick() {
        this.setState(state => ({seconds: state.seconds + 1}))
    }

    render() {
        return (<div>Timer {this.state.seconds}</div>)
    }
    

}

export default Timer