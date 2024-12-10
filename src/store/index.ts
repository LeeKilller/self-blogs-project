import { configureStore } from "@reduxjs/toolkit/react";
import customReducer from "./modules/customSlice";
import adminReducer from "./modules/adminSlice";

const store = configureStore({
    reducer: {
        custom:customReducer,
        admin:adminReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;