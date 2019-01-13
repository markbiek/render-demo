import axios from 'axios';

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
