import "./styles/styles.scss";
import { createTheFormModel } from "./view";
import createHeroPage from "./views/HeroPage";
import createTheBattleScene from "./views/BattleScene";
import { Knight, Wizard } from "./model/Heros";
import { allEnemys } from "./model/Enemys";

import startTheGame from "./controller/StartTheGame";
import findAnEnemyFunc from "./controller/FindAnEnemy";
import attackFightDecision from "./controller/attackFightDecision";

window.state = {
  gameHero: null,
  currentEnemy: null
};

const getTheRoot = document.getElementById("root");
const startButton = document.querySelector(".btn-start");

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

  createHeroPage(getTheRoot, state.gameHero);
  const findBtn = document.querySelector(".findBtn");
  const restBtn = document.querySelector(".restBtn");
  findBtn.addEventListener("click", findAnEnemy);
  restBtn.addEventListener("click", () => console.log("REST!!!"));
};

export const findAnEnemy = async function() {
  await findAnEnemyFunc(allEnemys, state);
  startTheFight();
};

export const startTheFight = function() {
  createTheBattleScene(getTheRoot, state.gameHero, state.currentEnemy);
  const fightBtn = document.querySelector(".btnFight");
  const runBtn = document.querySelector(".btnRun");

  fightBtn.addEventListener("click", e =>
    attackFightDecision(e, state, getTheRoot)
  );
  runBtn.addEventListener("click", e => console.log("RUN!!"));
};

startButton.addEventListener("click", () => startTheGame(getTheRoot, heroForm));
