import { sleep } from '../lib/time.js';

export class Ticker {
  constructor(framePerSecond) {
    this.frameRatePerSecond = 1000 / framePerSecond;
    this.frameNumber = 0;
  }

  async sleepUntilNextFrame() {
    await sleep(this.frameRatePerSecond);
    this.frameNumber += 1;
  }

  getFrameNumber() {
    return this.frameNumber;
  }
}
