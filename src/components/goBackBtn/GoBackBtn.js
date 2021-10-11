import React from "react";
import { useHistory } from "react-router";

const GoBackBtn = ({ goTo }) => {
  const history = useHistory();

  const onClick = () => {
    history.push(goTo);
  };
  return <button onClick={onClick}>go back</button>;
};

export default GoBackBtn;
