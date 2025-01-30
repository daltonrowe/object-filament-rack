import { polygon } from "scad-js";
import {
  bodyDepth,
  bodyHeight,
  bodyWidth,
  postToWall,
  rodOffsetX,
  rodOffsetY,
} from "../constants.js";

const topRightY = rodOffsetX * -1;
const topRightX = (bodyHeight / 2 + rodOffsetY) * -1;

export default function () {
  return polygon([
    [-40, postToWall],
    [topRightX + 8, topRightY],
    [topRightX + 16, topRightY - 10],
    [topRightX + 10, topRightY - 45],
    [bodyHeight / 2, (bodyWidth / 2) * -1],
    [bodyHeight / 2, postToWall],
  ]).linear_extrude(bodyDepth);
}
