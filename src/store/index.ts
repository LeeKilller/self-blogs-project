import { configureStore } from "@reduxjs/toolkit/react";
import customReducer from "./modules/customSlice";

const store = configureStore({
    reducer: {
        custom:customReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;