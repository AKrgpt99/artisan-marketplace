import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";
import {
  ProfileHeader,
  ProfileLinks,
  ProfileTips,
  ProfileStats,
} from "../../components/profile";

// Examples
import Banner from "../../assets/images/jpg/examples/fakurian-design-2-unsplash.jpg";

function Profile() {
  // Make a copy of routes to update alerts on component load
  const [routesCopy, setRoutesCopy] = useState(routes);

  useEffect(() => {
    let alerts = [1, 24, 96, 120, 82];
    setRoutesCopy(routes.map((route, i) => ({ ...route, alerts: alerts[i] })));
  }, []);

  return (
    <div className="flex flex-col w-full pb-24">
      <div className="w-full h-72 lg:h-96 relative">
        <img src={Banner} className="w-full object-cover h-72 lg:h-96" />
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-gray-900/75"></div>
      </div>
      <div className="w-full h-fit px-2 md:px-8 relative">
        <ProfileHeader username="@unknown" walletAddress="0x94c...8e66" />
        <div className="flex flex-row w-full pt-24 flex-wrap md:flex-nowrap order-1 gap-6">
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-start items-center">
            <ProfileLinks routes={routesCopy} />
          </div>
          <div className="w-full md:w-1/3 lg:w-1/2 flex flex-col justify-start items-center order-2 px-10 md:px-0">
            <Routes>
              {routesCopy.map((route) => (
                <Route
                  key={route.name}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-start items-center relative order-3 gap-6">
            <ProfileStats sold={93} created={125} bookmarks={65} />
            <ProfileTips />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
