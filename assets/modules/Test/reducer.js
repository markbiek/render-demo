import { fromJS } from 'immutable';

/** test Store **/
const testInitialState = fromJS({
})

export const testReducer = function (state = testInitialState, action) {
    switch (action.type) {
        default:
            return state;
    }

    return state;
}
