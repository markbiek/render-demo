import React from 'react';
import { connect } from 'react-redux';

class MagList extends React.Component {
    render() {
        const { features, status } = this.props;

        if (status != 'complete') {
            return null;
        }

        return (
            <>
                <ul className="col">
                    {
                        features.map((feature, idx) => {
                            const { properties: { mag, type} } = feature;

                            return (
                                <li key={`mag_${idx}`}>
                                    { mag } &mdash; { type }
                                </li>
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
