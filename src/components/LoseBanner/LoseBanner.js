import React from "react";

import Banner from "../Banner";

function LostBanner({ word }) {
  return (
    <Banner stat="sad">
      <p>
        Sorry, the correct answer is <strong>{word}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
