import axios from 'axios';

export const SET_FEATURES = 'SET_FEATURES';
export const SET_STATUS = 'SET_STATUS';
export const MAG_HOVER = 'MAG_HOVER';
export const MAG_HOVER_STOP = 'MAG_HOVER_STOP';

export const setMagHover = (feature) => {
    return {
        type: MAG_HOVER,
        feature,
    }
};

export const setMagHoverStop = () => {
    return {
        type: MAG_HOVER_STOP,
    }
};

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
