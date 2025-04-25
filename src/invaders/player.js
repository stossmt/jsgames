export class Player {
  constructor(canvas, input, playerImage, playerScaleFactor) {
    this.canvas = canvas;
    this.input = input;
    this.playerImage = playerImage;
    this.width = playerImage.width / playerScaleFactor;
    this.height = playerImage.height / playerScaleFactor;
    this.xPosition = canvas.getWidth() / 2;
    this.yPosition = canvas.getMaxYPosition() - this.height;
  }

  hasHitRightLimit() {
    return this.xPosition + this.width >= this.canvas.getMaxXPosition();
  }

  hasHitLeftLimit() {
    return this.xPosition <= this.canvas.getMinXPosition();
  }

  tick() {
    if (this.input.wasLeftKeyPressed() && !this.hasHitLeftLimit()) {
      this.xPosition--;
    }
    if (this.input.wasRightKeyPressed() && !this.hasHitRightLimit()) {
      this.xPosition++;
    }
  }

  render(canvas) {
    canvas.drawImage(
      this.playerImage,
      this.xPosition,
      this.yPosition,
      this.width,
      this.height
    );
  }
}
