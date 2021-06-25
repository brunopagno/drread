const GRID_ELEMENT_ID = 'grid';

const Initialise = (function() {
  class InitialiseClass {
    start() {
      const grid = document.getElementById(GRID_ELEMENT_ID);
      Draw.draw(grid);
    }
  }

  return new InitialiseClass();
})();
