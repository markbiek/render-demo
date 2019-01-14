import axios from 'axios';

export const SET_FEATURES = 'SET_FEATURES';
export const SET_STATUS = 'SET_STATUS';
export const SET_RENDER = 'SET_RENDER';

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

export const setRender = (render_type, render) => {
    return {
        type: SET_RENDER,
        render_type,
        render,
    }
}
