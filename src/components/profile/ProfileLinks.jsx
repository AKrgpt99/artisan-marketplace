import React from "react";
import { Link } from "react-router-dom";

import Icon from "../icon";
import Badge from "../badge";

function ProfileLinks({ routes }) {
  return (
    <div className="bg-slate-700 w-4/5 min-h-fit rounded-xl flex flex-col pb-4">
      <p className="font-extrabold text-slate-400 text-xl my-4 px-4">Profile</p>
      {routes.map((route) => (
        <Link
          key={route.name}
          to={`/profile${route.path}`}
          className="w-full flex flex-row px-4 py-4 justify-between items-center hover:bg-slate-600"
        >
          <div className="flex flex-row items-center">
            <Icon name={route.icon} width="18px" />
            <p className="font-bold mx-2" style={{ color: "#bc7bdc" }}>
              {route.name}
            </p>
          </div>
          <Badge>{route.alerts}</Badge>
        </Link>
      ))}
    </div>
  );
}

export default ProfileLinks;
