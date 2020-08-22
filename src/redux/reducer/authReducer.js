import * as types from '../types';

import createReducer from './createReducer';
const initialState = {
  id: 0,
  username: '',
  password: '',
  isLoggedIn: false,
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
});
