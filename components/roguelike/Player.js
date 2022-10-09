import Entity from "./Entity.js";

class Player extends Entity {
  attributes = {
    name: "Player",
    ascii: "@",
    color: "black",
    health: 10,
  };

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  copyPlayer() {
    let newPlayer = new Player();
    Object.assign(newPlayer, this);
    return newPlayer;
  }
}
export default Player;
