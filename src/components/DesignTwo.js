import React, { Suspense, useRef } from "react";
import { Box, OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import DoorModel from "../utils/Door";
import VanityModel from "../utils/Vanity";
import TapModel from "../utils/Tap";
import MirrorModel from "../utils/Mirror";
import BathModel from "../utils/Bath";

const Light = ({ position, color, intensity }) => {
  const ref = useRef();
  return (
    <group position={position} ref={ref}>
      <pointLight color={color} intensity={intensity} decay={2} distance={20} />
    </group>
  );
};

function DesignTwo() {
  const base = new THREE.TextureLoader().load(
    "https://content.reece.com.au/dxresources/f157/f157a1e5-5803-4fbb-a3c6-4914f86bf4db.jpg"
  );
  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(5, 4);
  const floor = new THREE.TextureLoader().load("assets/floor.jpg");
  floor.wrapS = THREE.RepeatWrapping;
  floor.wrapT = THREE.RepeatWrapping;
  floor.repeat.set(3, 3);

  return (
    <Suspense
      fallback={
        <Text color="white" anchorX="center" anchorY="middle">
          Loading
        </Text>
      }
    >
      <OrbitControls />

      <group position={[0, -1.2, 0]}>
        <group
          position={[0, 1.3, -1.5]}
          rotation={[0, 0, 0]}
          scale={[3.5, 2.6, 0.1]}
        >
          <Box args={[1, 1, 1]}>
            <meshBasicMaterial attach="material" color={"white"} map={base} />
          </Box>
        </group>
        <group
          position={[1.75, 1.3, 0]}
          rotation={[0, 0, 0]}
          scale={[0.1, 2.6, 3]}
        >
          <Box args={[1, 1, 1]}>
            <meshBasicMaterial attach="material" color={"white"} map={base} />
          </Box>
        </group>
        <group
          position={[0, 1.3, 1.5]}
          rotation={[0, 0, 0]}
          scale={[-3.5, 2.6, 0.1]}
        >
          <Box args={[1, 1, 1]}>
            <meshBasicMaterial attach="material" color={"white"} map={base} />
            <meshBasicMaterial attach="material" color={"white"} map={base} />
          </Box>
        </group>
        <group
          position={[-1.75, 1.3, 0]}
          rotation={[0, 0, 0]}
          scale={[0.1, 2.6, -3]}
        >
          <Box args={[1, 1, 1]}>
            <meshBasicMaterial attach="material" color={"white"} map={base} />
          </Box>
        </group>
        <group
          position={[0, 2.6, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.5, 0.1, -3]}
        >
          <Box args={[1, 1, 1]}>
            <meshStandardMaterial attach="material" color="#413426" />
          </Box>
        </group>
        <group
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.5, 0.1, -3]}
        >
          <Box args={[1, 1, 1]}>
            <meshBasicMaterial attach="material" color={"white"} map={floor} />
          </Box>
        </group>
        <DoorModel
          position={[0, 0, 1.6]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 2]}
        />
        <VanityModel position={[-1.7, -0.12, 0.012]} rotation={[0, 1.5, 0]} />
        <TapModel
          position={[1.7, 0.85, 0.2]}
          rotation={[0, 4.6, 0]}
          scale={[1, 1, 1]}
        />
        <MirrorModel position={[-1.75, 0.803, 0.02]} rotation={[0, 1.5, 0]} />
        <BathModel
          position={[1.25, 0.001, 0.1]}
          rotation={[0, 1.6, 0]}
          scale={[1, 1, 1]}
        />
      </group>
      <directionalLight intensity={0.5} position={[6, 2, 1]} />
      <ambientLight intensity={0.1} />
      <Light
        position={[0, 2.4, 0]}
        color="white"
        intensity={2}
        distance={10}
        orbitalSpeed={2}
      />
      <Light
        position={[-2, 2.4, 4]}
        color="white"
        intensity={2}
        distance={10}
        orbitalSpeed={2}
      />
    </Suspense>
  );
}

export default DesignTwo;
