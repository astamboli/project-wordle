import React from "react";

function GuessInput({ handleGuess, gameStatus }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        handleGuess(guess);
        setGuess("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input"> Enter Guess: </label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
