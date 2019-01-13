import { fromJS } from 'immutable';

import {
    SET_FEATURES,
    SET_STATUS,
} from './actions';

/** test Store **/
const testInitialState = fromJS({
    status: '',
    msg: '',
    features: [],
})

export const testReducer = function (state = testInitialState, action) {
    switch (action.type) {
        case SET_STATUS:
            const { status, msg } = action;

            return state.set('status', status)
                        .set('msg', msg);
        case SET_FEATURES:
            const { features } = action;

            return state.set('features', fromJS(features));

        default:
            return state;
    }

    return state;
}
