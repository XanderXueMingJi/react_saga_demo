import React, { Component } from 'react';
import {PropTypes} from 'prop-types'

class UseFour extends Component {
  
  
render() {
    const {val} = this.props;

    return (
      <div>
        <h1>我是four：{val}</h1>
      </div>
    );
  }
}

UseFour.propTypes = {
  val: PropTypes.number,
}

export default UseFour;
