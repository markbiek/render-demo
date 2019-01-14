import { fromJS } from 'immutable';

import {
    MAG_HOVER,
    MAG_HOVER_STOP,
} from './actions';

/** meta Store **/
const metaInitialState = fromJS({
    hover: null,
})

export const metaReducer = function (state = metaInitialState, action) {
    switch (action.type) {
        case MAG_HOVER:
            return state.set('hover', fromJS(action.code));

        case MAG_HOVER_STOP:
            return state.set('hover', null);

        default:
            return state;
    }

    return state;
}
