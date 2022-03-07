import React from "react";

function CheckBox({ label, defaultChecked, setFeature }) {
  return (
    <label className="flex gap-3 items-center pt-8 text-white">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={() => {
          setFeature(!defaultChecked);
        }}
      />
      {label}
    </label>
  );
}

export default CheckBox;
