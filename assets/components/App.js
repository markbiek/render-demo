import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <>
                    <h1>Render Test</h1>
                </>
            </Provider>
        );
    }
}
