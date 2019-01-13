import { createStore, combineReducers, applyMiddleware } from 'redux';

import { testReducer } from './modules/Test/reducer';
import { metaReducer } from './modules/Meta/reducer';

const reducers = combineReducers({
    testState: testReducer,
    metaState: metaReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
