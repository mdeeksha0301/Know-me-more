import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootSlice from "./rootSlice";
// import rootReducer from './reducers';

const reducer = combineReducers({
    root: rootSlice,
});

const store = configureStore({
    reducer,
    // other configuration options if needed
});

export default store;
