import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import Reducer from "./reducers.js";

/**
 * combine Reducers object
 * @description part of redux which combines all reducers
 */

let reducers = combineReducers({
  restyStore: Reducer
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;