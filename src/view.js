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

export const startTheGame = function() {
  getTheRoot.innerHTML = "";
  const heros = allTheHeros();
  const gameOpening = document.createElement("div");

  gameOpening.innerHTML = `
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

  getTheRoot.insertAdjacentElement("afterbegin", gameOpening);
  const allHeroOptions = document.querySelectorAll(".hero-choose");
  allHeroOptions.forEach(opt => {
    opt
      .querySelector(".btn-hero-choose")
      .addEventListener("click", event => heroForm(event));
  });
};

const allTheHeros = function() {
  return [{ heroType: "warrior" }, { heroType: "mage" }];
};

const heroForm = function(event) {
  const type = event.currentTarget.dataset.herotype;
  createTheFormModel(type);
};

const createTheFormModel = function(type) {
  const formEl = document.createElement("div");
  formEl.classList.add("model");
  formEl.innerHTML = heroRegister;

  getTheRoot.insertAdjacentElement("afterbegin", formEl);
  const form = document.querySelector(".hero-submit-form");
  const cancelBtn = document.querySelector(".btn-cancel");

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
  let newHero;
  switch (type) {
    case "warrior":
      newHero = new Warrior((name = heroName));
      break;
    case "mage":
      newHero = new Mage((name = heroName));
      break;
  }

  console.log(newHero);
};
