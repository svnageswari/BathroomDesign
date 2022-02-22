import React from "react";
import * as THREE from "three";
import { Box } from "@react-three/drei";

function Block({ position, rotation, scale, type, color }) {
  let map = setTexture(type);
  let [opacity, transparent] = type === "glass" ? [0.5, true] : [0, false];

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Box args={[1, 1, 1]}>
        <meshBasicMaterial
          attach="material"
          color={color}
          map={map}
          transparent={transparent}
          opacity={opacity}
        />
      </Box>
    </group>
  );
}

function setTexture(type) {
  const wall = new THREE.TextureLoader().load("assets/wall.jpeg");
  const floor = new THREE.TextureLoader().load("assets/floor.jpg");
  const sideWall = new THREE.TextureLoader().load("assets/SideWall.jpg");
  const showerFloor = new THREE.TextureLoader().load("assets/ShowerFloor.jpg");
  const { x, y } = setWallTextureRepetition(type);

  wall.wrapS = THREE.RepeatWrapping;
  wall.wrapT = THREE.RepeatWrapping;
  wall.repeat.set(x, y);

  floor.wrapS = THREE.RepeatWrapping;
  floor.wrapT = THREE.RepeatWrapping;
  floor.repeat.set(3, 3);

  sideWall.wrapS = THREE.RepeatWrapping;
  sideWall.wrapT = THREE.RepeatWrapping;
  sideWall.repeat.set(14, 5);

  showerFloor.wrapS = THREE.RepeatWrapping;
  showerFloor.wrapT = THREE.RepeatWrapping;
  showerFloor.repeat.set(4, 4);

  type = type.split("-")[0];

  switch (type) {
    case "wall":
      return wall;
    case "floor":
      return floor;
    case "sideWall":
      return sideWall;
    case "showerFloor":
      return showerFloor;
    default:
      return null;
  }
}

function setWallTextureRepetition(type) {
  switch (type) {
    case "wall-3":
      return { x: 2, y: 4 };
    case "wall-3-top":
      return { x: 1.5, y: 1 };
    case "wall-3-side":
      return { x: 1.2, y: 4 };
    default:
      return { x: 5, y: 4 };
  }
}

export default Block;
