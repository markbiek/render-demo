import { createStore, combineReducers, applyMiddleware } from 'redux';

import { testReducer } from './modules/Test/reducer';

const reducers = combineReducers({
    testState: testReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
