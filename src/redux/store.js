import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import filterReducer from "./filterSlice";
import { launchesApi } from "./apiSlice";
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [launchesApi.reducerPath]: launchesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(launchesApi.middleware),
});

setupListeners(store.dispatch);
