class Character {
  constructor(x, y, boardReference) {
    this._x = x;
    this._y = y;

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
    this._executeMovement(this.x, this.y - 1);
  }

  moveDown() {
    this._executeMovement(this.x, this.y + 1);
  }

  moveLeft() {
    this._executeMovement(this.x - 1, this.y);
  }
  moveRight() {
    this._executeMovement(this.x + 1, this.y);
  }

  _executeMovement(x, y) {
    const target = this._board.getXY(x, y);
    if (this.canMoveToTarget(target)) {
      this._board.updatePosition(this, x, y);
    }
  }

  canMoveToTarget(target) {
    return target instanceof EmptySpace || target instanceof Objective;
  }
}
