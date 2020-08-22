import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import { loginReducer } from './reducer/authReducer';
import { orderReducer } from './reducer/orderReducer';
import { loadingReducer } from './reducer/loadingReducer';
// const config = {
//   key: 'root',
//   storage: AsyncStorage,
//   blacklist: ['loadingReducer'],
//   debug: true, //to get useful logging
// };

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  orderReducer: orderReducer,
  loadingReducer: loadingReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
