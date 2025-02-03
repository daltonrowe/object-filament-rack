import { cylinder, union } from "scad-js";
import {
  holderLocatorHeight,
  holderLocatorRadius,
  holderRadius,
  holderWidth,
  tolerance,
} from "../constants.js";

const spacingRatio = 1.4;

export default function () {
  return union(
    cylinder(holderLocatorHeight, holderLocatorRadius).translate_y(
      holderRadius - holderWidth / spacingRatio,
    ),
    cylinder(holderLocatorHeight, holderLocatorRadius).translate_y(
      (holderRadius - holderWidth / spacingRatio) * -1,
    ),
  ).translate_x(10);
}

export function rodLocatorHoles() {
  return union(
    cylinder(holderLocatorHeight, holderLocatorRadius + tolerance).translate_y(
      holderRadius - holderWidth / spacingRatio,
    ),
    cylinder(holderLocatorHeight, holderLocatorRadius + tolerance).translate_y(
      (holderRadius - holderWidth / spacingRatio) * -1,
    ),
  ).translate_x(10);
}
