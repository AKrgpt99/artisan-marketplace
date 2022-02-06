import React from "react";

function Image({ src, className, width }) {
  return (
    <div className={`logo-img ${className}`}>
      <img src={src} style={{ objectFit: "cover", width, height: width }} />
    </div>
  );
}

export default Image;
