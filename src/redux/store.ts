import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

import { apiSlice } from "./api/api.slice";
import AuthReducer from "./features/auth/auth.slice";
import UserReducer from "./features/user/user.slice";

const reducers = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
  //...
  key: "root",
  storage: AsyncStorage,
  // blacklist: [apiSlice.reducerPath], // usually not recommended, but in this case i.e. Native App Environment where there is no browser cache to take care of this, persistance might still be a viable option https://redux-toolkit.js.org/rtk-query/usage/persistence-and-rehydration
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        warnAfter: 128,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
      },
      immutableCheck: { warnAfter: 128 },
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
setupListeners(store.dispatch);
