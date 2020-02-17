import card from "./card/card";

const createTheHeroPicker = function(getTheRoot, heros) {
  const gameOpening = document.createElement("div");

  gameOpening.innerHTML = `
    <div class="heroPicker">
      <div class="heroPicker__title">
      <p>Welcome to the game</p>
      <p>Please choose your character.</p>
      </div>
      ${heros.map(hero => card(hero)).join("")}
    </div>
  `;

  getTheRoot.insertAdjacentElement("afterbegin", gameOpening);
};

export default createTheHeroPicker;
