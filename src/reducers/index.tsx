import { combineReducers } from "redux";

import bookManager from "./storage";

const allReducers = combineReducers({
  bookManager: bookManager
  //Leave some place for more reducers in the future
});

export default allReducers;
