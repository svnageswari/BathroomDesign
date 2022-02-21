import React, { useEffect } from "react";
import { VRCanvas, DefaultXRControllers } from "@react-three/xr";
import { useLocation } from "react-router-dom";
import DesignTwo from "../Design/DesignTwo";
import DesignOne from "../Design/DesignOne";
import DesignThree from "../Design/DesignThree";

function VRMode() {
  useEffect(() => {
    setTimeout(() => {
      const vrBtn = document.getElementById("VRButton");
      if (vrBtn) {
        vrBtn.style.display = "block";
      }
    }, 1000);

    return () => {
      const vrBtn = document.getElementById("VRButton");
      if (vrBtn) {
        vrBtn.style.display = "none";
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

function getDesignComponent(design) {
  switch (design) {
    case "Design_1":
      return <DesignOne></DesignOne>;
    case "Design_2":
      return <DesignTwo></DesignTwo>;
    case "Design_3":
      return <DesignThree></DesignThree>;
    default:
      return <DesignOne></DesignOne>;
  }
}

export default VRMode;
