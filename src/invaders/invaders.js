function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class EnemyGrid {
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

  render(ctx) {
    let x = this.xCurrent;
    let y = this.yCurrent;

    const width = this.enemyWidth;
    const height = this.enemyHeight;
    const per_row = this.enemiesPerRow;
    const offset = this.offset;

    for (let i = 0; i < this.enemies.length; i++) {
      ctx.drawImage(this.enemyImage, x, y, width, height);

      if ((i + 1) % per_row === 0) {
        x = this.xCurrent;
        y += height + offset;
      } else {
        x += width + offset;
      }
    }
  }
}

async function main() {
  const tickRate = 1000 / 60;
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const enemyImage = await loadImage('assets/enemy.png');
  const enemyGrid = new EnemyGrid(enemyImage);

  let frameNumber = 0;

  while (true) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    enemyGrid.tick(frameNumber);
    enemyGrid.render(ctx);

    await sleep(tickRate);
    frameNumber += 1;
  }
}

main();
