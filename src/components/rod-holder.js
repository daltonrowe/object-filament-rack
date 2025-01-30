import { cylinder, difference } from "scad-js";
import { bodyDepth, holderRadius } from "../constants.js";
import rodLocators, { rodLocatorHoles } from "./rod-locators.js";

export default function () {
  return difference(cylinder(bodyDepth, holderRadius), rodLocatorHoles());
}
