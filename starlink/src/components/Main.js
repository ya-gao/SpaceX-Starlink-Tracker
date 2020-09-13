import React, { Component } from 'react';
import axios from 'axios';

import { NEARBY_SATELLITE, SAT_API_KEY, STARLINK_CATEGORY } from '../constants';
import SatSetting from './SatSetting';
import SatelliteList from './SatelliteList';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            satInfo: null, 
            isLoadingList: false
        }
    }

    showNearbySatellite = setting => {
        this.setState({ isLoadingList: true });
        this.fetchSatellite(setting);
    }

    fetchSatellite = (setting) => {
        const { observerLat, observerLong, observerElevation, satAlt, duration } = setting;
        const url = `${NEARBY_SATELLITE}/${observerLat}/${observerLong}/${observerElevation}/${satAlt}/${STARLINK_CATEGORY}/&apiKey=${SAT_API_KEY}`;

        axios.get(url)
            .then(response => {
                console.log(response);
                this.setState({
                    satInfo: response.data,
                    isLoadingList: false
                });
            })
            .catch(err => {
                console.log('failed, ', err.message);
            })
    } 

    render() {
        const { isLoadingList, satInfo } = this.state;
        return (
            <div className="main">
                <div className="left-side">
                    <SatSetting onShow={this.showNearbySatellite} />
                    <SatelliteList isLoad={isLoadingList} satInfo={satInfo} />
                </div>
                
                <div className="right-side">right</div>
            </div>
        )
    }
}

export default Main;
