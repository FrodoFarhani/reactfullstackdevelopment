import axios from 'axios';
import { FETCH_USER } from './types';

/* export const fetchUser = () => {
  //dispatch is a function sent by redux thunk (read index comment)
  /**
   * here we want to dispatch our action after our api call done successfuly,
   * this is what redux thunk give to us!
   
  return function(dispatch) {
    //we define in setupProxy file /api/*
    axios.get('/api/current_user').then(res =>
      dispatch({
        type: FETCH_USER,
        payload: res
      })
    );
  };
}; */

/**
 * we want to rewrite above code using es6 features and do not use promis!
 * when arrow function returns something is a single line of code
 * we cad delete the {} and also return keyword.
 * then we remove function keyword and create arrow function.
 * we cal eliminate () for dispatch because this is just a single argument.
 *
 */
export const fetchUser = () => async dispatch => {
  var res = await axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};
