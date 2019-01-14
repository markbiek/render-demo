import React from 'react';
import PropTypes from 'prop-types';

import store from '../store';

import {
    setMagHover,
    setMagHoverStop
} from '../modules/Meta/actions';

const { dispatch } = store;

const MagListItem = ({mag, type, code}) => {
    const mouseEnter = () => {
        dispatch(setMagHover(code));
    }

    const mouseLeave = () => {
        dispatch(setMagHoverStop());
    }

    return (
        <li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            { mag } &mdash; { type }
        </li>
    );
};

MagListItem.propTypes = {
    mag: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};

export default MagListItem;
