import store from "./store";
import * as actionCreators from "./actionCreators";

let tbody = document.querySelector('tbody');
let accountsBtn = document.querySelector('#accountsBtn');
let addAccountsBtn = document.querySelector('#addAccountsBtn');
let accountsView = document.querySelector('#accountsView');
let addAccountView = document.querySelector('#addAccountView');
let saveBtn = document.querySelector('#saveBtn');

window.addEventListener('load', () => {
    store.dispatch(actionCreators.START())
})

store.subscribe(function() {
    displayAccounts();
    changeView();
})

addAccountsBtn.addEventListener('click', function(){
    store.dispatch(actionCreators.DISPLAY_ADD_ACCOUNTS_ACTION())
})

accountsBtn.addEventListener('click', function() {
    store.dispatch(actionCreators.DISPLAY_ACCOUNTS_ACTION())
})

saveBtn.addEventListener('click', function () {
    store.dispatch(actionCreators.ADD_NEW_ACCOUNT({
        id: document.querySelector('[placeholder="id"]').value,
        name: document.querySelector('[placeholder="name"]').value,
        phone: document.querySelector('[placeholder="phone"]').value,
        email: document.querySelector('[placeholder="email"]').value
    }));
    store.dispatch(actionCreators.DISPLAY_ACCOUNTS_ACTION());
    document.querySelector('[placeholder="id"]').value="";
    document.querySelector('[placeholder="name"]').value="";
    document.querySelector('[placeholder="phone"]').value="";
    document.querySelector('[placeholder="email"]').value="";
})

function changeView() {
    let view = store.getState().displayData.display;
    if(view  == 1){
        accountsView.style.display = 'block';
        addAccountView.style.display = 'none';
    }else {
        accountsView.style.display = 'none';
        addAccountView.style.display = 'block';
    }
}

function displayAccounts() {
    let accounts = store.getState().accountsData.accounts;
    let text = ``;
    for (let i = 0; i < accounts.length; i++) {
        const account = accounts[i];
        text += `
            <tr>
                <td>${account.id}</td>
                <td>${account.name}</td>
                <td>${account.phone}</td>
                <td>${account.email}</td>
                <td><button class="btn btn-danger delete" data-id="${account.id}" >Delete</button></td>
            </tr>
        `
    }

    tbody.innerHTML = text;

    let allDeleteBtns = document.querySelectorAll('.delete');

    for (let i = 0; i < allDeleteBtns.length; i++) {
        const btn = allDeleteBtns[i];
        btn.addEventListener('click', deleteAccount)
    }
}

function deleteAccount() {
    let id = this.getAttribute('data-id');
    store.dispatch(actionCreators.DELETE_ACCOUNT_ACTION(id));
}