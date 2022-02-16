import React from "react";
import { Link } from "react-router-dom";

function Button({ path, search, label }) {
  return (
    <Link
      to={{
        pathname: path,
        search: search,
      }}
      style={{ textDecoration: "none", minWidth: "350px" }}
      className="font-sans w-1/4 justify-center mx-auto hover:translate-y-1 transition-all"
    >
      <div className="min-w-1/4 mx-auto design-class cursor-pointer font-semibold text-lg text-center rounded-lg p-4 mb-7 hover:text-black">
        <div>{label}</div>
      </div>
    </Link>
  );
}

export default Button;
