import React from "react";
import { useHistory } from "react-router";

const GoBackBtn = () => {
  const history = useHistory();

  const onClick = () => {
    history.goBack();
  };
  return <button onClick={onClick}>go back</button>;
};

export default GoBackBtn;
