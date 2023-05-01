import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryAPI, goodAPI, userAPI } from "@/services";

const rootResucer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
    [goodAPI.reducerPath]: goodAPI.reducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootResucer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(userAPI.middleware).concat(goodAPI.middleware).concat(categoryAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootResucer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];