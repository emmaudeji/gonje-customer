import * as React from "react";
import TimeAgo from "timeago-react";

const TimeAgoTag = ({timeago}) => {
  return (
    <>
      <TimeAgo datetime={timeago} />
    </>
  );
};
export default TimeAgoTag;
