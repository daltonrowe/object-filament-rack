import { cube, cylinder, difference, union } from "scad-js";
import {
  holderHeight,
  holderLocatorDepth,
  holderLocatorHeight,
  holderRadius,
  nothing,
} from "../constants.js";
import rodLocators from "./rod-locators.js";
import rodHole from "./rod-hole.js";

export default function () {
  return difference(union(
    cylinder(holderLocatorDepth, holderRadius),
    rodLocators().translate_z(holderLocatorDepth / 2 + holderLocatorHeight / 2),
  ), rodHole(), cube([holderRadius, 70, holderLocatorDepth + nothing]).translate_x(-17));
}
