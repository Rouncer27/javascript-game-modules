import "./styles.scss";
import { startTheGame } from "./view";
import { CreateCharacter, CreateCharacterTwo } from "./characters";

const startButton = document.querySelector(".btn-start");
startButton.addEventListener("click", startTheGame);

// const newHero = CreateCharacter();
// newHero.sayHi();
// newHero.punch();
// console.log(newHero.spell);
// console.log(newHero.health);

// const newHeroTwo = CreateCharacter();
// newHeroTwo.sayHi();
// newHeroTwo.punch();
// console.log(newHeroTwo.spell);
// newHeroTwo.health = 15;
// console.log(newHeroTwo.health);

// console.log("newHero", newHero);
// console.log("newHeroTwo", newHeroTwo);

// console.log("newHero", newHero);

// const newHeroTwo = CreateCharacterTwo();
// newHeroTwo.sayHi();
// newHeroTwo.sayHiInside();

// console.log("newHeroTwo", newHeroTwo);

// const newHeroThree = {};
// console.log("newHeroThree", newHeroThree);
