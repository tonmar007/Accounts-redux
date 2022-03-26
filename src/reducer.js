import initState from "./initialState";
import * as actions from "./actionTypes";

function reducer(state = initState, action) {
    switch (action.type) {
        case actions.START:
            return state;
        case actions.DISPLAY_ACCOUNTS_ACTION:
            return { ...state, display: 1 }
        case actions.DISPLAY_ADD_ACCOUNTS_ACTION:
            return { ...state, display: 2 }
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

export default reducer;