import { fromJS } from 'immutable';

import {
    SET_FEATURES,
    SET_STATUS,
    SET_RENDER,
} from './actions';

/** test Store **/
const testInitialState = fromJS({
    status: '',
    msg: '',
    features: [],
    render: {
        mag_list: null
    }
})

export const testReducer = function (state = testInitialState, action) {
    switch (action.type) {
        case SET_RENDER:
            const { render_type, render } = action;

            let newRender = state.get('render').toJS();
            newRender[render_type] = render;

            return state.set('render', newRender);

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
