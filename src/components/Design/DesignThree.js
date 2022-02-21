import React, { Suspense } from "react";
import { Box, OrbitControls, Text } from "@react-three/drei";
import { Wall, Floor, Ceiling, Glass, Light } from "../Room";
import * as THREE from "three";
import BasinModel from "../../utils/NewDesignBasin";
import BathTubModel from "../../utils/NewDesignBathTub";
import BathtubPipeModel from "../../utils/NewDesignBathTubPipe";
import CubeTumblerModel from "../../utils/NewDesignCubeTumbler";
import FloorWasteModel from "../../utils/NewDesignFloorWaste";
import InsertWasteModel from "../../utils/NewDesignInsertWaste";
import MirrorCabinetModel from "../../utils/NewDesignMirrorCabinet";
import RobeHookModel from "../../utils/NewDesignRobeHook";
import ShowerPipeModel from "../../utils/NewDesignShowerPipe";
import TowelRailModel from "../../utils/NewDesignTowelRail";
import TowelRailTwoModel from "../../utils/NewDesignTowelRailModel";
import VanityModel from "../../utils/NewDesignVanity";
import WallPipeModel from "../../utils/NewDesignWallPipe";
import WallTopAssembliesModel from "../../utils/NewDesignWallTopAssemblies";

function DesignThree({ mode }) {
  let height = mode === "VR" ? 0.6 : -1.2;
  const base = new THREE.TextureLoader().load("assets/ShowerFloor.jpg");
  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(4, 4);

  return (
    <Suspense
      fallback={
        <Text color="white" anchorX="center" anchorY="middle">
          Loading
        </Text>
      }
    >
      <OrbitControls />

      <group position={[0, height, 0]}>
        <Wall
          position={[0, 1.2, -1.15]}
          rotation={[0, 0, 0]}
          scale={[3.4, 2.4, 0.1]}
          type="wall"
        ></Wall>

        <Wall
          position={[1.7, 1.2, 0]}
          rotation={[0, 0, 0]}
          scale={[0.1, 2.4, 2.3]}
          type="sideWall"
        ></Wall>

        <Wall
          position={[0, 1.2, 1.15]}
          rotation={[0, 0, 0]}
          scale={[-3.4, 2.4, 0.1]}
          type="wall"
        ></Wall>

        <Wall
          position={[-1.7, 1.2, 0]}
          rotation={[0, 0, 0]}
          scale={[0.1, 2.4, -2.3]}
          type="wall"
        ></Wall>

        <Ceiling
          position={[0, 2.4, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.4, 0.1, -2.3]}
          type="ceiling"
        ></Ceiling>

        <Floor
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.4, 0.1, -2.3]}
          type="floor"
        ></Floor>

        <group position={[0, 0, -0.1]}>
          <BasinModel position={[-1.55, 0.7, 0.5]} rotation={[0, 1.5, 0]} />
          <CubeTumblerModel
            position={[-1.65, 1, 0.77]}
            rotation={[0, 1.5, 0]}
          />
          <MirrorCabinetModel
            position={[-1.65, 1.1, 0.5]}
            rotation={[0, 1.5, 0]}
          />
          <RobeHookModel position={[-1.65, 0.6, 1.1]} rotation={[0, 1.5, 0]} />
          <VanityModel position={[-1.63, 0, 0.5]} rotation={[0, 1.55, 0]} />

          <WallPipeModel position={[-1.65, 1, 0.4]} rotation={[0, 1.5, 0]} />
        </group>
        <group>
          <BathTubModel
            position={[-0.7, 0, -0.7]}
            rotation={[0, 0, 0]}
            scale={[1.1, 1.1, 1.1]}
          />
          <BathtubPipeModel
            position={[0.25, 0.05, -0.7]}
            rotation={[0, -1.5, 0]}
          />

          <FloorWasteModel
            position={[-0.55, 0.06, 0.25]}
            rotation={[0, 0, 0]}
          />
          <TowelRailTwoModel
            position={[-1.65, 1.1, -0.7]}
            rotation={[0, 1.56, 0]}
          />
        </group>

        <group>
          <InsertWasteModel position={[1.3, 0.07, -0.8]} rotation={[0, 0, 0]} />

          <ShowerPipeModel position={[1, 1.75, -1.1]} rotation={[0, 0, 0]} />
          <TowelRailModel position={[1, 0.5, 1.03]} rotation={[0, 3.2, 0]} />
          <WallTopAssembliesModel
            position={[1.3, 1.2, -1.1]}
            rotation={[0, 0, 0]}
          />
          <Glass
            position={[0.5, 0.93, -0.5]}
            rotation={[0, 0, 0]}
            scale={[0.01, 1.9, 1.2]}
            type="glass"
          ></Glass>
          <Box
            args={[1, 1, 1]}
            position={[1.1, 0.03, -0.5]}
            rotation={[0, 0, 0]}
            scale={[1.2, 0.05, 1.2]}
          >
            <meshBasicMaterial attach="material" color="white" map={base} />
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
  );
}

export default DesignThree;
