import { polygon } from "scad-js";
import {
  bodyDepth,
  bodyHeight,
  bodyWidth,
  postToWall,
  rodOffsetX,
  rodOffsetY,
} from "../constants.js";

const topRightY = rodOffsetY * -1;
const topRightX = (bodyHeight / 2 + rodOffsetX) * -1;

export default function () {
  return polygon([
    [-40, postToWall],
    [topRightX - 15, topRightY + 10],
    [topRightX - 1, topRightY + 10],
    [topRightX + 5, topRightY - 20],
    [bodyHeight / 2, bodyWidth * -1],
    [bodyHeight / 2, postToWall],
  ]).linear_extrude(bodyDepth);
}
