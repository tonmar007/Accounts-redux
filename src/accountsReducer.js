import { accountsState } from "./initialState";
import * as actions from "./actionTypes";

function accountsReducer(state = accountsState, action) {
    switch (action.type) {
        case actions.START:
            return state;
        case actions.ADD_NEW_ACCOUNT:
            return {
                ...state,
                accounts: [...state.accounts, action.payload.newAccount]
            }
        case actions.DELETE_ACCOUNT:
            let filteredAccounts = state.accounts.filter(account => {
                return account.id !== action.payload.id;
            })
            return {
                ...state,
                accounts: filteredAccounts
            }
        default:
            return state;
    }
}

export default accountsReducer;