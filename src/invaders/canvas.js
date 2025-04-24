export class Canvas {
  constructor(canvas, canvasPadding, canvasBackgroundColor) {
    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
    this.canvasPadding = canvasPadding;
    this.canvasBackgroundColor = canvasBackgroundColor;
  }

  getMinYPosition() {
    return 0 + this.canvasPadding;
  }

  getMaxYPosition() {
    return this.getHeight() - this.canvasPadding;
  }

  getMinXPosition() {
    return 0 + this.canvasPadding;
  }

  getMaxXPosition() {
    return this.getWidth() - this.canvasPadding;
  }

  getWidth() {
    return this.canvas.width;
  }

  getHeight() {
    return this.canvas.height;
  }

  reset() {
    this.canvasCtx.fillStyle = this.canvasBackgroundColor;
    this.canvasCtx.fillRect(0, 0, this.getWidth(), this.getHeight());
  }

  drawImage(src, x, y, width, height) {
    this.canvasCtx.drawImage(src, x, y, width, height);
  }
}
