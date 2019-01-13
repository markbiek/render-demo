import React from 'react';

import store from '../store';
import {
    setMagHover,
    setMagHoverStop
} from '../modules/Meta/actions';

const { dispatch } = store;

export default class MagListItem extends React.Component {
    constructor(props) {
        super(props);

        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    mouseEnter() {
        const { feature } = this.props;

        dispatch(setMagHover(feature));
    }

    mouseLeave() {
        dispatch(setMagHoverStop());
    }

    render() {
        const { 
                feature: { 
                    properties: { 
                        mag, type
                    }
                }
              } = this.props;

        return (
            <li onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                { mag } &mdash; { type }
            </li>
        );
    }
}
