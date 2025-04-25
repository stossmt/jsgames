import { Ticker } from './ticker.js';
import { EnemyGrid } from './enemyGrid.js';
import { Canvas } from './canvas.js';
import { Player } from './player.js';
import { Input } from './input.js';

export class Game {
  constructor(resources, framesPerSecond = 60) {
    this.ticker = new Ticker(framesPerSecond);
    this.input = new Input();
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
    this.player = new Player(
      this.canvas,
      this.input,
      resources.getPlayerImage(),
      resources.getPlayerScaleFactor()
    );
  }

  async run() {
    while (true) {
      const { ticker, enemyGrid, canvas, player } = this;

      // Update
      const frameNumber = ticker.getFrameNumber();
      enemyGrid.tick(frameNumber);
      player.tick(frameNumber);

      // Render
      canvas.reset();
      enemyGrid.render(canvas);
      player.render(canvas);

      // Sleep
      await ticker.sleepUntilNextFrame();
    }
  }
}
