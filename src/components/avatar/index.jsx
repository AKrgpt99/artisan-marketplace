import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Icon from "../icon";
import Badge from "../badge";

import DefaultUserImg from "../../assets/images/png/defaults/user.png";
import Dropdown from "./Dropdown";

function Avatar({ src, className, children }) {
  const [showChildren, setShowChildren] = useState(false);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: `${!showChildren && "hidden"} ${
          child.props.className
        } absolute w-72 pb-2 min-h-max rounded-xl z-50 bg-slate-900`,
        top: "48px",
      });
    }

    return child;
  });

  return (
    <div
      className={`profile-avatar flex justify-center items-center relative h-fit ${className}`}
      onMouseEnter={() => setShowChildren(true)}
      onMouseLeave={() => setShowChildren(false)}
    >
      <Link to="/profile">
        <div
          className="flex justify-center items-center"
          style={{
            backgroundColor: "#BC7BDC",
            width: "48px",
            height: "48px",
            clipPath:
              'path("M18 3.4641016151378a12 12 0 0 1 12 0l8.7846096908265 5.0717967697245a12 12 0 0 1 6 10.392304845413l0 10.143593539449a12 12 0 0 1 -6 10.392304845413l-8.7846096908265 5.0717967697245a12 12 0 0 1 -12 0l-8.7846096908265 -5.0717967697245a12 12 0 0 1 -6 -10.392304845413l0 -10.143593539449a12 12 0 0 1 6 -10.392304845413")',
          }}
        >
          <img
            src={src}
            style={{
              objectFit: "cover",
              width: "40px",
              height: "40px",
              clipPath:
                'path("M15 2.8867513459481a10 10 0 0 1 10 0l7.3205080756888 4.2264973081037a10 10 0 0 1 5 8.6602540378444l0 8.4529946162075a10 10 0 0 1 -5 8.6602540378444l-7.3205080756888 4.2264973081037a10 10 0 0 1 -10 0l-7.3205080756888 -4.2264973081037a10 10 0 0 1 -5 -8.6602540378444l0 -8.4529946162075a10 10 0 0 1 5 -8.6602540378444")',
            }}
          />
        </div>
      </Link>
      {childrenWithProps}
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  src: DefaultUserImg,
};

Avatar.Dropdown = ({
  bannerImgSrc,
  profileImgSrc,
  alerts: { notifications, inbox },
  className,
  top,
}) => (
  <Dropdown className={className} top={top}>
    <div className="w-100 flex flex-col">
      <div className="w-100 h-48 pt-12 flex flex-row justify-center items-center relative">
        <img
          className="absolute w-72 h-32 top-0 left-0 rounded-t-xl"
          src={bannerImgSrc}
        />
        <Link
          to="/profile"
          className="absolute px-2 py-1 m-1 top-0 right-0 rounded-lg bg-slate-200/50 font-bold text-white"
          style={{ fontSize: "0.6rem" }}
        >
          Go to profile
        </Link>
        <div
          className="flex justify-center items-center"
          style={{
            backgroundColor: "#BC7BDC",
            width: "99px",
            height: "99px",
            clipPath:
              'path("M36.5 5.0055534994652a26 26 0 0 1 26 0l19.033320996791 10.98889300107a26 26 0 0 1 13 22.516660498395l0 21.977786002139a26 26 0 0 1 -13 22.516660498395l-19.033320996791 10.98889300107a26 26 0 0 1 -26 0l-19.033320996791 -10.98889300107a26 26 0 0 1 -13 -22.516660498395l0 -21.977786002139a26 26 0 0 1 13 -22.516660498395")',
          }}
        >
          <img
            src={profileImgSrc}
            style={{
              objectFit: "cover",
              width: "89px",
              height: "89px",
              clipPath:
                'path("M33.5 4.8508529610859a22 22 0 0 1 22 0l17.837168574084 10.298294077828a22 22 0 0 1 11 19.052558883258l0 20.596588155656a22 22 0 0 1 -11 19.052558883258l-17.837168574084 10.298294077828a22 22 0 0 1 -22 0l-17.837168574084 -10.298294077828a22 22 0 0 1 -11 -19.052558883258l0 -20.596588155656a22 22 0 0 1 11 -19.052558883258")',
            }}
          />
        </div>
      </div>
      <div className="w-100 pb-2 flex flex-col justify-center items-center">
        <Link
          to="/profile"
          className="text-slate-300 font-semibold text-sm my-1 hover:text-violet-400"
        >
          @unknown
        </Link>
        <Link
          to="/settings/wallet"
          className="text-slate-300 font-semibold text-sm my-1 hover:text-violet-400"
        >
          0x94c...8e66
        </Link>
      </div>
      <div className="flex flex-col">
        <Link
          to="/profile/notifications"
          className="flex flex-row px-6 py-2 justify-between items-center border-t-2 border-slate-800 hover:bg-slate-700"
        >
          <div className="flex flex-row items-center">
            <Icon name="notifications" width="18px" />
            <p className="font-bold mx-2" style={{ color: "#bc7bdc" }}>
              Notifications
            </p>
          </div>
          <Badge>{notifications}</Badge>
        </Link>
        <Link
          to="/profile/inbox"
          className="flex flex-row px-6 py-2 justify-between items-center border-t-2 border-slate-800 hover:bg-slate-700"
        >
          <div className="flex flex-row items-center">
            <Icon name="inbox" width="18px" />
            <p className="font-bold mx-2" style={{ color: "#bc7bdc" }}>
              Inbox
            </p>
          </div>
          <Badge>{inbox}</Badge>
        </Link>
        <Link
          to="/settings"
          className="flex flex-row px-6 py-2 justify-between items-center border-t-2 border-slate-800 hover:bg-slate-700"
        >
          <div className="flex flex-row items-center">
            <Icon name="ellipsis" width="18px" />
            <p className="font-bold mx-2" style={{ color: "#bc7bdc" }}>
              Settings
            </p>
          </div>
        </Link>
      </div>
    </div>
  </Dropdown>
);

export default Avatar;
