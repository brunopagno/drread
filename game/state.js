const State = (function () {
  function loadLevel(level) {
    return LEVEL_1;
  }

  class StateClass {
    constructor() {
      this.currentLevel = 1;

      this.level = loadLevel(this.currentLevel);
      this.board = new Board(this.level);

      this.hero = this.board.getHero();
    }

    getBoard() {
      return this.board;
    }

    getHero() {
      this.hero;
    }
  }

  return new StateClass();
})();
