import React from "react";

const NotificationToast = ({ body }) => {
  return (
    <div>
      <h5>Order Status Alert</h5>
      <div>{body}</div>
    </div>
  );
};

export default NotificationToast;
