import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PersonCard.css";
import ButtonAddAge from "../ButtonAddAge/ButtonAddAge";



const PersonCard = (props) => {

  const [state, setState] = useState({
    clickAddage: 0,
  });

  const handleClick = () => {
    setState({
      clickAddage: state.clickAddage + 1,
    });
  };

  const { firstName, lastName, age, hairColor } = props;

  return (
  <div className="PersonCard">
    <h2>{ firstName }, { lastName }</h2>
     <p>Age : { age +  state.clickAddage}</p>
     <p>Hair Color : { hairColor }</p>
     <ButtonAddAge handleClickFunc = {handleClick} firstNamePPties={firstName} lastNamePPties={lastName} />
  </div>);
};



PersonCard.propTypes = {};

PersonCard.defaultProps = {};

export default PersonCard;
