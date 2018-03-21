
const addAction = {type: 'add'};
const removeAction = {type: 'remove'}
function mapStateToProps(state) {
    return {
      val: state.count
    }
  };

  function mapDispatchToProps(dispatch) {
    return {
      onaddFn: () => dispatch(addAction),
      onremove: () => dispatch(removeAction)
    }
  }

 export  {mapStateToProps, mapDispatchToProps};