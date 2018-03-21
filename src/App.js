import React, { Component } from 'react';
import './App.css';
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {helloSaga} from './components/sagas'

import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import Counter from './components/Counter'
import Show from './components/Show'
import Use from './components/Use'

class App extends Component {
  
  
render() {
    
// Action 功能
const increaseAction = { type: 'increase' };
const removeAction = {type: 'remove'};

// Reducer 减速机
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    case 'remove':
      return {count: count - 1};  
    default:
      return state
  }
}

// Store 商店
// const store = createStore(counter);
// const store = createStore(counter, applyMiddleware(createSagaMiddleware(logger)) )
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  counter,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(helloSaga)

    // Map Redux state to component props 将Redux状态映射到组件  值
function mapStateToProps(state) {
  return {
    value: state.count 
  }
}

// Map Redux actions to component props  将Redux的动作映射到组件上  动作
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onRemoveClick: () => dispatch(removeAction)
  }
}
    const Coun = connect(mapStateToProps, mapDispatchToProps)(Counter);
    const Sho = connect(mapStateToProps, mapDispatchToProps)(Show);
    return (
      <div>
        <Provider store={store}>
          <Coun />
        </Provider>
        <Provider store={store}>
          <Sho />
        </Provider>
        <Use />
      </div>
    );
  }
}

export default App;
