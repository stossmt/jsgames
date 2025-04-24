export class Enemy {
  constructor(
    enemyImage,
    enemyMoveBy,
    xPosition,
    yPosition,
    enemyWidth,
    enemyHeight
  ) {
    this.enemyImage = enemyImage;
    this.enemyMoveBy = enemyMoveBy;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.enemyWidth = enemyWidth;
    this.enemyHeight = enemyHeight;
  }

  getMinXPosition() {
    return this.xPosition;
  }

  getMinYPosition() {
    return this.yPosition;
  }

  getMaxXPosition() {
    return this.getMinXPosition() + this.enemyWidth;
  }

  getMaxYPosition() {
    return this.getMinYPosition() + this.enemyHeight;
  }

  isCollision(xCoord, yCoord) {
    return (
      xCoord >= this.getMinXPosition() &&
      xCoord <= this.getMaxXPosition() &&
      yCoord >= this.getMinYPosition() &&
      yCoord <= this.getMaxYPosition()
    );
  }

  moveRight() {
    this.xPosition += this.enemyMoveBy;
  }

  moveLeft() {
    this.xPosition -= this.enemyMoveBy;
  }

  render(canvas) {
    canvas.drawImage(
      this.enemyImage,
      this.xPosition,
      this.yPosition,
      this.enemyWidth,
      this.enemyHeight
    );
  }
}
