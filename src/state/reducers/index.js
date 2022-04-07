import amountReducer from "./amountReducer";
import {combineReducers } from "redux";

export const reducers=combineReducers({
    amoumt:amountReducer
})