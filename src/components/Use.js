import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './sagas'
import UseTwo from './UseTwo'
import newReducer from './reducer'
import {mapStateToProps, mapDispatchToProps} from './reduxMap'

class Use extends Component {
 

  
  
render() {
  
  // const store = createStore(newReducer);
  const store = createStore(
    newReducer,
    applyMiddleware(createSagaMiddleware(helloSaga))
  );
  const UseTwoHtml = connect(mapStateToProps, mapDispatchToProps)(UseTwo);
  
    return (
      <div>
        我是user
        <Provider store={store}>
          <UseTwoHtml />
        </Provider>

      </div>
    );
  }
}

export default Use;
