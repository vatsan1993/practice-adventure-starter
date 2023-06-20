const { Item } = require('./item.js');
// FILL THIS OUT

class Food extends Item {
  constructor(name, description) {
    super(name, description);
    this.isFood = true;
  }
}

module.exports = {
  Food,
};
