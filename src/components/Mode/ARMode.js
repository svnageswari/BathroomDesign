import React, { useEffect } from "react";
import { ARCanvas } from "@react-three/xr";
import { useLocation } from "react-router-dom";
import getDesignComponent from "../../utils/roomDesign";

function ARMode() {
  useEffect(() => {
    setTimeout(() => {
      const arButton = document.getElementById("ARButton");
      if (arButton) {
        arButton.style.display = "block";
      }
    }, 1000);

    return () => {
      const arButton = document.getElementById("ARButton");
      if (arButton) {
        arButton.style.display = "none";
      }

      window.location.reload();
    };
  }, []);

  let design = useLocation().search.replace("?", "");

  return (
    <ARCanvas camera={{ position: [0, 2, 10] }}>
      {getDesignComponent(design, "AR")}
    </ARCanvas>
  );
}

export default ARMode;
