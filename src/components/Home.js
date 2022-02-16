import React from "react";
import Button from "./Button";

function Home() {
  return (
    <div className="flex w-full h-screen p-0 justify-center mx-auto my-auto">
      <div className="flex flex-wrap my-auto w-screen">
        <Button path="/mode" search="Design_1" label="Design 1"></Button>
        <Button path="/mode" search="Design_2" label="Design 2"></Button>
      </div>
    </div>
  );
}

export default Home;
