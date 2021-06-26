function createMonsterHtmlElement() {
  const monsterHtmlElement = document.createElement("div");
  monsterHtmlElement.classList.add("tile");
  monsterHtmlElement.classList.add("monster");

  const monsterImage = document.createElement("img");
  monsterImage.setAttribute("src", "./images/monster.png");
  monsterImage.setAttribute("alt", "Monster");
  monsterHtmlElement.appendChild(monsterImage);

  return monsterHtmlElement;
}