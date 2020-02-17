import { updateCharactersHealth } from "../view";
import createHeroPage from "../views/HeroPage";
import randomNumber from "../utils/randomNumber";
import { findAnEnemy } from "../index";

const enemyAttacksFirst = function(state, getTheRoot, figthBtn) {
  const attackNumHero = state.gameHero.strength * randomNumber(1, 2);
  const attackNumEnemy = state.currentEnemy.strength * randomNumber(1, 2);

  alert(`enemy attacks! and delivers a blow to the hero of ${attackNumEnemy}`);
  state.gameHero.health = state.gameHero.health - attackNumEnemy;
  updateCharactersHealth(state);

  if (state.gameHero.health > 0) {
    alert(
      `${state.gameHero.name} attacks! and delivers a blow of ${attackNumHero}`
    );
    state.currentEnemy.health = state.currentEnemy.health - attackNumHero;
    updateCharactersHealth(state);
  } else {
    console.log("Oh no! You killed the hero!");
  }

  if (state.currentEnemy.health <= 0) {
    state.gameHero.exp = state.gameHero.exp + state.currentEnemy.exp;
    state.currentEnemy = null;
    createHeroPage(getTheRoot, state.gameHero);
    const findBtn = document.querySelector(".findBtn");
    const restBtn = document.querySelector(".restBtn");
    findBtn.addEventListener("click", () => findAnEnemy());
  } else {
    figthBtn.disabled = false;
  }

  console.log("enemy attacks");
};

export default enemyAttacksFirst;
