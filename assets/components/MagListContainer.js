import React from 'react';
import { connect } from 'react-redux';

import MagList from './MagList';

class MagListContainer extends React.Component {
    render() {
        let { features, status } = this.props;

        features = features.toArray();

        if (!features.length) {
            return null;
        }

        console.log('MagListContainer:');

        return (
            <MagList features={features} />
        );
    }
}

const mapStateToProps = function (store) {
    return {
        features: store.testState.get('features'),
        status: store.testState.get('status'),
    }
};

export default connect(mapStateToProps)(MagListContainer);
