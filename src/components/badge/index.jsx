import React from "react";

function Badge({ children }) {
  return (
    <div
      className="w-4 min-w-fit px-2 h-4 rounded-full flex justify-center items-center font-bold text-xs text-slate-300"
      style={{ backgroundColor: "#bc7bdc80" }}
    >
      {children}
    </div>
  );
}

export default Badge;
