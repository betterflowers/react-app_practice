import React from 'react';
import Counter from '../Counter';
import store from "../Store";

class CounterGroup extends React.Component {

    onIncrement = () => {
        store.dispatch({
            type: "increment"
        });
    };

    onDecrement = () => {
        store.dispatch({
            type: "decrement"
        });
    };

    onMakeZero = () => {
        store.dispatch({
            type: 'makeZero'
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            CounterNum: 1,
            total: store.getState()
        }
    }

    generatorCounter = () => {
        return new Array(this.state.CounterNum).fill(0).map((value, index) =>
            <Counter key={index} counter-increase={this.handleIncrease} counter-decrease={this.handleDecrease}
                     CounterNum={this.state.CounterNum}/>
        )
    };

    render() {
        return <div>
            CountNum:<input type='text' value={this.state.CounterNum} onChange={this.changeCountNum}/>
            <br/>
            Total:<input type='text' value={store.getState()} readOnly/>
            {this.generatorCounter()}
        </div>
    }

    handleIncrease = () => {
        this.onIncrement()
        store.subscribe(() =>
            this.setState({
                total: store.getState()
            })
        );
    };

    handleDecrease = () => {
        this.onDecrement()
        store.subscribe(() =>
            this.setState({
                total: store.getState()
            })
        );
    };

    changeCountNum = (e) => {
        if (e.target.value.match(/[0-9]+/g)) {
            this.setState({
                CounterNum: parseInt(e.target.value),
            });
            this.onMakeZero()
        } else {
            this.setState({
                CounterNum: 0
            });
            this.onMakeZero()
        }
    };

}

export default CounterGroup



// class CounterGroup extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { size: 0, totalValue: 0 }
//     }

//     handleResetSize = (event) => {
//        const newSize = event.target.value ? parseInt(event.target.value) : 0;
//        if(newSize !== this.state.size){
//         this.setState({
//             size: event.target.value? parseInt(event.target.value) : 0,
//             totalValue:0
//         });   
//        }  
//     }

//     handleIncrease = () => {
//         this.setState(
//             (preState) =>
//                 ({
//                     totalValue: preState.totalValue + 1
//                 })
//         )
//     }

//     handleDecrease = () => {
//         this.setState(
//             (preState) =>
//                 ({
//                     totalValue: preState.totalValue - 1
//                 })
//         )
//     }


//     render() {
//         const initArray = [...Array(this.state.size).keys()];

//         return <div>
//             <label>Please input:
//             <input onBlur={this.handleResetSize}></input>
//             </label>
//             <label>Total value:{this.state.totalValue}
//             </label>
//             {
//                 initArray.map(key => 
//                 <Counter onIncrease={this.handleIncrease} 
//                 onDecrease={this.handleDecrease} 
//                    size={this.state.size} key={key} />
//                 )
//             }

//         </div>
//     }

// }
// export default CounterGroup;