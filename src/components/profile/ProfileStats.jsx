import React from "react";

import Badge from "../badge";

function ProfileStats({ sold, created, bookmarks }) {
  return (
    <div className="bg-slate-700 w-4/5 min-h-fit rounded-xl flex flex-col pb-4">
      <p className="font-extrabold text-slate-400 text-xl my-4 px-4">
        Basic Stats
      </p>
      <div className="flex flex-row justify-between items-center px-4 py-2">
        <p className="font-bold text-slate-500">Sold</p>
        <Badge>{sold}</Badge>
      </div>
      <div className="flex flex-row justify-between items-center mt-1 px-4 py-2">
        <p className="font-bold text-slate-500">Created</p>
        <Badge
          className="w-4 min-w-fit px-1 h-4 rounded-full flex justify-center items-center font-bold text-slate-300"
          style={{ backgroundColor: "#bc7bdc80" }}
        >
          {created}
        </Badge>
      </div>
      <div className="flex flex-row justify-between items-center mt-1 px-4 py-2">
        <p className="font-bold text-slate-500">Bookmarks</p>
        <Badge
          className="w-4 min-w-fit px-1 h-4 rounded-full flex justify-center items-center font-bold text-slate-300"
          style={{ backgroundColor: "#bc7bdc80" }}
        >
          {bookmarks}
        </Badge>
      </div>
    </div>
  );
}

export default ProfileStats;
