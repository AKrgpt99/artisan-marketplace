import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import theme from "../../theme";

function Button({
  to,
  className,
  children,
  outlined,
  rounded,
  width,
  height,
  variation,
}) {
  let baseStyle = {
    width,
    height: height ? height : width,
  };

  if (outlined) {
    baseStyle.border = `3px solid ${theme.color[variation]}`;
  } else {
    baseStyle.backgroundColor = theme.color[variation];
  }

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (variation) {
        return React.cloneElement(child, {
          variation: variation == "light" ? "dark" : "light",
        });
      }
    }

    return child;
  });

  return (
    <Link
      to={to}
      className={`rounded${
        rounded instanceof Boolean ? (rounded ? "" : "-none") : `-${rounded}`
      } flex justify-center items-center ${className}`}
      style={baseStyle}
    >
      {childrenWithProps}
    </Link>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
  outlined: PropTypes.bool,
  rounded: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variation: PropTypes.string,
};

Button.defaultProps = {
  to: "/",
  className: "",
  children: null,
  outlined: false,
  rounded: "lg",
  width: "auto",
  variation: "primary",
};

export default Button;
