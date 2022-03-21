class GameOfLife {
  _PIXEL_SIZE = 16;
  _WIDTH = 64; // 16x16 pixel cells, 1024 pixels
  _HEIGHT = 48; // 16x16 pixel cells, 768 pixels
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

  drawCell(x: number, y: number, alive: boolean = false) {
    if (this.ctx !== null) {
      this.ctx.beginPath();
      this.ctx.fillStyle = !alive ? "#ffffff" : "#000000";
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
          this.drawCell(dX[0], dY, Math.random() < 5 / 100);
        }
      }
    }
  }
}

export default GameOfLife;
