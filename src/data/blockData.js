const blockData = {
  wall: {
    texture: "wallTexture.jpeg",
    normals: "wallNormal.png",
    roughness: "wallRough.png",
    tileRepetitionFactor: { x: 0.306, y: 0.306 },
  },
  floor: {
    texture: "floorTexture.png",
    normals: null,
    roughness: "floorRough.png",
    tileRepetitionFactor: { x: 0.6, y: 0.6 },
  },
  showerFloor: {
    texture: "showerFloorTexture.jpg",
    normals: "showerFloorNormal.png",
    roughness: "showerFloorRough.png",
    tileRepetitionFactor: { x: 0.3, y: 0.3 },
  },
  sideWall: {
    texture: "sideWallTexture.jpg",
    normals: "sideWallNormal.png",
    roughness: "sideWallRough.png",
    tileRepetitionFactor: { x: 0.1, y: 0.3 },
  },
};

export default blockData;
