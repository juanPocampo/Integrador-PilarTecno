import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { appReducer } from "./appRedux";
import { sectoresReducer } from "./Reducers/api.reducer";

const rootReducers = combineReducers({
  app: appReducer,
  sector: sectoresReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
