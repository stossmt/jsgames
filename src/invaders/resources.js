import { loadImage } from '../lib/file.js';

export class Resources {
  constructor(
    canvas,
    canvasPadding,
    canvasBackgroundColor,
    enemyImage,
    enemyScaleFactor,
    enemySpacing,
    enemyMoveBy,
    enemyTickRate,
    enemyNumberOfColumns,
    enemyNumberOfRows
  ) {
    this.canvas = canvas;
    this.canvasPadding = canvasPadding;
    this.canvasBackgroundColor = canvasBackgroundColor;
    this.enemyImage = enemyImage;
    this.enemyScaleFactor = enemyScaleFactor;
    this.enemySpacing = enemySpacing;
    this.enemyMoveBy = enemyMoveBy;
    this.enemyTickRate = enemyTickRate;
    this.enemyNumberOfColumns = enemyNumberOfColumns;
    this.enemyNumberOfRows = enemyNumberOfRows;
  }

  static async load() {
    const canvasPadding = 10;
    const canvasBackgroundColor = 'black';
    const canvasQuerySelector = 'canvas';
    const enemyImageSource = 'assets/enemy.png';
    const enemyTickRate = 30;
    const enemyScaleFactor = 4;
    const enemySpacing = 5;
    const enemyMoveBy = 2;
    const enemyNumberOfColumns = 12;
    const enemyNumberOfRows = 4;

    const canvas = document.querySelector(canvasQuerySelector);
    const enemyImage = await loadImage(enemyImageSource);

    return new Resources(
      canvas,
      canvasPadding,
      canvasBackgroundColor,
      enemyImage,
      enemyScaleFactor,
      enemySpacing,
      enemyMoveBy,
      enemyTickRate,
      enemyNumberOfColumns,
      enemyNumberOfRows
    );
  }

  getCanvas() {
    return this.canvas;
  }

  getCanvasPadding() {
    return this.canvasPadding;
  }

  getCanvasBackgroundColor() {
    return this.canvasBackgroundColor;
  }

  getEnemyImage() {
    return this.enemyImage;
  }

  getEnemyScaleFactor() {
    return this.enemyScaleFactor;
  }

  getEnemySpacing() {
    return this.enemySpacing;
  }

  getEnemyMoveBy() {
    return this.enemyMoveBy;
  }

  getEnemyTickRate() {
    return this.enemyTickRate;
  }

  getEnemyNumberOfColumns() {
    return this.enemyNumberOfColumns;
  }

  getEnemyNumberOfRows() {
    return this.enemyNumberOfRows;
  }
}
