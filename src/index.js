import { union } from "scad-js";
import post from "./components/post.js";

export default function () {
  return union(post());
}
