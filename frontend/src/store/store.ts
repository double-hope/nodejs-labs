import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryAPI, goodAPI, userAPI } from "@/services";

const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
    [goodAPI.reducerPath]: goodAPI.reducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware()
                .concat(userAPI.middleware)
                .concat(goodAPI.middleware)
                .concat(categoryAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const store = setupStore();