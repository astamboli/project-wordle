import React from "react";

import Banner from "../Banner";

function WonBanner({ numTries }) {
  return (
    <Banner stat="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numTries === 1 ? "1 guess" : `${numTries} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
