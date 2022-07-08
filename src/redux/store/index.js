import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import localStorage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "Naveen9698",
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, favouritesReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
