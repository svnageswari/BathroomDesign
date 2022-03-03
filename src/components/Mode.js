import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";

function Mode() {
  let design = useLocation().search.replace("?", "");

  return (
    <>
      <div className="text-center pt-7 text-4xl font-sans text-white">
        A nice bathroom
      </div>
      <div className="flex w-full h-screen p-0 justify-center mx-auto my-auto">
        <div className="flex flex-wrap my-auto w-screen">
          <Button path="/ar-mode" search={design} label="AR Mode"></Button>
          <Button path="/vr-mode" search={design} label="VR Mode"></Button>
        </div>
      </div>
    </>
  );
}

export default Mode;
