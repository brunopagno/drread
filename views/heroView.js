const heroHtmlElement = (function () {
  const heroHtmlElement = document.createElement("div");
  heroHtmlElement.classList.add("tile");
  heroHtmlElement.classList.add("hero");

  const heroImage = document.createElement("img");
  heroImage.setAttribute("src", "./images/drread.png");
  heroImage.setAttribute("alt", "Dr.read");
  heroHtmlElement.appendChild(heroImage);

  const moveUp = document.createElement("button");
  moveUp.classList.add("up");
  moveUp.innerText = "W";
  heroHtmlElement.appendChild(moveUp);
  moveUp.onclick = () => {
    State.hero.moveUp();
    Draw.updateAndDraw();
  };

  const moveDown = document.createElement("button");
  moveDown.classList.add("down");
  moveDown.innerText = "S";
  heroHtmlElement.appendChild(moveDown);
  moveDown.onclick = () => {
    State.hero.moveDown();
    Draw.updateAndDraw();
  };

  const moveLeft = document.createElement("button");
  moveLeft.classList.add("left");
  moveLeft.innerText = "A";
  heroHtmlElement.appendChild(moveLeft);
  moveLeft.onclick = () => {
    State.hero.moveLeft();
    Draw.updateAndDraw();
  };

  const moveRight = document.createElement("button");
  moveRight.classList.add("right");
  moveRight.innerText = "D";
  heroHtmlElement.appendChild(moveRight);
  moveRight.onclick = () => {
    State.hero.moveRight();
    Draw.updateAndDraw();
  };

  return heroHtmlElement;
})();
