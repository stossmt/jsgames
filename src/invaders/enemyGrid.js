import { Enemy } from './enemy.js';

function flipDirection(direction) {
  return direction ? false : true;
}

function initEnemies(
  canvas,
  enemyImage,
  enemyScaleFactor,
  enemySpacing,
  enemyMoveBy,
  numberOfColumns,
  numberOfRows
) {
  const enemyWidth = enemyImage.width / enemyScaleFactor;
  const enemyHeight = enemyImage.height / enemyScaleFactor;

  const hSpacing = enemyWidth + enemySpacing;
  const vSpacing = enemyHeight + enemySpacing;

  const totalGridWidth = numberOfColumns * hSpacing - enemySpacing;

  const startX = canvas.getWidth() / 2 - totalGridWidth / 2;
  const startY = canvas.getMinYPosition();

  return Array.from({ length: numberOfColumns * numberOfRows }, (_, i) => {
    const col = i % numberOfColumns;
    const row = Math.floor(i / numberOfColumns);
    const x = startX + col * hSpacing;
    const y = startY + row * vSpacing;
    return new Enemy(enemyImage, enemyMoveBy, x, y, enemyWidth, enemyHeight);
  });
}

export class EnemyGrid {
  constructor(
    canvas,
    enemyImage,
    enemyScaleFactor,
    enemySpacing,
    enemyMoveBy,
    tickRate,
    numberOfColumns,
    numberOfRows
  ) {
    this.canvas = canvas;
    this.moveRight = true;
    this.tickRate = tickRate;
    this.enemies = initEnemies(
      canvas,
      enemyImage,
      enemyScaleFactor,
      enemySpacing,
      enemyMoveBy,
      numberOfColumns,
      numberOfRows
    );
  }

  shouldUpdate(frameNumber) {
    return frameNumber % this.tickRate === 0;
  }

  hasFallenOffOfCanvas() {
    const minX = this.canvas.getMinXPosition();
    const maxX = this.canvas.getMaxXPosition();

    const firstRowEnemy = this.enemies[0];
    const lastRowEnemy = this.enemies[this.enemies.length - 1];

    const isLeftCollision = firstRowEnemy.isCollision(
      minX,
      firstRowEnemy.getMinYPosition()
    );
    const isRightCollision = lastRowEnemy.isCollision(
      maxX,
      lastRowEnemy.getMinYPosition()
    );

    return isLeftCollision || isRightCollision;
  }

  tick(frameNumber) {
    if (!this.shouldUpdate(frameNumber)) {
      return;
    }
    if (this.hasFallenOffOfCanvas()) {
      this.moveRight = flipDirection(this.moveRight);
    }

    this.moveRight
      ? this.enemies.forEach((enemy) => enemy.moveRight())
      : this.enemies.forEach((enemy) => enemy.moveLeft());
  }

  render() {
    this.enemies.forEach((enemy) => enemy.render(this.canvas));
  }
}
