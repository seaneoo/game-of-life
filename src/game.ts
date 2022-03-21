class GameOfLife {
  _PIXEL_SIZE = 16;
  _WIDTH = 32; // 16x16 pixel cells, 512 pixels
  _HEIGHT = 24; // 16x16 pixel cells, 384 pixels
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  cells: number[][] = [[]];

  constructor() {
    this.canvas = document.querySelector<HTMLCanvasElement>("#life")!;
    this.ctx = this.canvas.getContext("2d");

    // Set some properties of the Canvas/2D Context
    this.canvas.width = this._WIDTH * this._PIXEL_SIZE;
    this.canvas.height = this._HEIGHT * this._PIXEL_SIZE;
    this.canvas.style.width = `${this._WIDTH * this._PIXEL_SIZE}px`;
    this.canvas.style.height = `${this._HEIGHT * this._PIXEL_SIZE}px`;

    this.ctx!.imageSmoothingEnabled = true;

    this.init();
  }

  init() {
    // Define a two-dimensional array
    for (let x = 0; x < this._WIDTH; x++) {
      for (let y = 0; y < this._HEIGHT; y++) {
        this.cells.push([x, y]);
      }
    }

    (() => {
      // Initial draw
      this.draw();
      // Define an interval that draws on the canvas every 500 milliseconds (0.5 seconds)
      setInterval(
        ((self) => {
          return () => self.draw();
        })(this),
        500
      );
    })();
  }

  drawCell(x: number, y: number, color: string) {
    if (this.ctx !== null) {
      this.ctx.beginPath();
      this.ctx.fillStyle = `#${color}`;
      this.ctx.fillRect(
        x * this._PIXEL_SIZE,
        y * this._PIXEL_SIZE,
        this._PIXEL_SIZE,
        this._PIXEL_SIZE
      );
      this.ctx.closePath();
    }
  }

  draw() {
    if (this.ctx !== null) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let x = 0; x < this.cells.length; ++x) {
        const dX = this.cells[x];
        for (let y = 0; y < dX.length; ++y) {
          const dY = dX[y];
          this.drawCell(
            dX[0],
            dY,
            Math.floor(Math.random() * 16777215).toString(16)
          );
        }
      }
    }
  }
}

export default GameOfLife;
