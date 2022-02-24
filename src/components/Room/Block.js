import React from "react";
import * as THREE from "three";
import { Box } from "@react-three/drei";

function Block({ position, rotation, scale, type, color }) {
  let map = setTexture(type);
  let [opacity, transparent] = type === "glass" ? [0.5, true] : [1, false];
  let [castShadow, receiveShadow] =
    type === "glass" || type === "ceiling" ? [false, false] : [true, true];

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Box
        args={[1, 1, 1]}
        castShadow={castShadow}
        receiveShadow={receiveShadow}
      >
        <meshStandardMaterial
          attach="material"
          map={map}
          color={color}
          transparent={transparent}
          opacity={opacity}
        />
      </Box>
    </group>
  );
}

function setTexture(type) {
  const wall = new THREE.TextureLoader().load("assets/wall.jpeg");
  const floor = new THREE.TextureLoader().load("assets/floor.png");
  const sideWall = new THREE.TextureLoader().load("assets/SideWall.jpg");
  const showerFloor = new THREE.TextureLoader().load("assets/ShowerFloor.jpg");
  const { x, y } = setWallTextureRepetition(type);

  wall.wrapS = THREE.RepeatWrapping;
  wall.wrapT = THREE.RepeatWrapping;
  wall.repeat.set(x / 0.306, y / 0.306);

  floor.wrapS = THREE.RepeatWrapping;
  floor.wrapT = THREE.RepeatWrapping;
  floor.repeat.set(3.4 / 0.6, 2.3 / 0.6);

  sideWall.wrapS = THREE.RepeatWrapping;
  sideWall.wrapT = THREE.RepeatWrapping;
  sideWall.repeat.set(2.3 / 0.1, 2.4 / 0.3);

  showerFloor.wrapS = THREE.RepeatWrapping;
  showerFloor.wrapT = THREE.RepeatWrapping;
  showerFloor.repeat.set(1.2 / 0.3, 1.22 / 0.3);

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
    case "wall-1":
      return { x: 3.4, y: 2.4 };
    case "wall-3":
      return { x: 1.7, y: 2.4 };
    case "wall-3-top":
      return { x: 0.9, y: 0.3 };
    case "wall-3-side":
      return { x: 0.9, y: 2.4 };
    default:
      return { x: 2.3, y: 2.4 };
  }
}

export default Block;
