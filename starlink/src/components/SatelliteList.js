import React, { Component } from 'react';
import { Button, Spin } from 'antd';

class SatelliteList extends Component {
    render() {
        const { satInfo, isLoad } = this.props;
        const satList = satInfo ? satInfo.above : [];

        return (
            <div className="sat-list-box">
                <Button className="sat-list-btn" size="large">
                    Track on the map
                </Button>
                <hr />

                {
                    isLoad ? 
                        <div className="spin-box">
                            <Spin tip="Loading..." ize="large" />
                        </div> 
                        :
                        <div>data</div>
                }
            </div>
        )
    }
}

export default SatelliteList;
