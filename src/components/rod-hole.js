import { cylinder } from "scad-js";
import { rodHeight, rodRadius } from "../constants.js";

export default function () {
  return cylinder(rodHeight, rodRadius);
}
