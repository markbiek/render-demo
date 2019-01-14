import React from 'react';
import { connect } from 'react-redux';

import MagListItem from './MagListItem';

class MagList extends React.Component {
    render() {
        const { features, status } = this.props;

        if (!features.length) {
            return null;
        }

        console.log('');
        console.log('MagList:');

        return (
            <>
                <ul className="col list">
                    {
                        features.map((feature, idx) => {
                            const { properties: { mag, type} } = feature;

                            return (
                                <MagListItem key={`mag_${idx}`} feature={feature} />
                            );
                        })
                    }
                </ul>
            </>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        features: store.testState.get('features').toJS(),
        status: store.testState.get('status'),
    }
};

export default connect(mapStateToProps)(MagList);
