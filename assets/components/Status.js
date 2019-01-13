import React from 'react';
import { connect } from 'react-redux';

class Status extends React.Component {
    render() {
        const { status, msg } = this.props;

        return (
            <>
                <h3>{ status }</h3>
                <p>{ msg }</p>
                <hr />
            </>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        status: store.testState.get('status'),
        msg: store.testState.get('msg'),
    }
};

export default connect(mapStateToProps)(Status);
