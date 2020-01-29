import React from "react";
import {
  Polygon,
  withScriptjs,
  withGoogleMap,
  GoogleMap
} from "react-google-maps";
import firestore from "../../../common/database";
import { Dialog } from "./dialog";

const { compose, withProps } = require("recompose");
const {
  DrawingManager
} = require("react-google-maps/lib/components/drawing/DrawingManager");

const APIKEY = "AIzaSyDcQuKNglsyCMnwfhOksxxvI8B-ArSaBt4";
const google = window.google;

const MapWithADrawingManager = props => {
  const [isOpen, setOpen] = React.useState(false);
  const [latlngs, setLatlng] = React.useState([]);
  const [polygons, setPolygons] = React.useState([]);
  let typeDisaster = "น้ำท่วม";
  const infoWindow = new google.maps.InfoWindow();
  function computeLatLng(polygon) {
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
    return latlngs;
  }
  React.useEffect(() => {
    firestore
      .collection("DisasterArea")
      .get()
      .then(res => {
        let polygonAdd = [];
        res.docs.forEach(doc => {
          const polygon = Object.keys(doc.data().polygons).map(key => ({
            lat: doc.data().polygons[key].lat,
            lng: doc.data().polygons[key].lng
          }));
          polygonAdd.push({
            name: doc.data().name,
            type: doc.data().type,
            polygon
          });
        });
        setPolygons(polygonAdd);
      });
  }, []);

  function iterateLatLngs(polygon) {
    setOpen(true);
    setLatlng(computeLatLng(polygon));
  }

  function handleOnClose(name, type) {
    switch (type) {
      case 0:
        break;
      case 1:
        typeDisaster = "ไฟไหม้";
        break;
      default:
        typeDisaster = "แผ่นดินไหว";
        break;
    }
    setOpen(false);

    const latlngAdd = {};

    latlngs.forEach((l, i) => {
      latlngAdd["latlng" + (i + 1)] = {
        lat: parseFloat(l.lat, 10),
        lng: parseFloat(l.lng, 10)
      };
    });
    firestore
      .collection("DisasterArea")
      .doc()
      .set({
        name: name,
        polygons: {
          ...latlngAdd
        },
        type: typeDisaster
      });
  }

  function showArrays(event) {
    var vertices = this.getPath();
    infoWindow.setContent(this.content);
    infoWindow.setPosition(event.latLng);
    infoWindow.open();
  }

  return (
    <div className="container__map">
      <Dialog isOpen={isOpen} handleClose={handleOnClose} />

      <GoogleMap
        defaultZoom={8}
        defaultCenter={new google.maps.LatLng(15.2287, 104.8564)}
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
        {polygons.map((polygon, key) => (
          <Polygon
            path={polygon.polygon}
            key={key}
            options={{
              fillColor: `${
                polygon.type === "ไฟไหม้"
                  ? "#E57373"
                  : polygon.type === "น้ำท่วม"
                  ? "#90CAF9"
                  : "#A1887F"
              } `,
              fillOpacity: 0.2,
              strokeColor: "transparent",
              strokeOpacity: .3,
              content: polygon.name
            }}
            onClick={showArrays}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${APIKEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: (
      <div className="lds-ring">
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
          height: `100%`,
          width: "100%",
          //   margin: "auto",
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
  withGoogleMap
)(MapWithADrawingManager);
