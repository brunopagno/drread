const hero_moveUpAction = () => {
  State.hero.moveUp();
  Draw.updateAndDraw();
};

const hero_moveDownAction = () => {
  State.hero.moveDown();
  Draw.updateAndDraw();
};

const hero_moveLeftAction = () => {
  State.hero.moveLeft();
  Draw.updateAndDraw();
};

const hero_moveRightAction = () => {
  State.hero.moveRight();
  Draw.updateAndDraw();
};

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
  let arrow = document.createElement("img");
  arrow.setAttribute("src", "./images/arrow.png");
  moveUp.appendChild(arrow);
  heroHtmlElement.appendChild(moveUp);
  moveUp.onclick = hero_moveUpAction;

  const moveDown = document.createElement("button");
  moveDown.classList.add("down");
  arrow = document.createElement("img");
  arrow.setAttribute("src", "./images/arrow.png");
  moveDown.appendChild(arrow);
  heroHtmlElement.appendChild(moveDown);
  moveDown.onclick = hero_moveDownAction;

  const moveLeft = document.createElement("button");
  moveLeft.classList.add("left");
  arrow = document.createElement("img");
  arrow.setAttribute("src", "./images/arrow.png");
  moveLeft.appendChild(arrow);
  heroHtmlElement.appendChild(moveLeft);
  moveLeft.onclick = hero_moveLeftAction;

  const moveRight = document.createElement("button");
  moveRight.classList.add("right");
  arrow = document.createElement("img");
  arrow.setAttribute("src", "./images/arrow.png");
  moveRight.appendChild(arrow);
  heroHtmlElement.appendChild(moveRight);
  moveRight.onclick = hero_moveRightAction;

  return heroHtmlElement;
})();

// document.addEventListener("keydown", (event) => {
//   switch (event.key) {
//     case "ArrowLeft":
//       hero_moveLeftAction();
//       break;
//     case "ArrowUp":
//       hero_moveUpAction();
//       break;
//     case "ArrowRight":
//       hero_moveRightAction();
//       break;
//     case "ArrowDown":
//       hero_moveDownAction();
//       break;
//   }
// });
