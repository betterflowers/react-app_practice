import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:0
        }
    }

    increase = () =>{
        this.setState(
            (preState) =>
            ({
                value:preState.value+1
            })        
        )    
    }

    decrease = () =>{
        this.setState(
            (preState) =>
            ({
                value:preState.value-1
            })        
        )    
    }

    render(){
        return (<div>
            <button onClick={this.increase}>+</button>
        <mark>{this.state.value}</mark>
            <button onClick={this.decrease}>-</button>
            <br/><br/>
        </div>)
    }

}

export default Counter;