GAME_STATE = {
  IN_GAME: 'IN_GAME',
  VICTORY: 'VICTORY',
  GAME_OVER: 'GAME_OVER',
};

const State = (function () {
  function loadLevel(level) {
    return LEVEL_1;
  }

  class StateClass {
    constructor() {
      this._currentLevel = 1;
      this._state = GAME_STATE.IN_GAME;

      this._level = loadLevel(this._currentLevel);
      this._board = new Board(this._level);

      this._hero = this.board.getHero();
    }

    checkState() {
      const grid = this._board.getGrid();
      let hasObjectives = false;
      grid.forEach(row => {
        row.forEach(tile => {
          if (tile instanceof Objective) {
            hasObjectives = true;
          }
        })
      });
      if (!hasObjectives) {
        this._state = GAME_STATE.VICTORY;
      }
    }

    get state() {
      return this._state;
    }

    get board() {
      return this._board;
    }

    get hero() {
      return this._hero;
    }
  }

  return new StateClass();
})();
