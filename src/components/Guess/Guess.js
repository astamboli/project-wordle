import React from "react";
import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";

function Guess({ value, answer }) {
  const result = value ? checkGuess(value, answer) : undefined;
  return (
    <p className="guess">
      {range(5).map((val) => (
        <span
          key={val}
          className={value ? `cell ${result[val].status}` : "cell"}
        >
          {value ? value[val] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
