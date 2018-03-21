import React, { Component } from 'react';
import {PropTypes} from 'prop-types'
import UseFour from './UseFour'

class UseThree extends Component {
  
  
render() {
    const {val} = this.props;

    return (
      <div>
        我是Use33: {val}
        <UseFour />
      </div>
    );
  }
}

UseThree.propTypes = {
    val: PropTypes.number,
  }

export default UseThree;
