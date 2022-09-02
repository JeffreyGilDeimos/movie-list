import { configureStore } from "@reduxjs/toolkit";
import reducerMovie from "./reducers/reducerMovie";
import updateReducer from './reducers/updateReducer';

export const store = configureStore({
    reducer: {     
        Movies: reducerMovie,
        update: updateReducer
    },
});