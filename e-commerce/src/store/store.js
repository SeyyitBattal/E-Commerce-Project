import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

function reducer() {
  return {
    title: "Merhaba Redux!",
  };
}

export const store = createStore(reducer, applyMiddleware(thunk));
