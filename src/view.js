import { Warrior, Mage } from "./characters";

const getTheRoot = document.getElementById("root");

const heroRegister = `
  <div class="model__content">
    <form class="hero-submit-form">
      <fieldset>
        <label id="heroName">Name</label>
        <input id="heroName" name="heroName" type="text" />
      </fieldset>
      <fieldset>
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
    <button class="btn btn-cancel">Cancel</button>
  </div>
  <div class="model__background"></div>
;`;

export const createTheHeroPicker = function(heros) {
  return `
    <div>
      <p>Welcome to the game</p>
      <p>Please choose your character.</p>
      ${heros
        .map(hero => {
          return `
            <div class="hero-choose">
              <p>Type: ${hero.heroType}</p>
              <button class="btn btn-hero-choose" data-herotype="${hero.heroType}">Choose</button>
            </div>`;
        })
        .join("")}
    </div>
  `;
};

export const createTheFormModel = function(type) {
  const formEl = document.createElement("div");
  formEl.classList.add("model");
  formEl.innerHTML = heroRegister;

  getTheRoot.insertAdjacentElement("afterbegin", formEl);
  const form = document.querySelector(".hero-submit-form");
  const cancelBtn = document.querySelector(".btn-cancel");

  return { form, formEl, cancelBtn };
};

export const createHeroPage = function(hero) {
  getTheRoot.innerHTML = `
    <div>
      <div>
        <h2>Welcome, ${hero.name}</h2>
        <p>Health: ${hero.health}</p>
        <p>Magic: ${
          hero.magic
            ? hero.magic
            : `you don't have any magic, you're a ${hero.heroType}`
        }</p>
      </div>
      <div>What do you want to do?</div>
      <div>
        <button class="btn findBtn">Find Someone (or something) to fight!</button>
        <button class="btn restBtn">Rest</button>
      </div>
    </div>
  `;
};

export const createTheBattleScene = function(hero, enemy) {
  getTheRoot.innerHTML = "";
  getTheRoot.innerHTML = `
    <div>
      <div>
        <div class="card heroCard">
          <h2>${hero.name}</h2>
          <div class="cardGravitar">
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

export const updateCharactersHealth = function(state) {
  const heroHealthDisplay = document.querySelector(".heroCard__health span");
  const enemyHealthDisplay = document.querySelector(".enemyCard__health");
  enemyHealthDisplay.innerHTML = `${
    state.currentEnemy.health > 0
      ? "I'm still alive!! You'll never defeat me!"
      : "Oh no! Im dead!"
  }`;

  heroHealthDisplay.innerHTML = state.gameHero.health;
};
