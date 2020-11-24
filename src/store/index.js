import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer.js";
import thunk from "redux-thunk";

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhacers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);
export default store;
