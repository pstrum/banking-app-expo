// This file would get big quickly. It does a lot of what I would typically
// put into multiple API Services or Providers (in a dependency injection type of app).
import {
  SELECT_ACCOUNT,
  REQUEST_TRANSACTIONS,
  RECEIVE_TRANSACTIONS,
  ERROR_TRANSACTIONS,
} from './types';

export const selectAccount = (account: any) => ({
  type: SELECT_ACCOUNT,
  account,
});

export const requestTransactions = (account: string) => ({
  type: REQUEST_TRANSACTIONS,
  account,
});

export const receiveTransactions = (account: string, data: any) => ({
  type: RECEIVE_TRANSACTIONS,
  account,
  name: data.name,
  balance: data.balance,
  transactions: data.transactions,
  topSpending: calculateTopSpending(data.transactions),
  receivedAt: Date.now(),
});

export const error_Transactions = (error: { message: any }) => ({
  type: ERROR_TRANSACTIONS,
  error: error.message || 'Could not load account transactions',
});

const fetchTransactions = (account: string) => {
  return function (
    dispatch: (arg0: {
      type: string;
      account: any;
      name?: string;
      balance?: number;
      transactions?: any;
      topSpending?: Array<any>;
      receivedAt?: number;
    }) => void
  ) {
    dispatch(requestTransactions(account));
    return fetch(account)
      .then(
        () => {
          // Return mock data for now
          const transactions = {
            transactions: require('../mocks/transactions.response.json'),
          };
          const account = require('../mocks/account.response.json');
          return Object.assign(account, transactions);
        }
        // (response) => response.json(),
        // (error) => handleError('An error occurred.', error)
      )
      .then((json) => dispatch(receiveTransactions(account, json)));
  };
};

const shouldFetchTransactions = (
  state: { transactionsByAccount: { [x: string]: any } },
  account: string
) => {
  const transactions = state.transactionsByAccount[account];
  if (!transactions) {
    return true;
  } else {
    return false;
  }
};

// If we are asking the frontend to do the the calculating for top spending,
// then I would probably put this in a View Model, generally. I don't think "actions"
// is the right spot for it.
const calculateTopSpending = (transactions: any[]) => {
  const categories: { [key: string]: { count: number; total: number } } = {};
  const categoriesArray: Array<[string, number, number]> = [];

  transactions.map((transaction) => {
    if (transaction.category in categories) {
      categories[transaction.category].count =
        categories[transaction.category].count + 1;
      categories[transaction.category].total += transaction.amount;
    } else {
      categories[transaction.category] = {
        count: 1,
        total: transaction.amount,
      };
    }
  });

  for (var category in categories) {
    if (categories[category].total <= 0) {
      categoriesArray.push([
        category,
        categories[category].count,
        categories[category].total,
      ]);
    }
  }

  categoriesArray.sort(function (a, b): number {
    return a[2] - b[2];
  });

  return [
    { category: categoriesArray[0][0], amount: categoriesArray[0][2] },
    { category: categoriesArray[1][0], amount: categoriesArray[1][2] },
    { category: categoriesArray[2][0], amount: categoriesArray[2][2] },
  ];
};

export const fetchTransactionsIfNeeded = (account: string) => {
  return (
    dispatch: (
      arg0: (
        dispatch: (arg0: {
          type: string;
          account: any;
          name?: string;
          balance?: number;
          transactions?: any;
          topSpending?: any;
          receivedAt?: number | undefined;
        }) => void
      ) => Promise<void>
    ) => any,
    getState: () => { transactionsByAccount: { [x: string]: any } }
  ) => {
    if (shouldFetchTransactions(getState(), account)) {
      return dispatch(fetchTransactions(account));
    }
  };
};
