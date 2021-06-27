const victoryView = (function() {
  return function view(htmlParentElement) {
    const victoryHtmlElement = document.createElement('img');
    victoryHtmlElement.setAttribute("src", "./images/victory.png");
    htmlParentElement.append(victoryHtmlElement);
  }
})();