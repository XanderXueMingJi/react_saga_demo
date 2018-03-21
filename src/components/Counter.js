import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Counter extends Component {
  render() {
      const {value, onIncreaseClick, onRemoveClick} = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={onIncreaseClick}> + 1 </button>
        <button onClick={onRemoveClick}> - 1</button>
      </div>
    );
  }
}

Counter.propTypes  = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
}



export default Counter;
