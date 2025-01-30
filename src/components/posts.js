import { union } from "scad-js";
import { postSpacing } from "../constants.js";
import post from "./post.js";

export default function () {
  return union(
    post().translate_x(postSpacing * -1),
    post(),
    post().translate_x(postSpacing),
  );
}
