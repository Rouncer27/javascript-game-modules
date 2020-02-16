const createHeroPage = function(getTheRoot, hero) {
  console.log(hero);
  getTheRoot.innerHTML = `
    <div class="heroDashboard">
      <div class="heroDashboard__wrapper">
        <h2>Welcome, ${hero.name}</h2>
        <div class="heroDashboard__gravitar">
          <div class="heroDashboard__gravitar--display ${hero.heroType}"></div>
        </div>
        <p>Health: ${hero.health}</p>
        <div class="heroDashboard__stats">
          <h3>Stats</h3>
          <p>Level: ${hero.level}</p>
          <p>Strength: ${hero.strength}</p>
          <p>Agility: ${hero.agility}</p>
          <p>Speed: ${hero.speed}</p>
          <p>Magic: ${
            hero.magic
              ? hero.magic
              : `you don't have any magic, you're a ${hero.heroType}`
          }</p>
        </div>
      </div>
      <div class="heroDashboard__actions"> 
        <div><p>What do you want to do?</p></div>
        <button class="btn findBtn">Find Someone (or something) to fight!</button>
        <button class="btn restBtn">Rest</button>
      </div>
    </div>
  `;
};

export default createHeroPage;
