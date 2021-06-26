class Monster extends Character {
  async act(target) {
    let goX = this.x - target.x;
    let goY = this.y - target.y;
    if (Math.abs(goX) > Math.abs(goY)) {
      if (goX > 0) {
        await this.moveLeft();
      } else {
        await this.moveRight();
      }
    } else {
      if (goY > 0) {
        await this.moveUp();
      } else {
        await this.moveDown();
      }
    }
  }
}
