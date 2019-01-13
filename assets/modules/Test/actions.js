import axios from 'axios';

export const SET_FEATURES = 'SET_FEATURES';
export const SET_STATUS = 'SET_STATUS';

export const setFeatures = features => {
    return {
        type: SET_FEATURES,
        features,
    }
};

export const setStatus = (status, msg = '') => {
    return {
        type: SET_STATUS,
        status,
        msg,
    }
};
