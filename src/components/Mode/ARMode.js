import React, { useEffect } from "react";
import { ARCanvas } from "@react-three/xr";
import { useLocation } from "react-router-dom";
import DesignOne from "../Design/DesignOne";
import DesignTwo from "../Design/DesignTwo";
import DesignThree from "../Design/DesignThree";

function ARMode() {
  useEffect(() => {
    setTimeout(() => {
      const arBtn = document.getElementById("ARButton");
      if (arBtn) {
        arBtn.style.display = "block";
      }
    }, 1000);

    return () => {
      const arBtn = document.getElementById("ARButton");
      if (arBtn) {
        arBtn.style.display = "none";
      }

      window.location.reload();
    };
  }, []);

  let design = useLocation().search.replace("?", "");

  return (
    <ARCanvas camera={{ position: [0, 2, 10] }}>
      {getDesignComponent(design)}
    </ARCanvas>
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

export default ARMode;
