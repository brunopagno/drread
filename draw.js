const Draw = (function () {
  class DrawClass {
    constructor() {
      this.skipMonsters = true;
    }

    init(htmlParentElement) {
      this.htmlParentElement = htmlParentElement;
    }

    updateAndDraw() {
      // update all monsters
      if (this.skipMonsters) {
        this.skipMonsters = false;
      } else {
        State.allMonsters.forEach((monster) => {
          monster.act();
        });
      }

      // check current game state
      State.checkState();

      // clear screen
      this.htmlParentElement.innerHTML = "";

      // draw appropriate view
      switch (State.state) {
        case GAME_STATE.IN_GAME:
          boardView(this.htmlParentElement);
          break;
        case GAME_STATE.VICTORY:
          victoryView(this.htmlParentElement);
          break;
        case GAME_STATE.GAME_OVER:
          gameOverView(this.htmlParentElement);
          break;
      }
    }
  }

  return new DrawClass();
})();
