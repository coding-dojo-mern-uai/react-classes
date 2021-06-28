import React from 'react'

// Syntethics Events
class Button extends React.Component {
    render(){
        return <button onClick={()=> alert("On click")}> Click me! </button>
    }
}

export default Button;
