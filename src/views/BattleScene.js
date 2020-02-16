const createTheBattleScene = function(getTheRoot, hero, enemy) {
  getTheRoot.innerHTML = "";
  getTheRoot.innerHTML = `
    <div>
      <div>
        <div class="card heroCard">
          <h2>${hero.name}</h2>
          <div class="card__gravitar">
            <img src="${hero.gravitar}" alt="${hero.heroType}" />
          </div>
          <p class="cardHealth heroCard__health">Health: <span>${
            hero.health
          }</span></p>
        </div>

        <div class="actions">
          <h2>Actions</h2>
          <div>
            <button class="btn btnFight">Attack</button>
            <button class="btn btnRun">Run</button>
          </div>
        </div>

        <div class="card enemyCard">
          <h2>${enemy.enemyType}</h2>
          <div class="cardGravitar">
            <img src="${enemy.gravitar}" alt="${enemy.enemyType}" />
          </div>
          <p class="cardHealth enemyCard__health">${
            enemy.health > 0 ? "I'm still alive!!" : "Oh no! Im dead!"
          }</p>
        </div>
      </div>
    </div>
  `;
};

export default createTheBattleScene;
