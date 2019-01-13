import { fromJS } from 'immutable';

import {
    SET_FEATURES,
    SET_STATUS,
    MAG_HOVER,
    MAG_HOVER_STOP,
} from './actions';

/** test Store **/
const testInitialState = fromJS({
    status: '',
    msg: '',
    features: [],
    hover: null,
})

export const testReducer = function (state = testInitialState, action) {
    switch (action.type) {
        case MAG_HOVER:
            return state.set('hover', fromJS(action.feature));

        case MAG_HOVER_STOP:
            return state.set('hover', null);

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
