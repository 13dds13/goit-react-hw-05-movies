import React from "react";

const Notification = ({ msg }) => {
  return msg && <p>{msg}</p>;
};

export default Notification;
