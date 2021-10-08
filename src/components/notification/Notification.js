import React from "react";

const Notification = ({ errorMsg }) => {
  return errorMsg && <p>{errorMsg}</p>;
};

export default Notification;
