import React, { useEffect, useRef, useState } from "react";
import Icon from "../../components/icon";

function Inbox() {
  const dropdownRef = useRef();
  const [sort, setSort] = useState("Newest");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="w-full flex flex-col justify-center items-start py-4">
      <div className="w-full flex flex-row justify-start items-center border-b-2 border-slate-700 pb-4 gap-6">
        <h1 className="text-3xl font-extrabold" style={{ color: "#BC7BDC" }}>
          Inbox
        </h1>
        <div className="relative">
          <button
            className="py-1 px-3 rounded-full flex flex-row items-center"
            style={{ backgroundColor: "#BC7BDC90" }}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <p
              className="font-semibold text-white mr-2"
              style={{ fontSize: "10px" }}
            >
              {sort}
            </p>
            <Icon name="downChevron" variation="light" width="12px" />
          </button>
          {showDropdown && (
            <div
              className="absolute w-full rounded-sm min-h-fit bg-white"
              style={{ boxShadow: "1px 1px 16px #45454540" }}
              ref={dropdownRef}
            >
              <button
                className="w-full text-slate-400 hover:bg-slate-200 py-1 font-semibold"
                style={{ fontSize: "10px" }}
                onClick={() => {
                  setSort("Newest");
                  setShowDropdown(false);
                }}
              >
                Newest
              </button>
              <button
                className="w-full text-slate-400 hover:bg-slate-200 py-1 font-semibold"
                style={{ fontSize: "10px" }}
                onClick={() => {
                  setSort("Oldest");
                  setShowDropdown(false);
                }}
              >
                Oldest
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center py-4">
        <div className="w-full rounded-xl flex justify-center items-center bg-slate-700 p-12">
          <p className="font-extrabold text-lg text-slate-800">
            Nothing in your inbox
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
