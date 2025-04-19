import { Ticker } from './ticker.js';
import { EnemyGrid } from './enemyGrid.js';
import { Canvas } from './canvas.js';

export class Game {
  constructor(resources, framesPerSecond = 60) {
    this.ticker = new Ticker(framesPerSecond);
    this.enemyGrid = new EnemyGrid(resources.getEnemyImage());
    this.canvas = new Canvas(resources.getCanvas());
  }

  async run() {
    while (true) {
      const { ticker, enemyGrid, canvas } = this;

      // Update
      const frameNumber = ticker.getFrameNumber();
      enemyGrid.tick(frameNumber);

      // Render
      canvas.reset();
      enemyGrid.render(canvas);

      // Sleep
      await ticker.sleepUntilNextFrame();
    }
  }
}
