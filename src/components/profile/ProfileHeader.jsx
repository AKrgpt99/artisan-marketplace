import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import { OuterHexagon, InnerHexagon, ProfileHexagon } from "../avatar";
import DefaultUserImg from "../../assets/images/png/defaults/user.png";

function ProfileHeader({ username, walletAddress, profileImgSrc }) {
  return (
    <div className="absolute -top-36 md:-top-1/4 flex flex-row justify-center items-center">
      <div
        className="flex justify-center items-center"
        style={{
          backgroundColor: "#BC7BDC",
          width: "181px",
          height: "181px",
          clipPath:
            'path("M66.5 8.356406460551a48 48 0 0 1 48 0l35.138438763306 20.287187078898a48 48 0 0 1 24 41.569219381653l0 40.574374157796a48 48 0 0 1 -24 41.569219381653l-35.138438763306 20.287187078898a48 48 0 0 1 -48 0l-35.138438763306 -20.287187078898a48 48 0 0 1 -24 -41.569219381653l0 -40.574374157796a48 48 0 0 1 24 -41.569219381653")',
        }}
      >
        <img
          src={profileImgSrc}
          style={{
            objectFit: "cover",
            width: "166px",
            height: "166px",
            clipPath:
              'path("M61 7.7017059221718a44 44 0 0 1 44 0l32.210235533031 18.596588155656a44 44 0 0 1 22 38.105117766515l0 37.193176311313a44 44 0 0 1 -22 38.105117766515l-32.210235533031 18.596588155656a44 44 0 0 1 -44 0l-32.210235533031 -18.596588155656a44 44 0 0 1 -22 -38.105117766515l0 -37.193176311313a44 44 0 0 1 22 -38.105117766515")',
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-start ml-4">
        <Link
          to="/profile"
          className="text-white font-semibold text-base lg:text-xl my-1 hover:text-slate-200"
        >
          {username}
        </Link>
        <Link
          to="/settings/wallet"
          className="text-white font-semibold text-base lg:text-xl my-1 hover:text-slate-200"
        >
          {walletAddress}
        </Link>
      </div>
    </div>
  );
}

ProfileHeader.propTypes = {
  username: PropTypes.string,
  walletAddress: PropTypes.string,
  profileImgSrc: PropTypes.string,
};

ProfileHeader.defaultProps = {
  username: "@unknown",
  walletAddress: "connect wallet",
  profileImgSrc: DefaultUserImg,
};

export default ProfileHeader;
