//combine reducers from auth and error into one using Redux's combineReducers

import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
