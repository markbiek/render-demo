import React from 'react';
import { connect } from 'react-redux';

import TitleList from './TitleList';

class TitleListContainer extends React.Component {
    render() {
        let { features } = this.props;

        features = features.toArray();

        if (!features.length) {
            return null;
        }

        console.log('TitleListContainer:');

        return (
            <TitleList features={features} />
        );
    }
}

const mapStateToProps = function (store) {
    return {
        features: store.testState.get('features'),
    }
};

export default connect(mapStateToProps)(TitleListContainer);
