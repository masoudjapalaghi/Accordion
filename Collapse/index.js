import React from "react";
import PropTypes from "prop-types";

import { useAccordionContext } from "../hooks";

const Collapse = ({
  element: Component,
  eventKey,
  children,
  ...otherProps
}) => {
  const { activeEventKey, openedMultiple } = useAccordionContext();
    console.log(activeEventKey[eventKey].statusOpen , activeEventKey[eventKey].eventKey === eventKey )
  return activeEventKey[eventKey].statusOpen && activeEventKey[eventKey].eventKey === eventKey ? (
    <Component {...otherProps}>{children}</Component>
  ) : null;
};

Collapse.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Collapse.defaultProps = {
  element: "div"
};

export default Collapse;
