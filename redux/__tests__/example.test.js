// In an app like this, I would likely not do as much UI testing unless particular
// interactions required them (having an issue with a dropdown, for example).

// I would heavily test this Redux section. For example, if the "Redux" directory
// was broken up into actions, reducers, types for the different "sections" of the app
// (user, authentication, account, budget, transactions, etc.) then each action and reducer
// method would get a test.

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import * as types from '../types';
import fetchMock from 'fetch-mock';
import expect from 'expect'; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches RECEIVE_TRANSACTIONS after successfully completing a call for transactions', () => {
    fetchMock.getOnce('/account/transactions', {
      // details, options for the actual api call
    });

    const expectedActions = [
      { type: types.REQUEST_TRANSACTIONS },
      { type: types.RECEIVE_TRANSACTIONS, body: { transactions: [] } },
    ];
    const store = mockStore({ transactions: [] });

    return store.dispatch(actions.fetchTransactions()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
