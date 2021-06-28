import React from 'react'

// Components LifeCycle
class Logger extends React.Component {
    constructor(props){
        super(props)
        this.state = {logger: true}
    }
        
    componentDidMount(){
        console.log('Component did mount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Did Update", prevState)
    }

    shouldComponentUpdate (nextProps, nextState){
        console.log("ShouldComponentUpdate", nextProps, nextState)
        return true
    }

    componentWillUnmount(){
        console.log("Component will Unmount")
    }

    render(){
        console.log('Component render')
        return <h1 onClick={()=> this.setState(()=> ({logger: false}))}>Logger</h1>
    }



}

export default Logger;
