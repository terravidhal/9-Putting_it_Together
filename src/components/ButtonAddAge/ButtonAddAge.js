import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ButtonAddAge.css";

const ButtonAddAge = (props) => {
  const { handleClickFunc, firstNamePPties, lastNamePPties } = props;

  return (
    <button className="ButtonAddAge" onClick={handleClickFunc}>
     Birthday Button for { lastNamePPties } { firstNamePPties }
    </button>
  );
};

ButtonAddAge.propTypes = {};

ButtonAddAge.defaultProps = {};

export default ButtonAddAge;
