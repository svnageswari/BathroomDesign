import React, { useEffect } from "react";
import { ARCanvas } from "@react-three/xr";
import { useLocation } from "react-router-dom";
import DesignOne from "./DesignOne";
import DesignTwo from "./DesignTwo";

function ARMode() {
  useEffect(() => {
    setTimeout(() => {
      const arBtn = document.getElementById("ARButton");
      if (arBtn) {
        arBtn.style.display = "block";
      }
    }, 1000)
    

    return () => {
      const arBtn = document.getElementById("ARButton");
      if (arBtn) {
        arBtn.style.display = "none";
      }
    };
  }, []);

  let design = useLocation().search.replace("?", "");

  return (
    <ARCanvas camera={{ position: [0, 2, 10] }}>
      {design === "Design_1" ? <DesignOne /> : <DesignTwo />}
    </ARCanvas>
  );
}

export default ARMode;
