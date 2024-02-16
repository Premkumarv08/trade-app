import { configureStore } from "@reduxjs/toolkit";
import { tradeApi } from "./query/tradeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [tradeApi.reducerPath]: tradeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tradeApi.middleware),
});

setupListeners(store.dispatch);
