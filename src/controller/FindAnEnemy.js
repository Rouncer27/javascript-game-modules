import { allEnemys, Slime, Troll } from "../model/Enemys";
import randomNumber from "../utils/randomNumber";

const findAnEnemy = function(allEnemys, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const enemyToFight = allEnemys[randomNumber(0, allEnemys.length - 1)];
      switch (enemyToFight.enemyType) {
        case "slime":
          state.currentEnemy = new Slime();
          break;
        case "troll":
          state.currentEnemy = new Troll();
          break;
      }
      resolve("Found an enemy!");
    }, 1000);
  });
};

export default findAnEnemy;
