import React from "react";

import Avatar from "../avatar";
import { ReactComponent as MaticLogo } from "../../assets/images/svg/logos/matic-logo.svg";

function Card({ children }) {
  return (
    <div
      className="bg-white w-96 h-80 rounded-xl"
      style={{ boxShadow: "1px 1px 16px #45454540" }}
    >
      {children}
    </div>
  );
}

Card.Content = function ({ src }) {
  return <img src={src} className="w-full h-60 rounded-t-xl object-cover" />;
};

Card.Description = function ({ name, artistAddress, profileImgSrc, price }) {
  return (
    <div className="w-full h-20 rounded-b-xl flex flex-row px-4 bg-slate-100">
      <div className="w-3/4 flex flex-row justify-start items-center gap-4">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center text-white">
            <Avatar src={profileImgSrc} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold text-sm">{name}</p>
          <p className="font-semibold text-sm text-slate-400">
            By {artistAddress}
          </p>
        </div>
      </div>
      <div className="w-1/4 flex flex-row justify-end items-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <MaticLogo width="20px" />
          <p className="font-semibold text-lg" style={{ color: "#BC7BDC" }}>
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
