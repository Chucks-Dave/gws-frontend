// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { authSlice, AuthState } from "./slice/authSlice";

import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

// export const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer,
//     // other slices
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

const persistConfig: PersistConfig<AuthState> = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer<AuthState>(
  persistConfig,
  authSlice.reducer
);

export const store = configureStore({
  reducer: {
    // You can add additional slices here if needed
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
