import slimeImg from "../images/ememy-slime.png";

const slime = {
  enemyType: "slime",
  gravitar: slimeImg,
  health: 42,
  strength: 6,
  agility: 5,
  speed: 5,
  exp: 5
};

const troll = {
  enemyType: "troll",
  gravitar: slimeImg,
  health: 120,
  strength: 12,
  agility: 10,
  speed: 7,
  exp: 15
};

const zombie = {
  enemyType: "zombie",
  gravitar: slimeImg,
  health: 155,
  strength: 18,
  agility: 2,
  speed: 2,
  exp: 25
};

export const allEnemys = [slime, troll, zombie];

class Enemy {
  constructor({ enemyType, gravitar, health, strength, agility, speed, exp }) {
    this.enemyType = enemyType;
    this.gravitar = gravitar;
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
    this.exp = exp;
  }
}

export class Slime extends Enemy {
  constructor() {
    super({ ...slime });
  }
}

export class Troll extends Enemy {
  constructor() {
    super({ ...troll });
  }
}

export class Zombie extends Enemy {
  constructor() {
    super({ ...zombie });
  }
}
