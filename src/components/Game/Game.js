import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessTracker from "../GuessTracker";
import WinBanner from "../WinBanner/WinBanner";
import LoseBanner from "../LoseBanner/LoseBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function handleGuess(guess) {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    if (answer === guess.toUpperCase()) {
      setGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <GuessTracker guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        answer={answer}
        guesses={guesses}
        handleGuess={handleGuess}
      />
      {gameStatus === "won" && (
        <WinBanner numTries={guesses.length}></WinBanner>
      )}
      {gameStatus === "lost" && <LoseBanner word={answer}></LoseBanner>}
    </>
  );
}

export default Game;
