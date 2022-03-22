import { Cell } from "./cell";
import { _CHANCE, _HEIGHT, _PIXEL_SIZE, _WIDTH } from "./vars";

/**
 * Represents Conway's Game of Life.
 * Contains all functions and variables needed for the game to function properly.
 */
class GameOfLife {
  /**
   * Instance of the HTML canvas element on the DOM.
   * Pretty much only needed to access the rendering context.
   */
  canvas: HTMLCanvasElement;
  /**
   * The 2D rendering context for the HTML canvas.
   * Handles everything having to do with drawing on the canvas.
   */
  ctx: CanvasRenderingContext2D;
  /**
   * An array of cells on the board.
   * Represented by a {@link Cell} typing containing its position on the board and status.
   */
  cells: Cell[] = [];

  constructor() {
    this.canvas = document.querySelector<HTMLCanvasElement>("#life")!;
    this.ctx = this.canvas.getContext("2d")!;

    /**
     * Set the width and height of the canvas.
     * We use our global {@link _WIDTH} and {@link _HEIGHT} variables in conjunction with {@link _PIXEL_SIZE} to "scale" it properly.
     * Multiply our desired number of cells (64x48) with the our desired cell size (16px) to get a canvas that is 1024x768.
     */
    this.canvas.width = _WIDTH * _PIXEL_SIZE;
    this.canvas.height = _HEIGHT * _PIXEL_SIZE;

    this.init();
  }

  init() {
    /**
     * Populate a one-dimensional array with 'n' amount of {@link Cell} type objects.
     * For example, with a width of 64 and a height of 48, there will be 3,072 cells.
     */
    for (let x = 0; x < _WIDTH; x++) {
      for (let y = 0; y < _HEIGHT; y++) {
        this.cells.push({
          x,
          y,
          alive: Math.random() <= _CHANCE,
        });
      }
    }

    // setInterval(
    //   ((self) => {
    //     return () => self.draw();
    //   })(this),
    //   500
    // );
  }

  /**
   * Clear the canvas so it is ready for another frame to be drawn.
   */
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw() {
    this.clearCanvas();
  }
}

export default GameOfLife;
