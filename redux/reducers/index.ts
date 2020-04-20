// In a large app, I would probably break these up by domain: Account, Budget, Transactions, etc.
// Maybe even the entire Redux directory currently in this project would have separate User,
// Acount, Session, Auth, etc. directories for their actions, reducers, and types.

import { combineReducers } from 'redux';
import {
  SELECT_ACCOUNT,
  REQUEST_TRANSACTIONS,
  RECEIVE_TRANSACTIONS,
  ERROR_TRANSACTIONS,
} from '../types';

const selectedAccount = (state = 'My Checking Account', action: any) => {
  switch (action.type) {
    case SELECT_ACCOUNT:
      return action.account;
    default:
      return state;
  }
};

const transactionsByAccount = (
  state: any = {},
  action: { type: any; account: string }
) => {
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
    case REQUEST_TRANSACTIONS:
      const accountState: { isFetching: boolean; items: [] } =
        state[action.account];
      return Object.assign({}, state, {
        [action.account]: transactions(accountState, action),
      });
    default:
      return state;
  }
};

const transactions = (
  state = {
    isFetching: false,
    items: [],
  },
  action: any
) => {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_TRANSACTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        name: action.name,
        balance: action.balance,
        items: action.transactions,
        topSpending: action.topSpending,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
};

export default combineReducers({ selectedAccount, transactionsByAccount });
