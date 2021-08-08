import {
    applyMiddleware, combineReducers, createStore, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {AuthReducer}from './../modules/auth/State/Reducers';

const reducers = combineReducers({
    auth: AuthReducer,
});
// Middleware
const middleware = () => applyMiddleware(thunk, logger);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default
createStore(
    reducers,
    {},
    composeEnhancers(middleware()),
);
