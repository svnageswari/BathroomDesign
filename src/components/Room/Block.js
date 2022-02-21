import React from "react";
import * as THREE from "three";
import { Box } from "@react-three/drei";

function Block({ position, rotation, scale, type }) {
  let map = setMapValue(type);
  let color = type === "ceiling" ? "#413426" : "white";

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Box args={[1, 1, 1]}>
        <meshBasicMaterial attach="material" color={color} map={map} />
      </Box>
    </group>
  );
}

function setMapValue(type) {
  const base = new THREE.TextureLoader().load(
    "https://content.reece.com.au/dxresources/f157/f157a1e5-5803-4fbb-a3c6-4914f86bf4db.jpg"
  );
  const floor = new THREE.TextureLoader().load("assets/floor.jpg");
  const glass = new THREE.TextureLoader().load("assets/glass.jpeg");
  const sideWall = new THREE.TextureLoader().load("assets/SideWall.jpg");

  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(5, 4);
  floor.wrapS = THREE.RepeatWrapping;
  floor.wrapT = THREE.RepeatWrapping;
  floor.repeat.set(3, 3);
  sideWall.wrapS = THREE.RepeatWrapping;
  sideWall.wrapT = THREE.RepeatWrapping;
  sideWall.repeat.set(14, 5);

  switch (type) {
    case "wall":
      return base;
    case "floor":
      return floor;
    case "glass":
      return glass;
    case "sideWall":
      return sideWall;
    default:
      return null;
  }
}

export default Block;
