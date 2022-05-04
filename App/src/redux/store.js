import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { appReducer } from "./appRedux";
import { sectoresReducer, userReducer } from "./Reducers/api.reducer";

const rootReducers = combineReducers({
  app: appReducer,
  sector: sectoresReducer,
  user: userReducer,
});

const store = createStore(
  rootReducers,
  compose(applyMiddleware(thunk, logger))
);

export { store };
