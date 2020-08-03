import React from 'react';
import Counter from '../Counter'

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, totalValue: 0 }
    }

    handleResetSize = (event) => {
       const newSize = event.target.value ? parseInt(event.target.value) : 0;
       if(newSize !== this.state.size){
        this.setState({
            size: event.target.value? parseInt(event.target.value) : 0,
            totalValue:0
        });   
       }  
    }

    handleIncrease = () => {
        this.setState(
            (preState) =>
                ({
                    totalValue: preState.totalValue + 1
                })
        )
    }

    handleDecrease = () => {
        this.setState(
            (preState) =>
                ({
                    totalValue: preState.totalValue - 1
                })
        )
        // this.setState(
        //     (preState) => {
        //         return {
        //             totalValue: preState.totalValue - 1
        //         }
        //     }
        // )
    }


    render() {
        const initArray = [...Array(this.state.size).keys()];

        return <div>
            <label>Please input:
            <input onBlur={this.handleResetSize}></input>
            </label>
            <label>Total value:{this.state.totalValue}
            </label>
            {
                initArray.map(key => 
                <Counter onIncrease={this.handleIncrease} 
                onDecrease={this.handleDecrease} 
                   size={this.state.size} key={key} />
                )
            }

        </div>
    }

}
export default CounterGroup;