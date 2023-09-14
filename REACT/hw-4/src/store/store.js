import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import * as actions from "./actions";

const initialState = {
  collections: [],
  isModalOpen: false,
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case "SET_COLLECTIONS":
      return {
        ...store,
        collections: action.payload,
      };
    case "TOGGLE_MODAL":
      return {
        ...store,
        isModalOpen: !store.isModalOpen,
      };
  }
  return store;
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
