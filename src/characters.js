class Character {
  constructor(name = "trevor", health = 100) {
    this.name = name;
    this.health = health;
    this.agility;
    this.speed;
  }

  sayHi() {
    console.log(`Hello! ${this.name} and my health is ${this.health}`);
  }

  punch() {
    console.log("punch!!");
  }
}

export class Warrior extends Character {
  constructor(name, health) {
    super(name, health);
    this.heroType = "Warrior";
    this.name = name;
    this.health = 300;
  }
}

export class Mage extends Character {
  constructor(name, health, spell) {
    super(name, health);
    this.spell = spell;
  }
}

function CharacterTwo() {
  this.name = name;
  this.health = 100;

  this.sayHiInside = function() {
    console.log(`inside hi ${this.name} and my health is ${this.health}`);
  };
}

CharacterTwo.prototype.sayHi = function(name) {
  console.log(`inside hi ${this.name} and my health is ${this.health}`);
};

export const CreateCharacter = function() {
  console.log("creating a character!!");

  const hero = new Mage("suzy the grey", 150, "fireballs");
  return hero;
};

export const CreateCharacterTwo = function() {
  const heroTwo = new CharacterTwo("Blue");
  return heroTwo;
};
