import { ON_POLYGON_COMPLETE } from "types";

export default (state = [], action) => {
  switch (action.type) {
    case ON_POLYGON_COMPLETE:
      console.log("HEllo" + action);
      return action.latlngs;
    default:
      return [];
  }
};
