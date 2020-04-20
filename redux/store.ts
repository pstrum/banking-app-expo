import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

export default function configureStore(
  preloadedState?:
    | {
        selectedAccount?: any;
        transactions?: { isFetching: boolean; items: never[] } | undefined;
      }
    | undefined
) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}
