import React from "react";

function Banner({ stat, children }) {
  return (
    <div className={`${stat} banner`}>
      <p>{children}</p>
    </div>
  );
}

export default Banner;
