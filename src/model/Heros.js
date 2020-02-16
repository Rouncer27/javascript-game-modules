import knightImg from "../images/hero-knight.png";
import wizardImg from "../images/hero-wizard.png";

const knight = {
  heroType: "knight",
  gravitar: knightImg,
  health: 300,
  strength: 20,
  agility: 10,
  speed: 25
};

const wizard = {
  heroType: "wizard",
  gravitar: wizardImg,
  health: 125,
  strength: 7,
  agility: 5,
  speed: 15
};

export const allTheHeros = [knight, wizard];

class Character {
  constructor(name, { heroType, gravitar, health, strength, agility, speed }) {
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
    super(name, { ...knight });
  }
}

export class Wizard extends Character {
  constructor(name, spell = "fire") {
    super(name, { ...wizard });
    this.spell = spell;
  }

  useMagic() {
    console.log(`I cast my spell ${this.spell}`);
  }
}
