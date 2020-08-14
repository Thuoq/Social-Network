import {createStore,applyMiddleware} from 'redux';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {fetchChattingUserStart} from './chatting/chatting.sagas';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer,applyMiddleware(...middlewares));
sagaMiddleware.run(fetchChattingUserStart);