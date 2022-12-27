import {configureStore} from "@reduxjs/toolkit";
import {githabApi} from "./githab/githab.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {githabReducer} from "./githab/githab.slice";

export const store = configureStore({
    reducer: {
        [githabApi.reducerPath]: githabApi.reducer,
        githab: githabReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githabApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>