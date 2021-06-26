const boardView = (function () {
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
  
  const moveUp = document.createElement("button");
  moveUp.innerText = "W";
  heroHtmlElement.appendChild(moveUp);
  moveUp.onclick = () => {
    State.hero.moveUp();
    Draw.updateAndDraw();
  };
  
  const moveDown = document.createElement("button");
  moveDown.innerText = "S";
  heroHtmlElement.appendChild(moveDown);
  moveDown.onclick = () => {
    State.hero.moveDown();
    Draw.updateAndDraw();
  };
  
  const moveLeft = document.createElement("button");
  moveLeft.innerText = "A";
  heroHtmlElement.appendChild(moveLeft);
  moveLeft.onclick = () => {
    State.hero.moveLeft();
    Draw.updateAndDraw();
  };
  
  const moveRight = document.createElement("button");
  moveRight.innerText = "D";
  heroHtmlElement.appendChild(moveRight);
  moveRight.onclick = () => {
    State.hero.moveRight();
    Draw.updateAndDraw();
  };

  function boardView(htmlParentElement) {
    // go through the board and draw the current items
    const board = State.board;
    board.getGrid().forEach((row) => {
      row.forEach((element) => {
        let result = null;

        if (element instanceof Hero) {
          result = heroHtmlElement;
        } else if (element instanceof Monster) {
          result = createMonsterHtmlElement();
        } else if (element instanceof Objective) {
          result = objectiveHtmlElement;
        } else if (element instanceof Obstacle) {
          result = createObstacleHtmlElement();
        } else {
          result = createEmptyHtmlElement();
        }

        htmlParentElement.append(result);
      });
    });
  }

  return boardView;
})();
