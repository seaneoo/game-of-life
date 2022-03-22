import {
  _COLOR_ALIVE,
  _COLOR_DEAD,
  _HEIGHT,
  _PIXEL_SIZE,
  _WIDTH,
} from "./vars";

/**
 * Cell type definition
 * @typedef {Object} Cell
 * @property {number} x The cells position on the 'x' coordinate
 * @property {number} y The cells position on the 'y' coordinate
 * @property {boolean} alive Whether the cell is alive
 */
export type Cell = {
  x: number;
  y: number;
  alive: boolean;
};

/**
 * Draw a cell on the canvas element with {@link CanvasRenderingContext2D}.
 * @param {CanvasRenderingContext2D} ctx
 * @param {Cell} cell
 */
export function draw(ctx: CanvasRenderingContext2D, cell: Cell) {
  ctx.beginPath();

  /**
   * Set the color of the rectangle/"cell" by its alive status.
   */
  ctx.fillStyle = !cell.alive ? _COLOR_DEAD : _COLOR_ALIVE;

  /**
   * Create and fill a rectangle on the canvas by setting its x and y coordinates multiplied by the {@link _PIXEL_SIZE}.
   * Set the size of the rectangle with the {@link _PIXEL_SIZE}.
   */
  ctx.fillRect(
    cell.x * _PIXEL_SIZE,
    cell.y * _PIXEL_SIZE,
    _PIXEL_SIZE,
    _PIXEL_SIZE
  );

  ctx.closePath();
}

/**
 * Returns an array of no more than eight {@link Cell} objects that are next to the cell provided.
 * @param cell
 * @returns
 */
export function neighbors(cell: Cell): Cell[] {
  // TODO Get cells next to our the cell provided in the parameters
  /**
   *   new Cell(this.ctx, this.x + 1, this.y),
   * new Cell(this.ctx, this.x + 1, this.y + 1),
   * new Cell(this.ctx, this.x + 1, this.y - 1),
   * new Cell(this.ctx, this.x - 1, this.y),
   * new Cell(this.ctx, this.x - 1, this.y + 1),
   * new Cell(this.ctx, this.x - 1, this.y - 1),
   * new Cell(this.ctx, this.x, this.y + 1),
   * new Cell(this.ctx, this.x, this.y - 1),
   */
  return [{ x: 0, y: 0, alive: true }].filter((c) => {
    return (
      c.x >= 0 &&
      c.x <= _WIDTH * _PIXEL_SIZE &&
      c.y >= 0 &&
      c.y <= _HEIGHT * _PIXEL_SIZE
    );
  });
}

export function aliveNeighbors(cell: Cell): Cell[] {
  return neighbors(cell).filter((c) => c.alive);
}

export function deadNeighbors(cell: Cell): Cell[] {
  return neighbors(cell).filter((c) => !c.alive);
}
