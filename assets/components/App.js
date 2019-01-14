import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from '../store';

import {
    setFeatures,
    setStatus,
    setRender,
} from '../modules/Test/actions';

import Header from './Header';
import Current from './Current';
import MagListContainer from './MagListContainer';
import TitleListContainer from './TitleListContainer';

//Lots of data
//const EARTHQUAKE_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';

//Minimal dataset
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
                dispatch(setRender('mag_list', true));
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
                        <Current />
                    </div>
                    <div className="container">
                        <MagListContainer />
                        <TitleListContainer />
                    </div>
                </>
            </Provider>
        );
    }
}
