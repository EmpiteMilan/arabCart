import {combineReducers} from 'redux';
import globalReducer from './global.reducer';
import signInReducer from '../modules/user/signIn/signIn.reducer';

export default combineReducers({
  globalReducer: globalReducer,
  signInReducer: signInReducer,
});
