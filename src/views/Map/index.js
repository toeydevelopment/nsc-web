import React from "react";
import { connect } from "react-redux";
import { getLatLngFromPolygon } from "redux/actions/map";
import "./style.css";
const { compose, withProps } = require("recompose");
const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");
const {
  DrawingManager
} = require("react-google-maps/lib/components/drawing/DrawingManager");

const APIKEY = "AIzaSyDcQuKNglsyCMnwfhOksxxvI8B-ArSaBt4";
const google = window.google;

const MapWithADrawingManager = props => {
  function iterateLatLngs(polygon) {
    const latlngs = [];
    for (var i = 0; i < polygon.getPath().getLength(); i++) {
      const splited = polygon
        .getPath()
        .getAt(i)
        .toUrlValue(6)
        .split(",");
      latlngs.push({
        lat: splited[0],
        lng: splited[1]
      });
    }
    props.getLatLngs(latlngs);
  }

  return (
    <div>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={new google.maps.LatLng(-34.397, 150.644)}
      >
        <DrawingManager
          onPolygonComplete={iterateLatLngs}
          defaultOptions={{
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [google.maps.drawing.OverlayType.POLYGON]
            },
            circleOptions: {
              fillColor: `#ffff00`,
              fillOpacity: 1,
              strokeWeight: 5,
              clickable: false,
              editable: true,
              zIndex: 1
            }
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${APIKEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: (
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ),
    containerElement: (
      <div
        style={{
          height: `100%`,
          width: "100%",
          display: "flex",
          flexDirection: "column-reverse"
        }}
      />
    ),
    mapElement: (
      <div
        style={{
          height: `85vh`,
          width: "75vw",
          margin: "auto",
          display: "block",
          // border: "5px solid #9E9E9E",
          borderRadius: "0.5rem",
          boxShadow:
            "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          transition: " all 0.3s cubic-bezier(.25,.8,.25,1)"
        }}
      ></div>
    )
  }),
  withScriptjs,
  withGoogleMap,
  connect(
    ({ map }) => ({ data: map }),
    dispatch => ({
      getLatLngs(latlngs) {
        dispatch(getLatLngFromPolygon(latlngs));
      }
    })
  )
)(MapWithADrawingManager);
