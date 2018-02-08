import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
const history = createHistory();
const loggerMiddleware = createLogger();


export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        promiseMiddleware(),
        routerMiddleware(history)
    )
);
