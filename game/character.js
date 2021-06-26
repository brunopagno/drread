class Character {
  constructor(x, y, life, dice, boardReference) {
    this._x = x;
    this._y = y;
    this._life = life;
    this._dice = dice;

    this._board = boardReference;
  }

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(value) {
    this._x = value;
  }
  set y(value) {
    this._y = value;
  }

  moveUp() {
    this._executeAction(this.x, this.y - 1);
  }

  moveDown() {
    this._executeAction(this.x, this.y + 1);
  }

  moveLeft() {
    this._executeAction(this.x - 1, this.y);
  }

  moveRight() {
    this._executeAction(this.x + 1, this.y);
  }

  hit(power) {
    this._life -= power;
  }

  isDead() {
    return this._life <= 0;
  }

  _executeAction(x, y) {
    const target = this._board.getXY(x, y);
    if (target instanceof Monster) {
      // roll rice
      const attack = this._dice.roll();
      // show dice animation
      // TODO: I need to do this, no idea how, tho :(
      // wait for dice animation
      // setTimeout(() => {
      // cause damage on monster
      console.log("attack monster with", attack);
      target.hit(attack);
      console.log("monster has now", target._life);
      // check if monster is dead
      if (target.isDead()) {
        console.log("monster is dead");
        // update board position to target
        this._board.updatePosition(this, x, y);
      }
      // }, 1000);
    } else if (this.canMoveToTarget(target)) {
      this._board.updatePosition(this, x, y);
    }
  }

  canMoveToTarget(target) {
    return target instanceof EmptySpace || target instanceof Objective;
  }
}
