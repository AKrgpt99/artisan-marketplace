import React, { useState } from "react";
import PropTypes from "prop-types";

function Searchbar({ className, onChange, onSubmit, initialValue }) {
  const [text, setText] = useState(initialValue);

  return (
    <div
      className={`w-full py-5 lg:p-auto lg:w-auto h-auto md:flex lg:flex flex-row justify-center items-center ${className}`}
    >
      <input
        className="bg-slate-700/50 h-16 text-base lg:text-sm lg:h-9 text-white rounded-none lg:rounded-full px-4 w-full md:w-72 lg:w-96 hover:bg-slate-700/75"
        type="text"
        placeholder="Search items, collections, and users"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          if (onChange) {
            onChange(event);
          }
        }}
        onSubmit={onSubmit}
      />
      <div className="hidden w-full"></div>
    </div>
  );
}

Searchbar.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Searchbar;
