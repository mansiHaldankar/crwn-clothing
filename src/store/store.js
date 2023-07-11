import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

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

export const persistor = persistStore(store);
