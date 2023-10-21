import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { productReducer } from "./productReducer";

export const reducers = combineReducers({
  global: globalReducer,
  product: productReducer,
});
