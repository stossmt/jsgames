export class EnemyGrid {
  constructor(enemyImage) {
    this.enemyImage = enemyImage;
    this.enemyWidth = enemyImage.width / 4;
    this.enemyHeight = enemyImage.height / 4;
    this.enemies = Array(48).fill(true);
    this.enemiesPerRow = 12;
    this.xCurrent = 10;
    this.yCurrent = 10;
    this.xMin = 10;
    this.xMax = 300;
    this.offset = 5;
    this.headRight = true;
    this.stepAmount = 2;
    this.tickRate = 30;
  }

  checkUpdateDirection() {
    const xLeft = this.xCurrent;
    const xRight =
      this.xCurrent + (this.enemyWidth + this.offset) * this.enemiesPerRow;

    if (this.headRight && xRight >= this.xMax) {
      this.headRight = false;
    } else if (xLeft <= this.xMin) {
      this.headRight = true;
    }
  }

  shouldUpdate(frameNumber) {
    return frameNumber % this.tickRate === 0;
  }

  tick(frameNumber) {
    if (!this.shouldUpdate(frameNumber)) {
      return;
    }

    this.headRight
      ? (this.xCurrent += this.stepAmount)
      : (this.xCurrent -= this.stepAmount);
    this.checkUpdateDirection();
  }

  render(canvas) {
    let x = this.xCurrent;
    let y = this.yCurrent;

    const width = this.enemyWidth;
    const height = this.enemyHeight;
    const per_row = this.enemiesPerRow;
    const offset = this.offset;

    for (let i = 0; i < this.enemies.length; i++) {
      canvas.drawImage(this.enemyImage, x, y, width, height);

      if ((i + 1) % per_row === 0) {
        x = this.xCurrent;
        y += height + offset;
      } else {
        x += width + offset;
      }
    }
  }
}
