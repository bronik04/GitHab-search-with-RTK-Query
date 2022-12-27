import {configureStore} from "@reduxjs/toolkit";
import {githabApi} from "./githab/githab.api";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [githabApi.reducerPath]: githabApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githabApi.middleware)
})

setupListeners(store.dispatch);