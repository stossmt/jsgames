export class Input {
  constructor() {
    this.leftKeyPressedFlag = false;
    this.rightKeyPressedFlag = false;
    this.registerListeners();
  }

  registerListeners() {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        this.leftKeyPressedFlag = true;
      } else if (event.key === 'ArrowRight') {
        this.rightKeyPressedFlag = true;
      }
    });

    window.addEventListener('keyup', (event) => {
      if (event.key === 'ArrowLeft') {
        this.leftKeyPressedFlag = false;
      } else if (event.key === 'ArrowRight') {
        this.rightKeyPressedFlag = false;
      }
    });
  }

  wasLeftKeyPressed() {
    return this.leftKeyPressedFlag;
  }

  wasRightKeyPressed() {
    return this.rightKeyPressedFlag;
  }
}
