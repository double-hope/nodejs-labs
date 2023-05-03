import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryAPI, goodAPI, authAPI } from "@/services";

const rootReducer = combineReducers({
    [goodAPI.reducerPath]: goodAPI.reducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware()
                .concat(goodAPI.middleware)
                .concat(categoryAPI.middleware)
                .concat(authAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const store = setupStore();