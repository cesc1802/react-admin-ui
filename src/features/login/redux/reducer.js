import initialState from './init-state';
import { reducer as authReducer } from './authentication';

const reducers = [authReducer];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
  }

  return reducers.reduce((s, r) => r(s, action), newState);
}
