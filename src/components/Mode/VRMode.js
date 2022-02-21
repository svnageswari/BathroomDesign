import React, { useEffect } from "react";
import { VRCanvas, DefaultXRControllers } from "@react-three/xr";
import { useLocation } from "react-router-dom";
import getDesignComponent from "../../utils/roomDesign";

function VRMode() {
  useEffect(() => {
    setTimeout(() => {
      const vrButton = document.getElementById("VRButton");
      if (vrButton) {
        vrButton.style.display = "block";
      }
    }, 1000);

    return () => {
      const vrButton = document.getElementById("VRButton");
      if (vrButton) {
        vrButton.style.display = "none";
      }

      window.location.reload();
    };
  }, []);

  let design = useLocation().search.replace("?", "");

  return (
    <VRCanvas camera={{ position: [0, 2, 10] }}>
      <DefaultXRControllers />
      {getDesignComponent(design)}
    </VRCanvas>
  );
}

export default VRMode;
