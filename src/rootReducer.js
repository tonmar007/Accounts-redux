import accountsReducer from "./accountsReducer";
import displayReducer from "./displayReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    accountsData: accountsReducer,
    displayData: displayReducer
})