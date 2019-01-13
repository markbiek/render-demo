import React from 'react';

import Status from './Status';

export default class Header extends React.Component {
    render() {
        const { fetch } = this.props;

        return (
            <>
                <Status />
                <a href="#" onClick={fetch}>[refresh]</a>
            </>
        );
    }
}
