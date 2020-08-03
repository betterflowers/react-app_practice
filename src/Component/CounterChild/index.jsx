import React from 'react';
import PropTypes from 'prop-types'

class CounterChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, totalValue: 0 }
    }



    render() {
      const { value, onIncrement, onDecrement } = this.props
        return (<div>
        
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

CounterChild.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default CounterChild;