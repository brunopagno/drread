const Draw = (function () {
  function createEmptyHtmlElement() {
    const emptyHtmlElement = document.createElement("div");
    emptyHtmlElement.classList.add("tile");
    emptyHtmlElement.classList.add("empty");
    return emptyHtmlElement;
  }

  function createMonsterHtmlElement() {
    const emptyHtmlElement = document.createElement("div");
    emptyHtmlElement.classList.add("tile");
    emptyHtmlElement.classList.add("monster");
    return emptyHtmlElement;
  }

  function createObstacleHtmlElement() {
    const obstacleHtmlElement = document.createElement("div");
    obstacleHtmlElement.classList.add("tile");
    obstacleHtmlElement.classList.add("obstacle");
    return obstacleHtmlElement;
  }

  const objectiveHtmlElement = document.createElement("div");
  objectiveHtmlElement.classList.add("tile");
  objectiveHtmlElement.classList.add("objective");

  const heroHtmlElement = document.createElement("div");
  heroHtmlElement.classList.add("tile");
  heroHtmlElement.classList.add("hero");

  class DrawClass {
    draw(htmlParentElement) {
      console.log(htmlParentElement);

      // clear all elements
      htmlParentElement.innerHtml = "";

      // go through the board and draw the current items
      const board = State.getBoard();
      board.getGrid().forEach((row) => {
        row.forEach((element) => {
          let result = null;

          if (element instanceof Hero) {
            result = heroHtmlElement;
          } else if (element instanceof Character) {
            result = createMonsterHtmlElement();
          } else if (element === 3) {
            result = objectiveHtmlElement
          } else if (element === 4) {
            result = createObstacleHtmlElement();
          } else {
            result = createEmptyHtmlElement();
          }

          htmlParentElement.append(result);
        });
      });
    }
  }

  return new DrawClass();
})();
