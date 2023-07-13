import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/root-saga";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  // thunk,
  sagaMiddleware,
].filter(Boolean);

const persistConfig = {
  key: "root",
  storage, //default object for local storage
  // blackList: [userReducer],
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
