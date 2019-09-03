import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

/**
 * the goal og action creator is too return an action that is sent to all reducers
 * which then produce new values for state and update that state in our redux store
 * the redux store then send newly updated state back to all react componenets.
 * REDUX THUNK: the entierly purpose of it is to allow us to write action creators
 * and not immidiatly return an action from our action creator.
 * it means the action is going to passing the action to what we call dispatch function.
 * this dispach function is belogns to the redux store, if we call it with an action, it will
 * automatically forwarded to all the reducers.
 * so this reduxThunk is giving us the direct access to the dispatch function. we can use to
 * bend the rules here and manually dispatch an action any time we wish from an action creator.
 * we pass reduxThunk as middleware in below, if redux thunk sees that we are returnin function
 * instead of a notmal action like in /actions/index fetchUser it will automatically call that function
 * and pass in that dispatch function as an argument
 */
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

//the path is from npm_module folder
import 'materialize-css/dist/css/materialize.min.css';
import '../src/components/styles/styles.css';

//this is react store
var store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//Provider is a react component that know how to read changes  from data store,
// any time store get some new state inside of it the PROVIDER will inform all
// of his children components(like <App/>)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
