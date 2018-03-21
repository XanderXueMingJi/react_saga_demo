import React, { Component } from "react";
import { PropTypes } from "prop-types";
import UseThree from "./UseThree";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./reduxMap";
class UseTwo extends Component {
  render() {
    const UseThreeHtml = connect(mapStateToProps, mapDispatchToProps)(UseThree);
    const { val, onaddFn, onremove } = this.props;

    return (
      <div>
        <h1>我是UseTwo:{val}</h1>
        <button onClick={onaddFn}> + 6 </button>
        <button onClick={onremove}> - 6 </button>
          <UseThreeHtml />
      </div>
    );
  }
}

UseTwo.propTypes = {
  val: PropTypes.number,
  onaddFn: PropTypes.func,
  onremove: PropTypes.func,
};

export default UseTwo;
