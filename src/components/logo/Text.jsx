import React from "react";

function Text({ children }) {
  return (
    <div className="logo-txt flex flex-col justify-center items-start">
      <h1 className="text-2xl font-extrabold" style={{ color: "#BC7BDC" }}>
        {children[0]}
      </h1>
      <h2 className="text-base font-bold" style={{ color: "#BBBBBB" }}>
        {children[1]}
      </h2>
    </div>
  );
}

export default Text;
