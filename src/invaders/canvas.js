export class Canvas {
  constructor(canvas, backgroundColor = 'black') {
    this.canvasCtx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.backgroundColor = backgroundColor;
  }

  reset() {
    this.canvasCtx.fillStyle = this.backgroundColor;
    this.canvasCtx.fillRect(0, 0, this.width, this.height);
  }

  drawImage(src, x, y, width, height) {
    this.canvasCtx.drawImage(src, x, y, width, height);
  }
}
