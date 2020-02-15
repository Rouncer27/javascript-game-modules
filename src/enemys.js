import slime from "./images/ememy-slime.png";

class Enemy {
  constructor(enemyType, health, agility, speed, gravitar) {
    this.enemyType = enemyType;
    this.gravitar = gravitar;
    this.health = health;
    this.agility = agility;
    this.speed = speed;
  }
}

export class Slime extends Enemy {
  constructor() {
    super("slime", 88, 5, 5, slime);
  }
}

export const allEnemys = [{ enemyType: "slime" }];
