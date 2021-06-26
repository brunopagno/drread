const gameOverView = (function() {
  return function view(htmlParentElement) {
    const victoryHtmlElement = document.createElement('div');
    victoryHtmlElement.innerText = "Game over";
    htmlParentElement.append(victoryHtmlElement);
  }
})();