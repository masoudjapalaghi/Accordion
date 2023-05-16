import React from "react";
import PropTypes from "prop-types";
import { useAccordionContext } from "../hooks";

const useAccordionClick = (eventKey, onClick) => {
  const { onToggle, activeEventKey, openedMultiple } = useAccordionContext();
  const event = (event) => {
    onToggle(eventKey === activeEventKey ? null : eventKey);

    if (onClick) {
      onClick(event);
    }
  };

  return [activeEventKey, event, openedMultiple];
};

const Toggle = ({
  element: Component,
  eventKey,
  onClick,
  children,
  ...otherProps
}) => {
  const { onToggle, activeEventKey, openedMultiple } = useAccordionContext();

  console.log(activeEventKey);

  const handleToggle = (eventKey) => {
    const findedActiveItem = activeEventKey.map((item) => {
      return {
        eventKey: item.eventKey,
        statusOpen: openedMultiple
          ? item.eventKey === eventKey
            ? !item.statusOpen
            : item.statusOpen
          : item.eventKey === eventKey,
      };
    });

    onToggle(findedActiveItem);
  };

  return (
    <Component onClick={() => handleToggle(eventKey)} {...otherProps}>
      {children}
      {activeEventKey[eventKey].statusOpen ? <span>👆🏻</span> : <span>👇🏻</span>}
    </Component>
  );
};

Toggle.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Toggle.defaultProps = {
  element: "div",
};

export default Toggle;
