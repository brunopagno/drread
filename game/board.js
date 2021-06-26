class Board {
  constructor(level) {
    this.level = level;

    this.grid = [];
    this.level.forEach((row) => {
      const gridRow = [];
      row.forEach((element) => {
        switch (element) {
          case 0: // empty space
            gridRow.push(0);
            break;
          case 1: // hero
            const hero = new Hero();
            gridRow.push(hero);
            break;
          case 2: // monster
            const monster = new Monster();
            gridRow.push(monster);
            break;
          case 3: // objective
            gridRow.push(3);
            break;
          case 4: // obstacle
            gridRow.push(4);
            break;
          default:
            throw new Error("Trying to insert unknown object on the grid");
        }
      });
      this.grid.push(gridRow);
    });
  }

  getGrid() {
    return this.grid;
  }

  getHero() {
    let result = null;
    this.grid.forEach((row) => {
      row.forEach((element) => {
        if (element instanceof Hero) {
          result = element;
          return;
        }
      });
    });
    return result;
  }
}
