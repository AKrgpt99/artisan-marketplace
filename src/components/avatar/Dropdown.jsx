import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Dropdown = styled.div`
  box-shadow: 1px 1px 16px rgb(15, 23, 42);
  right: 0;
  ${(props) => css`
    top: ${props.top instanceof Number ? props.top + "px" : props.top};
  `}
`;

Dropdown.propTypes = {
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dropdown.defaultProps = {
  top: "48px",
};

export default Dropdown;
