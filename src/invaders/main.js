import { Game } from './game.js';
import { Resources } from './resources.js';

async function main() {
  const resources = await Resources.load();
  const game = new Game(resources);

  await game.run();
}

main();
