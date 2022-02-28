import * as THREE from "three";
import blockData from "../data/blockData";

function setMapValue(block, tileRepetitionCoordinates, type) {
  const map = new THREE.TextureLoader().load(`assets/${block}`);

  const xTileRepetitionCoordinate = tileRepetitionCoordinates.x;
  const yTileRepetitionCoordinate = tileRepetitionCoordinates.y;
  const xTileRepetitionFactor = blockData[type].tileRepetitionFactor.x;
  const yTileRepetitionFactor = blockData[type].tileRepetitionFactor.y;

  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(
    xTileRepetitionCoordinate / xTileRepetitionFactor,
    yTileRepetitionCoordinate / yTileRepetitionFactor
  );

  return block ? map : null;
}

export default setMapValue;
