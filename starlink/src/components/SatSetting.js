import React, { Component } from "react";
import { InputNumber, Slider, Button } from "antd";

class SatSetting extends Component {
    constructor() {
        super();
        this.state = {
            observerLat: 0,
            observerLong: 0,
            observerElevation: 0,
            satAlt: 90,
            duration: [0, 90],
            isLoading: false
        }
    }

  onChangeLong = (value) => {
    this.setState({observerLong: value});
  };

  onChangeLat = (value) => {
    this.setState({observerLat: value});
  };

  onChangeEle = (value) => {
    this.setState({observerElevation: value});
  };

  onChangeAlt = (value) => {
    this.setState({satAlt: 90 - +value});
  };

  onDurationChange = (value) => {
    this.setState({duration: value});
  };

  showSatellite = () => {
    this.props.onShow(this.state);
  }

  render() {
    const durationMarkers = { 0: "0", 90: "90" };
    const { observerLat, observerLong, observerElevation, satAlt, duration } = this.state;
    return (
      <div className="sat-setting">
        <div className="loc-setting">
          <p className="setting-label">From Location</p>
          <div className="setting-list two-item-col">
            <div className="list-item">
              <label>Longitude: </label>
              <InputNumber
                min={-180}
                max={180}
                defaultValue={observerLong}
                style={{ margin: "0 2px" }}
                onChange={this.onChangeLong}
              />
            </div>

            <div className="list-item right-item">
              <label>Latitude: </label>
              <InputNumber
                min={-90}
                max={90}
                defaultValue={observerLat}
                style={{ margin: "0 2px" }}
                onChange={this.onChangeLat}
              />
            </div>
          </div>

          <div className="setting-list">
            <div className="list-item">
              <label>Elevation(meters): </label>
              <InputNumber
                min={-413}
                max={8850}
                defaultValue={observerElevation}
                style={{ margin: "0 2px" }}
                onChange={this.onChangeEle}
              />
            </div>
          </div>
        </div>

        <div className="altitude-setting">
          <p className="setting-label">Restriction</p>
          <div>
            <span>
              Show only satellites which are higher than <br /> Altitude: {" "}
            </span>
            <InputNumber
              min={0}
              max={90}
              defaultValue={satAlt}
              style={{ margin: "8px 2px 0" }}
              onChange={this.onChangeAlt}
            />
          </div>
        </div>

        <div className="duration-setting">
          <p className="setting-label">Duration(sec)</p>
          <Slider
            className="duration-slider"
            range
            step={1}
            defaultValue={duration}
            min={0}
            max={90}
            marks={durationMarkers}
            onChange={this.onDurationChange}
          />
        </div>

        <div className="show-nearby">
          <Button className="show-nearby-btn" size="large" onClick={this.showSatellite}>
            Find Nearby Satellites
          </Button>
        </div>
      </div>
    );
  }
}

export default SatSetting;
