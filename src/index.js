import "./styles.scss";
import {
  createTheHeroPicker,
  createTheFormModel,
  createHeroPage,
  createTheBattleScene,
  updateCharactersHealth
} from "./view";
import { allTheHeros, Knight, Wizard } from "./characters";
import { allEnemys, Slime } from "./enemys";

window.state = {
  gameHero: null,
  currentEnemy: null
};

const getTheRoot = document.getElementById("root");
const startButton = document.querySelector(".btn-start");

const randNum = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startTheGame = function() {
  getTheRoot.innerHTML = "";
  const heros = allTheHeros();
  const gameOpening = document.createElement("div");

  gameOpening.innerHTML = createTheHeroPicker(heros);
  getTheRoot.insertAdjacentElement("afterbegin", gameOpening);

  const allHeroOptions = document.querySelectorAll(".hero-choose");
  allHeroOptions.forEach(opt => {
    opt
      .querySelector(".btn-hero-choose")
      .addEventListener("click", event => heroForm(event));
  });
};

const heroForm = function(event) {
  const type = event.currentTarget.dataset.herotype;
  const { form, formEl, cancelBtn } = createTheFormModel(type);

  cancelBtn.addEventListener("click", function() {
    formEl.remove();
  });

  form.addEventListener("submit", event => {
    heroPicker(type, event);
    formEl.innerHTML = "";
  });
};

const heroPicker = function(type, event) {
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

  createHeroPage(state.gameHero);
  const findBtn = document.querySelector(".findBtn");
  const fightBtn = document.querySelector(".fightBtn");
  const restBtn = document.querySelector(".restBtn");
  findBtn.addEventListener("click", findAnEnemy);
};

const findAnEnemy = function() {
  const enemyToFight = allEnemys[randNum(0, allEnemys.length - 1)];
  switch (enemyToFight.enemyType) {
    case "slime":
      state.currentEnemy = new Slime();
      break;
    case "mage":
      break;
  }

  startTheFight();
};

const startTheFight = function() {
  createTheBattleScene(state.gameHero, state.currentEnemy);
  const fightBtn = document.querySelector(".btnFight");
  const runBtn = document.querySelector(".btnRun");

  fightBtn.addEventListener("click", e => fightAttackDecision(e));
};

const fightAttackDecision = function(e) {
  e.currentTarget.disabled = true;
  if (state.gameHero.speed >= state.currentEnemy.speed) {
    heroAttacks(e.currentTarget);
  } else {
    enemyAttacks(e.currentTarget);
  }
};

const heroAttacks = function(figthBtn) {
  const attackNumHero = state.gameHero.strength * randNum(1, 2);
  const attackNumEnemy = state.gameHero.strength * randNum(1, 2);
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
  }

  console.log(state);

  if (state.gameHero.health > 0 && state.currentEnemy.health > 0)
    figthBtn.disabled = false;
};

const enemyAttacks = function(figthBtn) {
  console.log("enemy attacks");
};

// Start the game with a choice. //
startButton.addEventListener("click", startTheGame);
