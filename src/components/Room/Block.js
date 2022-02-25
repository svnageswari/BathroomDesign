import React from "react";
import * as THREE from "three";
import { Box } from "@react-three/drei";

function Block({ position, rotation, scale, type, color }) {
  let map = setTexture(type);
  let [opacity, transparent] = type === "glass" ? [0.5, true] : [1, false];
  let [castShadow, receiveShadow] =
    type === "glass" || type === "ceiling" ? [false, false] : [true, true];
  let roughness = setRoughness(type);
  let normals = setNormals(type);

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
          normalMap={normals}
          roughnessMap={roughness}
        />
      </Box>
    </group>
  );
}

function setRoughness(type) {
  const wallRoughness = new THREE.TextureLoader().load("assets/wallRough.png");
  const floorRoughness = new THREE.TextureLoader().load(
    "assets/floorRough.png"
  );
  const sideWallRoughness = new THREE.TextureLoader().load(
    "assets/sideWallRough.png"
  );
  const showerFloorRoughness = new THREE.TextureLoader().load(
    "assets/showerFloorRough.png"
  );
  
  wallRoughness.wrapS = THREE.RepeatWrapping;
  wallRoughness.wrapT = THREE.RepeatWrapping;
  wallRoughness.repeat.set(2.3 / 0.306, 2.4 / 0.306);

  floorRoughness.wrapS = THREE.RepeatWrapping;
  floorRoughness.wrapT = THREE.RepeatWrapping;
  floorRoughness.repeat.set(3.4 / 0.6, 2.3 / 0.6);
  
  sideWallRoughness.wrapS = THREE.RepeatWrapping;
  sideWallRoughness.wrapT = THREE.RepeatWrapping;
  sideWallRoughness.repeat.set(2.3 / 0.1, 2.4 / 0.3);

  showerFloorRoughness.wrapS = THREE.RepeatWrapping;
  showerFloorRoughness.wrapT = THREE.RepeatWrapping;
  showerFloorRoughness.repeat.set(1.2 / 0.3, 1.22 / 0.3);

  type = type.split("-")[0];
  switch (type) {
    case "wall":
      return wallRoughness;
    case "floor":
      return floorRoughness;
    case "sideWall":
      return sideWallRoughness;
    case "showerFloor":
      return showerFloorRoughness;
    default:
      return null;
  }
}

function setTexture(type) {
  const wall = new THREE.TextureLoader().load("assets/wall.jpeg");
  const floor = new THREE.TextureLoader().load("assets/floor.png");
  const sideWall = new THREE.TextureLoader().load("assets/SideWall.jpg");
  const showerFloor = new THREE.TextureLoader().load("assets/ShowerFloor.jpg");

  wall.wrapS = THREE.RepeatWrapping;
  wall.wrapT = THREE.RepeatWrapping;
  wall.repeat.set(2.3 / 0.306, 2.4 / 0.306);

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

function setNormals(type) {
  const wallNormal = new THREE.TextureLoader().load("assets/wallNormal.png");
  const sideWallNormal = new THREE.TextureLoader().load(
    "assets/sideWallNormal.png"
  );
  const showerFloorNormal = new THREE.TextureLoader().load(
    "assets/showerFloorNormal.png"
  );

  wallNormal.wrapS = THREE.RepeatWrapping;
  wallNormal.wrapT = THREE.RepeatWrapping;
  wallNormal.repeat.set(2.3 / 0.306, 2.4 / 0.306);

  sideWallNormal.wrapS = THREE.RepeatWrapping;
  sideWallNormal.wrapT = THREE.RepeatWrapping;
  sideWallNormal.repeat.set(2.3 / 0.1, 2.4 / 0.3);

  showerFloorNormal.wrapS = THREE.RepeatWrapping;
  showerFloorNormal.wrapT = THREE.RepeatWrapping;
  showerFloorNormal.repeat.set(1.2 / 0.3, 1.22 / 0.3);
  type = type.split("-")[0];

  switch (type) {
    case "wall":
      return wallNormal;
    case "sideWall":
      return sideWallNormal;
    case "showerFloor":
      return showerFloorNormal;
    default:
      return null;
  }
}

export default Block;
