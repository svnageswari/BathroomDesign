import React, { useEffect } from "react";
import { VRCanvas, DefaultXRControllers } from "@react-three/xr";
import { useLocation } from "react-router-dom";
import DesignTwo from "./DesignTwo";
import DesignOne from "./DesignOne";

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
      {design === "Design_1" ? <DesignOne /> : <DesignTwo />}
    </VRCanvas>
  );
}

export default VRMode;
