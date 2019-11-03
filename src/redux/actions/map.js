import { ON_POLYGON_COMPLETE } from "types";

export const getLatLngFromPolygon = value => {
  console.log(value);
  return {
    type: ON_POLYGON_COMPLETE,
    latlngs: value
  };
};
