import attacksHeroFirst from "./attacksHeroFirst";
import attacksEnemyFirst from "./attacksEnemyFirst";
import randomNumber from "../utils/randomNumber";

const attackFightDecision = function(e, state, getTheRoot) {
  e.currentTarget.disabled = true;
  const emenyChangeToStrike =
    (state.currentEnemy.speed * state.currentEnemy.agility) /
    randomNumber(1, 30);
  const heroChangeToStrike =
    (state.gameHero.speed * state.gameHero.agility) / randomNumber(1, 30);

  console.log(heroChangeToStrike, emenyChangeToStrike);

  if (heroChangeToStrike >= emenyChangeToStrike) {
    attacksHeroFirst(state, getTheRoot, e.currentTarget);
  } else {
    attacksEnemyFirst(state, getTheRoot, e.currentTarget);
  }
};

export default attackFightDecision;
