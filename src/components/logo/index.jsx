import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Image from "./Image";
import Text from "./Text";

import LogoIcon from "../../assets/images/png/logos/logo512.png";

function Logo({ textOnly, imageOnly, onClick, iconWidth }) {
  return (
    <Link
      to="/"
      className="flex flex-row logo-header justify-center items-center"
      onClick={onClick}
    >
      {!textOnly && <Image src={LogoIcon} width={iconWidth} className="mr-4" />}
      {!imageOnly && (
        <Text>
          <>Artisan</>
          <>Marketplace</>
        </Text>
      )}
    </Link>
  );
}

Logo.propTypes = {
  textOnly: PropTypes.bool,
  imageOnly: PropTypes.bool,
};

Logo.defaultProps = {
  textOnly: false,
  imageOnly: false,
  iconWidth: "4rem",
};

export default Logo;
