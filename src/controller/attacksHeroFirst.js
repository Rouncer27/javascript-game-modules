import { updateCharactersHealth } from "../view";
import createHeroPage from "../views/HeroPage";
import randomNumber from "../utils/randomNumber";
import { findAnEnemy } from "../index";

const attacksHeroFirst = function(state, getTheRoot, figthBtn) {
  const attackNumHero = state.gameHero.strength * randomNumber(1, 2);
  const attackNumEnemy = state.currentEnemy.strength * randomNumber(1, 2);
  alert(
    `${state.gameHero.name} attacks! and delivers a blow of ${attackNumHero}`
  );
  state.currentEnemy.health = state.currentEnemy.health - attackNumHero;
  updateCharactersHealth(state);

  if (state.currentEnemy.health > 0) {
    alert(
      `enemy attacks! and delivers a blow to the hero of ${attackNumEnemy}`
    );
    state.gameHero.health = state.gameHero.health - attackNumEnemy;
    updateCharactersHealth(state);
  } else {
    state.gameHero.exp = state.gameHero.exp + state.currentEnemy.exp;
    state.currentEnemy = null;
    createHeroPage(getTheRoot, state.gameHero);
    const findBtn = document.querySelector(".findBtn");
    const restBtn = document.querySelector(".restBtn");
    findBtn.addEventListener("click", () => findAnEnemy());
  }

  if (state.gameHero.health <= 0) {
    console.log("Oh no! You killed the hero!");
  } else {
    figthBtn.disabled = false;
  }
};

export default attacksHeroFirst;
