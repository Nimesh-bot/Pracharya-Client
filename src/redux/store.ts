import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";

import { apiSlice } from "./api/api.slice";
import AuthReducer from "./features/auth/auth.slice";
import { profileApi } from "./features/profile/profileApi.slice";
import { threadApi } from "./features/thread/threadApi.slice";

const reducers = combineReducers({
  auth: AuthReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  [threadApi.reducerPath]: threadApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
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
    })
    .concat(apiSlice.middleware)
    .concat(threadApi.middleware)
    .concat(profileApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
// To clear the persisted data and scheduled notifications, uncomment the following line
// persistor.purge();
// cancelAllPushNotifications();

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);