import React from 'react';
import { connect } from 'react-redux';

class Current extends React.Component {
    render() {
        const { hover } = this.props;

        if (!hover) {
            return null;
        }

        return (
            <p>{hover}</p>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        hover: store.metaState.get('hover'),
    }
};

export default connect(mapStateToProps)(Current);
