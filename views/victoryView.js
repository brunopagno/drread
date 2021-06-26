const victoryView = (function() {
  return function view(htmlParentElement) {
    const victoryHtmlElement = document.createElement('div');
    victoryHtmlElement.innerText = "You win";
    htmlParentElement.append(victoryHtmlElement);
  }
})();