import { Ticker } from './ticker.js';
import { EnemyGrid } from './enemyGrid.js';
import { Canvas } from './canvas.js';

export class Game {
  constructor(resources, framesPerSecond = 60) {
    this.ticker = new Ticker(framesPerSecond);
    this.canvas = new Canvas(
      resources.getCanvas(),
      resources.getCanvasPadding(),
      resources.getCanvasBackgroundColor()
    );
    this.enemyGrid = new EnemyGrid(
      this.canvas,
      resources.getEnemyImage(),
      resources.getEnemyScaleFactor(),
      resources.getEnemySpacing(),
      resources.getEnemyMoveBy(),
      resources.getEnemyTickRate(),
      resources.getEnemyNumberOfColumns(),
      resources.getEnemyNumberOfRows()
    );
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
