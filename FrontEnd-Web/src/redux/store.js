import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { appReducer } from "./appRedux";

const rootReducers = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
