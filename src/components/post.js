import { cylinder } from "scad-js";
import { postHeight, postRadius } from "../constants.js";

export default function () {
  return cylinder(postHeight, postRadius);
}
