import axios from 'axios';

export const MAG_HOVER = 'MAG_HOVER';
export const MAG_HOVER_STOP = 'MAG_HOVER_STOP';

export const setMagHover = (code) => {
    return {
        type: MAG_HOVER,
        code,
    }
};

export const setMagHoverStop = () => {
    return {
        type: MAG_HOVER_STOP,
    }
};
