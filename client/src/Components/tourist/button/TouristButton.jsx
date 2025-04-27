import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const TouristButton = ({
  children,
  type,
  buttonStyle,
  buttonSize,
  redirectionLink
}) => {
  // conditional button class
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  // conditional button size.
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={redirectionLink} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
