import Loot from "./Loot.js";
import Monster from "./Monster.js";
import Stairs from "./Stairs.js";

const monsterTable = [
  {
    name: "Goblin",
    color: "green",
    ascii: "6",
    offset: { x: 2, y: 3 },
    health: 5,
  },
];

const lootTable = [
  {
    name: "Long Sword",
    color: "darkgrey",
    ascii: "/",
    offset: { x: 6, y: 3 },
  },
  { name: "Health Potion", color: "red", ascii: "H", offset: { x: 5, y: 3 } },
  { name: "Gold Coin", color: "yellow", ascii: "$", offset: { x: 3, y: 3 } },
  {
    name: "Light Armor",
    color: "lightgrey",
    ascii: "#",
    offset: { x: 4, y: 3 },
  },
];

class Spawner {
  constructor(world) {
    this.world = world;
  }
  spawn(spawnCount, createEntity) {
    for (let count = 0; count < spawnCount; count++) {
      let entity = createEntity();
      this.world.add(entity);
      console.log(entity);
      this.world.moveToSpace(entity);
    }
  }
  spawnLoot(spawnCount) {
    console.log("spawnLoot runs");
    this.spawn(spawnCount, () => {
      return new Loot(
        getRandomInt(this.world.width - 1),
        getRandomInt(this.world.height - 1),
        this.world.tileSize,
        lootTable[getRandomInt(lootTable.length)]
      );
    });
  }

  spawnMonsters(spawnCount) {
    console.log("spawn monster");
    this.spawn(spawnCount, () => {
      return new Monster(
        getRandomInt(this.world.width - 1),
        getRandomInt(this.world.height - 1),
        this.world.tileSize,
        monsterTable[getRandomInt(monsterTable.length)]
      );
    });
  }

  spawnStairs() {
    let stairs = new Stairs(
      this.world.width - 10,
      this.world.height - 10,
      this.world.tileSize
    );
    this.world.add(stairs);
    this.world.moveToSpace(stairs);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Spawner;
