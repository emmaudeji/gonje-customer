import React from "react";

const Loader = () => {
  return (
    <>
      <div className="overlay_loader"></div>
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );
};

export default Loader;
