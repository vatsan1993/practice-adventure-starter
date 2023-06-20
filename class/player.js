const { Item } = require('./item.js');
const { Room } = require('./room.js');

class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log('You cannot move in that direction');
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    let index = 0;
    for (; index < this.currentRoom.items.length; index++) {
      let item = this.currentRoom.items[index];
      if (item.name === itemName) {
        let removedItem = this.currentRoom.items.splice(index, 1);
        this.items.push(removedItem[0]);
        break;
      }
    }

    // let item = this.currentRoom.getItemByName(itemName);
    // this.items.push(item);
    // this.currentRoom.re
    // return item;
  }

  dropItem(itemName) {
    // Fill this in
    for (let index = 0; index < this.items.length; index++) {
      let item = this.items[index];
      if (item.name === itemName) {
        this.items.splice(index, 1);
        this.currentRoom.items.push(item);
        return item;
      }
    }
  }

  eatItem(itemName) {
    // Fill this in
    let index = 0;
    for (; index < this.items.length; index++) {
      let item = this.items[index];
      if (!item.isFood) {
        continue;
      }
      if (item.name === itemName) {
        break;
      }
    }
    this.items.splice(index, 1);
  }

  getItemByName(name) {
    // Fill this in
    for (let item of this.items) {
      if (item.name === name) {
        return item;
      }
    }
    return null;
  }
}

// let item = new Item('rock', 'just a simple rock');
// let room = new Room('Test Room', 'A test room');
// let player = new Player('player', room);
// room.items.push(item);
// player.takeItem('rock');
// console.log(player.getItemByName('rock'));

module.exports = {
  Player,
};
