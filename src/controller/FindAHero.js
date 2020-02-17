import { Knight, Wizard } from "../model/Heros";
import createHeroPage from "../views/HeroPage";
import { findAnEnemy } from "../index";

const findAHero = function(type, event, state, getTheRoot) {
  const heroName = event.currentTarget.heroName.value;
  event.preventDefault();
  switch (type) {
    case "knight":
      state.gameHero = new Knight((name = heroName));
      break;
    case "wizard":
      state.gameHero = new Wizard((name = heroName));
      break;
  }

  createHeroPage(getTheRoot, state.gameHero);
  const findBtn = document.querySelector(".findBtn");
  const restBtn = document.querySelector(".restBtn");

  findBtn.addEventListener("click", findAnEnemy);
  restBtn.addEventListener("click", () => console.log("REST!!!"));
};

export default findAHero;
