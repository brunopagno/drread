const gameOverView = (function () {
  return function view(htmlParentElement) {
    const gameOverHtmlElement = document.createElement("img");
    gameOverHtmlElement.setAttribute("src", "./images/gameover.png");
    htmlParentElement.append(gameOverHtmlElement);
  };
})();
