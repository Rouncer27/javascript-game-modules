import "./styles/styles.scss";

import startTheGame from "./controller/StartTheGame";
import startTheFight from "./controller/startTheFight";
import findAnEnemyFunc from "./controller/FindAnEnemy";

window.state = {
  gameHero: null,
  currentEnemy: null
};

const getTheRoot = document.getElementById("root");
const startButton = document.querySelector(".btn-start");

export const findAnEnemy = async function() {
  await findAnEnemyFunc(state);
  startTheFight(getTheRoot, state);
};

startButton.addEventListener("click", () => startTheGame(getTheRoot, state));
