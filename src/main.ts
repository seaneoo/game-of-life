import GameOfLife from "./game";
import "./style.css";

// If HTMLCanvasElement is not supported, throw an error (https://caniuse.com/?search=HTMLCanvasElement)
if (!window.HTMLCanvasElement) {
  throw new Error(
    "HTMLCanvasElement not present on this browser. Please use a modern browser to view this app."
  );
}

new GameOfLife();
