import "./styles.css";
import React, { useRef, Suspense } from "react";
import { Box, OrbitControls, useTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ARCanvas } from "@react-three/xr";
import Model from "./Model";
import DoorModel from "./Door";
import BasinModel from "./Basin";
import ShowerModel from "./Shower";
import PipeModel from "./Pipe";
import WasteModel from "./Waste";
import TubModel from "./Tub";

const Light = ({
  position,
  color,
  intensity,
  orbitalOffset = 0,
  orbitalSpeed = 1
}) => {
  const ref = useRef();
  useFrame(() => {
    // let date = Date.now() * orbitalSpeed * 0.001 + orbitalOffset;
    // ref.current.position.set(
    //   Math.cos(date) * 2 + position[0],
    //   Math.sin(date) * 2 + position[1],
    //   Math.sin(date) * 2 + position[2]
    // );
  });
  const texture = useTexture(
    "https://content.reece.com.au/dxresources/f157/f157a1e5-5803-4fbb-a3c6-4914f86bf4db.jpg"
  );
  return (
    <group position={position} ref={ref}>
      {/* <sprite>
        <spriteMaterial
          attach="material"
          map={texture}
          transparent
          opacity={0.7}
          color={color}
        />
      </sprite> */}
      <pointLight color={color} intensity={intensity} decay={2} distance={20} />
    </group>
  );
};

export default function App() {
  const base = new THREE.TextureLoader().load(
    "https://content.reece.com.au/dxresources/f157/f157a1e5-5803-4fbb-a3c6-4914f86bf4db.jpg"
  );
  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(5, 4);
  const floor = new THREE.TextureLoader().load("unnamed.jpg");
  floor.wrapS = THREE.RepeatWrapping;
  floor.wrapT = THREE.RepeatWrapping;
  floor.repeat.set(3, 3);
  const glass = new THREE.TextureLoader().load("glass.jpeg");
  return (
    <ARCanvas camera={{ position: [0, 2, 10] }}>
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
            position={[0, 1.2, -2]}
            rotation={[0, 0, 0]}
            scale={[5, 2.4, 0.1]}
          >
            <Box args={[1, 1, 1]}>
              <meshBasicMaterial attach="material" color={"white"} map={base} />
            </Box>
          </group>
          <group
            position={[2.5, 1.2, 0]}
            rotation={[0, 0, 0]}
            scale={[0.1, 2.4, 4]}
          >
            <Box args={[1, 1, 1]}>
              <meshBasicMaterial attach="material" color={"white"} map={base} />
            </Box>
          </group>
          <group
            position={[0, 1.2, 2]}
            rotation={[0, 0, 0]}
            scale={[-5, 2.4, 0.1]}
          >
            <Box args={[1, 1, 1]}>
              <meshBasicMaterial attach="material" color={"white"} map={base} />
            </Box>
          </group>
          <group
            position={[-2.5, 1.2, 0]}
            rotation={[0, 0, 0]}
            scale={[0.1, 2.4, -4]}
          >
            <Box args={[1, 1, 1]}>
              <meshBasicMaterial attach="material" color={"white"} map={base} />
            </Box>
          </group>
          <group
            position={[0, 2.4, 0]}
            rotation={[0, 0, 0]}
            scale={[-5, 0.1, -4]}
          >
            <Box args={[1, 1, 1]}>
              <meshStandardMaterial attach="material" color="#413426" />
            </Box>
          </group>
          <group
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[-5, 0.1, -4]}
          >
            <Box args={[1, 1, 1]}>
              <meshBasicMaterial
                attach="material"
                color={"white"}
                map={floor}
              />
            </Box>
          </group>

          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[10, 10]} />
            <meshLambertMaterial attach="material" color="lightblue" />
          </mesh>

          <Model
            scenePath="../public/Reece.glb"
            position={[0.8, 0.047, -1.5]}
            rotation={[0, 0, 0]}
          />
          <DoorModel
            position={[1.8, 0, 2.1]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 2]}
          />
          <BasinModel position={[2.1, 1, 0.5]} rotation={[0, -1.6, 0]} />
          <PipeModel position={[2.35, 1.09, 0.5]} rotation={[0, -1.6, 0]} />
          <ShowerModel position={[-1.5, 1.7, -1.95]} rotation={[0, 0.1, 0]} />
          <WasteModel position={[-2.3, 0.06, -1.8]} />
          <TubModel position={[-1.3, 0, 1.2]} rotation={[0, -0.1, 0]} />

          <group
            position={[-0.9, 1.2, -1]}
            rotation={[0, 0, 0]}
            scale={[0.01, 2.4, 2]}
          >
            <Box args={[1, 1, 1]}>
              <meshBasicMaterial
                attach="material"
                color={"white"}
                map={glass}
              />
            </Box>
          </group>
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
    </ARCanvas>
  );
}
