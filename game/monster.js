class Monster extends Character {
  act(target) {
    let goX = this.x - target.x;
    let goY = this.y - target.y;
    if (Math.abs(goX) > Math.abs(goY)) {
      if (goX > 0) {
        this.moveLeft();
      } else {
        this.moveRight();
      }
    } else {
      if (goY > 0) {
        this.moveUp();
      } else {
        this.moveDown();
      }
    }
  }
}
