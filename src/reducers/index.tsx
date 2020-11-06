import { combineReducers } from "redux";
import bookManager from "./storage";

const allReducers = combineReducers({
  bookManager: bookManager
});

export default allReducers;
