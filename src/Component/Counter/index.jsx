import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Counter extends Component {
  constructor(props) {
    super(props)
    
  }

//   handleResetSize = (event) => {
//     const newSize = event.target.value ? parseInt(event.target.value) : 0;
//     if(newSize !== this.state.size){
//      this.setState({
//          size: event.target.value? parseInt(event.target.value) : 0,
//          totalValue:0
//      });   
//     }  
//  }

  render() {
    
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        <label>Please input:
            {/* <input onBlur={handleResetSize}></input> */}
            </label>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
      </div>
      
    )
  }
}



Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter