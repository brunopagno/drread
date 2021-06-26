const Draw = (function () {
  class DrawClass {
    init(htmlParentElement) {
      this.htmlParentElement = htmlParentElement;
    }

    updateAndDraw() {
      // clear screen
      this.htmlParentElement.innerHTML = "";

      // check current game state
      State.checkState();

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
