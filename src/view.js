import heroRegisterModal from "./views/HeroRegisterModal";

const getTheRoot = document.getElementById("root");

export const createTheFormModel = function() {
  const formEl = document.createElement("div");
  formEl.classList.add("model");
  formEl.innerHTML = heroRegisterModal;

  getTheRoot.insertAdjacentElement("afterbegin", formEl);
  const form = document.querySelector(".hero-submit-form");
  const cancelBtn = document.querySelector(".btn-cancel");

  return { form, formEl, cancelBtn };
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
