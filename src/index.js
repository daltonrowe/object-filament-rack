import { difference, union } from "scad-js";
import brace from "./components/brace.js";
import posts from "./components/posts.js";
import rodHolder from "./components/rod-holder.js";
import {
  bodyDepth,
  bodyHeight,
  postHeight,
  rodOffsetX,
  rodOffsetY,
  rodRadius,
} from "./constants.js";

function positionRod(object) {
  return object
    .translate_x((bodyHeight / 2 + rodRadius) * -1)
    .translate_y(rodRadius * -1)
    .translate_x(rodOffsetX * -1)
    .translate_y(rodOffsetY * -1);
}

export default function () {
  return difference(
    union(
      posts().translate_z(postHeight / 2),
      brace().translate_z(bodyDepth * -1),
      positionRod(rodHolder()).translate_z((bodyDepth / 2) * -1),
    ),
  );
}
