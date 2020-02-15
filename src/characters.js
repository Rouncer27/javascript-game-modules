import knight from "./images/hero-knight.png";
import wizard from "./images/hero-wizard.png";

class Character {
  constructor(name, heroType, gravitar, health, strength, agility, speed) {
    this.name = name;
    this.heroType = heroType;
    this.gravitar = gravitar;
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
    this.level = 1;
    this.exp = 0;
  }

  sayHi() {
    console.log(`Hello! ${this.name} and my health is ${this.health}`);
  }

  punch() {
    console.log("punch!!");
  }
}

export class Knight extends Character {
  constructor(name) {
    super(name, "knight", knight, 300, 20, 10, 25);
  }
}

export class Wizard extends Character {
  constructor(name, spell = "fire") {
    super(name, "wizard", wizard, 125, 7, 5, 15);
    this.spell = spell;
  }
}

export const allTheHeros = function() {
  return [{ heroType: "knight" }, { heroType: "wizard" }];
};
