import React, { useState, useEffect, useRef } from "react";
import InputManager from "./InputManager";
import Player from "./Player";
import Spawner from "./Spawner";
import World from "./World";

const RoguelikeMain = ({ width, height, tileSize }) => {
  const canvasRef = React.useRef(null);

  // const [player, setPlayer] = useState(new Player(0, 1, tileSize));

  const [world, setWorld] = useState(new World(width, height, tileSize));

  let inputManager = new InputManager();

  const handleInput = (action, data) => {
    console.log(`handle input ${action}:${JSON.stringify(data)}`);
    // let newPlayer = new Player();
    let newWorld = new World();
    Object.assign(newWorld, world);
    newWorld.movePlayer(data.x, data.y);
    setWorld(newWorld);
  };

  useEffect(() => {
    console.log("Create map!");
    let newWorld = new World();
    Object.assign(newWorld, world);
    newWorld.createCellularMap();
    newWorld.moveToSpace(world.player);
    let spawner = new Spawner(newWorld);
    spawner.spawnLoot(10);
    setWorld(newWorld);
  }, []);

  useEffect(() => {
    console.log("bind input");
    inputManager.bindKeys();
    inputManager.subscribe(handleInput);
    return () => {
      inputManager.unbindKeys();
      inputManager.unsubscribe(handleInput);
    };
  });

  useEffect(() => {
    console.log("draw to canvas");
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, width * tileSize, height * tileSize);
    world.draw(ctx);
    // player.draw(ctx);
  });

  return (
    <canvas
      ref={canvasRef}
      width={width * tileSize}
      height={height * tileSize}
      style={{ border: "1px solid black", backgroundColor: "grey" }}
    ></canvas>
  );
};

export default RoguelikeMain;
