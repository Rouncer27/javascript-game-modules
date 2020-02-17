import "./card.scss";

const card = function(hero) {
  return `
  <div class="card heroCard heroPicker__card">
    <div class="card__gravitar">
      <div class="card__gravitar--display garvitar--${hero.heroType}"></div>
    </div>
    <div class="card__type">
      
      <p>${hero.heroType}</p>
    </div>
    <div class="card__stats">
      <p>Stats</p>
      <p>Health: <span>${hero.health}</span></p>
      <p>Strength: <span>${hero.strength}</span></p>
      <p>Agility: <span>${hero.agility}</span></p>
      <p>Speed: <span>${hero.speed}</span></p>
    </div>
    <div class="card__choose">
      <button class="btn btn-hero-choose" data-herotype="${hero.heroType}">Choose</button>
    </div>
  </div>`;
};

export default card;
