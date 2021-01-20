// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randomSoldier = Math.floor(Math.random() * this.vikingArmy.length);
    let combat = this.saxonArmy[randomSoldier].receiveDamage(this.vikingArmy[randomSoldier].strength);
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    return combat;
  }

  saxonAttack() {
    let randomSoldier = Math.floor(Math.random() * this.vikingArmy.length);
    let combat = this.vikingArmy[randomSoldier].receiveDamage(this.saxonArmy[randomSoldier].strength);
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    return combat;
  }

  // Proposal for unifying the attack funtions
  combat(attackingArmy, defendingArmy) {
    let randomSoldier = Math.floor(Math.random() * this.vikingArmy.length);
    let combat = this.defendingArmy[randomSoldier].receiveDamage(this.attackingArmy[randomSoldier].strength);
    this.defendingArmy = this.defendingArmy.filter(soldier => soldier.health > 0);
    return combat;
  }
  
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
