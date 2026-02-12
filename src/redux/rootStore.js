import { api } from './api';
import { combineReducers } from 'redux';

export default combineReducers({
  [api.reducerPath]: api.reducer,
});