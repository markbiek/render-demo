import React from 'react';
import { connect } from 'react-redux';

class Current extends React.Component {
    render() {
        const { hover: feature} = this.props;

        if (!feature) {
            return null;
        }

        const {
            properties: {
                mag,
                place,
                url,
                type
            }
        } = feature;

        return (
            <>
                <h4>Current Item</h4>
                <p>Magnitude: {mag}</p>
                <p>Type: {type}</p>
                <p>Place: <a href={url}>{place}</a></p>
            </>
        );
    }
}

const mapStateToProps = function (store) {
    const hover = store.metaState.get('hover');

    return {
        hover: hover ? hover.toJS() : null,
    }
};

export default connect(mapStateToProps)(Current);
