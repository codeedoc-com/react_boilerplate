import { combineReducers } from "redux";
import auth from "./AuthReducer";
const reducers = combineReducers({
  auth,
});

export default reducers;
