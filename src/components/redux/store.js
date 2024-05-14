import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice';
import useReducer from "./slices/userSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: useReducer
    },
});

export default store;