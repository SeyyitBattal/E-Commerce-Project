import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";

export const reducers = combineReducers({
  global: globalReducer,
});
