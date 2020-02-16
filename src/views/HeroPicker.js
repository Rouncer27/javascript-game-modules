const createTheHeroPicker = function(getTheRoot, heros) {
  const gameOpening = document.createElement("div");

  gameOpening.innerHTML = `
    <div class="heroPicker">
      <div class="heroPicker__title">
      <p>Welcome to the game</p>
      <p>Please choose your character.</p>
      </div>
      ${heros
        .map(hero => {
          return `
            <div class="card heroCard heroPicker__card">
              <div class="card__gravitar">
                <img src="${hero.gravitar}" alt="${hero.heroType}" />
              </div>
              <div class="card__type">
                <p>${hero.heroType}</p>
              </div>
              <div class="card__stats">
                <p>Stats</p>
                <p>Health: </p>
                <p>Strength: </p>
                <p>Agility: </p>
                <p>Speed: </p>
              </div>
              <div class="card__choose">
                <button class="btn btn-hero-choose" data-herotype="${hero.heroType}">Choose</button>
              </div>
            </div>`;
        })
        .join("")}
    </div>
  `;

  getTheRoot.insertAdjacentElement("afterbegin", gameOpening);
};

export default createTheHeroPicker;
