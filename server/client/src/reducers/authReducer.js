import { FETCH_USER } from '../actions/types';
//The reducer is a pure function that takes the previous state and an action, and returns the next state.
/**
 * state=null shows that we do not know that we still do not know that user is logedin or not,
 * for slow internet we do not want to chage what user see if we have default value. so we have 3 state here,
 * 1. we do not know the  user is loggedin or not
 * 2. user is loggedin
 * 3. user is not loggedin
 */
export default function(state = null, action) {
  console.log(action);

  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
