function createMonsterHtmlElement(character) {
  const monsterHtmlElement = document.createElement("div");
  monsterHtmlElement.classList.add("tile");
  monsterHtmlElement.classList.add("monster");
  monsterHtmlElement.setAttribute("id", character.id);

  const monsterHealth = document.createElement("span");
  monsterHealth.innerText = character.life;
  monsterHealth.classList.add("character_health");
  monsterHtmlElement.appendChild(monsterHealth);

  const monsterImage = document.createElement("img");
  monsterImage.setAttribute("src", "./images/monster.png");
  monsterImage.setAttribute("alt", "Monster");
  monsterHtmlElement.appendChild(monsterImage);

  return monsterHtmlElement;
}
