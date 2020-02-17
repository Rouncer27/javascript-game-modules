import createTheBattleScene from "../views/BattleScene";
import attackFightDecision from "./attackFightDecision";

const startTheFight = function(getTheRoot, state) {
  createTheBattleScene(getTheRoot, state.gameHero, state.currentEnemy);
  const fightBtn = document.querySelector(".btnFight");
  const runBtn = document.querySelector(".btnRun");

  fightBtn.addEventListener("click", e =>
    attackFightDecision(e, state, getTheRoot)
  );
  runBtn.addEventListener("click", e => console.log("RUN!!"));
};

export default startTheFight;
