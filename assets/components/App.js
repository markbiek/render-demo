import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from '../store';

import {
    setFeatures,
    setStatus,
} from '../modules/Test/actions';

import Header from './Header';
import MagList from './MagList';
import TitleList from './TitleList';

//const EARTHQUAKE_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';
const EARTHQUAKE_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

const { dispatch } = store;

export default class App extends React.Component {
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        dispatch(setStatus('loading'));   

        axios.get(EARTHQUAKE_URL)
            .then(resp => {
                const { data: { features } } = resp;

                dispatch(setFeatures(features));
                dispatch(setStatus('complete'));   
            })
            .catch(e => {
                dispatch(setStatus('error', e));   
            });
    }

    render() {
        return (
            <Provider store={store}>
                <>
                    <h1>Render Test</h1>
                    <Header fetch={this.fetchData} />
                    <div className="container">
                        <MagList />
                        <TitleList />
                    </div>
                </>
            </Provider>
        );
    }
}
