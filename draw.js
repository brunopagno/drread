const Draw = (function () {
  class DrawClass {
    constructor() {
      this.skipMonsters = true;
    }

    init(htmlParentElement, overlayHtmlElement) {
      this.htmlParentElement = htmlParentElement;
      this.overlayHtmlElement = overlayHtmlElement;
    }

    updateAndDraw() {
      // update all monsters
      if (this.skipMonsters) {
        this.skipMonsters = false;
      } else {
        this.overlayHtmlElement.classList.remove('hide');
        
        const self = this;
        function doTheThing(allMonsters, index) {
          setTimeout(() => {
            if (allMonsters[index]) {
            allMonsters[index].act(State.hero);
              self._executeDraw();
              doTheThing(allMonsters, index + 1);
            } else {
              self.overlayHtmlElement.classList.add('hide');
            }
          }, 250);
        }

        const allMonsters = State.allMonsters;
        doTheThing(allMonsters, 0);
      }

      // actually draw
      this._executeDraw();

      // check current game state
      State.checkState();
    }

    _executeDraw() {
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
