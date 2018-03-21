function newReducer(state = {count: 0}, action) {
    switch(action.type) {
        case 'add':
        return {count: state.count + 6}
        case 'remove':
        return {count: state.count - 6}
        default:
        return state
      }
}


export default newReducer;