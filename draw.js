const Draw = (function () {
  class DrawClass {
    constructor() {
      this.skipMonsters = true;
    }

    init(htmlParentElement, overlayHtmlElement, rootHtmlElement) {
      this.htmlParentElement = htmlParentElement;
      this.overlayHtmlElement = overlayHtmlElement;
      this.rootHtmlElement = rootHtmlElement;
    }

    // gambiarra
    async invokeDiceAnimation(diceResult) {
      this.overlayHtmlElement.classList.remove("hide");

      const diceAnimation = createDiceAnimationHtmlElement();
      this.rootHtmlElement.append(diceAnimation);
      await new Promise((r) => setTimeout(r, 1000));
      diceAnimation.remove();
      const diceResultElement = createDiceResultHtmlElement(diceResult);
      this.rootHtmlElement.append(diceResultElement);
      await new Promise((r) => setTimeout(r, 2000));
      diceResultElement.remove();
    }

    updateAndDraw() {
      // update all monsters
      if (this.skipMonsters) {
        this.skipMonsters = false;
      } else {
        this.overlayHtmlElement.classList.remove("hide");

        const self = this;
        function doTheThing(allMonsters, index) {
          setTimeout(async () => {
            if (allMonsters[index]) {
              await allMonsters[index].act(State.hero);
              self._executeDraw();
              doTheThing(allMonsters, index + 1);
            } else {
              self.overlayHtmlElement.classList.add("hide");
            }
          }, 100);
        }

        const allMonsters = State.allMonsters;
        doTheThing(allMonsters, 0);
      }

      // actually draw
      this._executeDraw();
    }

    _executeDraw() {
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
