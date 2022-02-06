// Only loads PNGs right now
// TODO: load SVGs
import React from "react";
import PropTypes from "prop-types";

import _icons from "./png-icons";

function Icon({ name, variation, width, height, className }) {
  return (
    <img
      className={className}
      src={_icons[variation][name]}
      style={{ width, height: height ? height : width, objectFit: "contain" }}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  variation: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

Icon.defaultProps = {
  variation: "primary",
  width: "24px",
};

export default Icon;
