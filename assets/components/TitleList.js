import React from 'react';
import { connect } from 'react-redux';

class TitleList extends React.Component {
    render() {
        const { features, status } = this.props;

        if (!features.length) {
            return null;
        }

        return (
            <>
                <ul className="col list">
                    {
                        features.map((feature, idx) => {
                            const { properties: { title } } = feature;

                            return (
                                <li key={`mag_${idx}`}>
                                    { title }
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

export default connect(mapStateToProps)(TitleList);
