import { allTheHeros } from "../model/Heros";
import createTheHeroPicker from "../views/HeroPicker";

const startTheGame = function(getTheRoot, heroForm) {
  getTheRoot.innerHTML = "";
  // Create the opening hero picker. //
  createTheHeroPicker(getTheRoot, allTheHeros);

  const allHeroOptions = document.querySelectorAll(".heroPicker__card");
  allHeroOptions.forEach(opt => {
    opt
      .querySelector(".btn-hero-choose")
      .addEventListener("click", event => heroForm(event));
  });
};

export default startTheGame;
