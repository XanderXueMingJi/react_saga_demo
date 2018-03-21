import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Show extends Component {
  render() {
      const {value} = this.props;
    return (
      <div>
        <h3>{value}</h3>
      </div>
    );
  }
}

Show.propTypes  = {
    value: PropTypes.number.isRequired,
}



export default Show;
