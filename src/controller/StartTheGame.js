import { allTheHeros } from "../model/Heros";
import createTheHeroPicker from "../views/HeroPicker";
import getHeroInfo from "./getHeroInfo";

const startTheGame = function(getTheRoot, state) {
  getTheRoot.innerHTML = "";
  // Create the opening hero picker. //
  createTheHeroPicker(getTheRoot, allTheHeros);

  const allHeroOptions = document.querySelectorAll(".heroPicker__card");
  allHeroOptions.forEach(opt => {
    opt
      .querySelector(".btn-hero-choose")
      .addEventListener("click", event =>
        getHeroInfo(event, state, getTheRoot)
      );
  });
};

export default startTheGame;
