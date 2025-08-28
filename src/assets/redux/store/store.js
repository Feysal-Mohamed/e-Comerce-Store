import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlices from "../reducer/orderList";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartSlices,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
