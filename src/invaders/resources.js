import { loadImage } from '../lib/file.js';

export class Resources {
  constructor(canvas, enemyImage) {
    this.canvas = canvas;
    this.enemyImage = enemyImage;
  }

  static async load() {
    const canvas = document.querySelector('canvas');
    const enemyImage = await loadImage('assets/enemy.png');

    return new Resources(canvas, enemyImage);
  }

  getCanvas() {
    return this.canvas;
  }

  getEnemyImage() {
    return this.enemyImage;
  }
}
