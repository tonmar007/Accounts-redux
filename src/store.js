import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { rootReducer } from "./rootReducer";

// const myFunc = function (store) {
//     return function (next) {
//         return function (action) {
//             console.log('STATE BEFORE ', store.getState());
//             console.log('ACTION ', action);
//             next(action);
//             console.log('STATE AFTER ', store.getState());
//         }
//     }
// }

// const myFunc2 = function (store) {
//     return function (next) {
//         return function (action) {
//             console.log("Milan");
//             next(action)
//         }
//     }
// }

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;