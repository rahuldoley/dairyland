import React, { Component } from "react";
import 'geolocation';
import Geocode from "react-geocode";

class Geolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    };
  }

    // API_KEY = "AIzaSyDPgro3zEX2S_L03NL6zPscIA-cYBVDE9s";

    // Geocode.setApiKey(API_KEY);
    // Geocode.setLanguage("en");
    // Geocode.setRegion("in");
    // Geocode.setLocationType("ROOFTOP");
    // Geocode.enableDebug();

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
      console.log("Location", position)
    });
  }

    
  render() {
    return (
      <div>
        <>
        </>
      </div>
    );
  }
}

export default Geolocation;                   