import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';

import GameInput from './GameInput';
import GameGuesses from './GameGuesses';
import GameResultBanner from './GameResultBanner';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.log(`\r 💀 answer:`, answer);
  const [guesses, setGuesses] = React.useState([]);
  const [result, setResult] = React.useState();

  function setNewGuess(guess) {
    if (!guess) throw Error('No guess provided');

    if (guesses.length === NUM_OF_GUESSES_ALLOWED) return;

    setGuesses([...guesses, { id: crypto.randomUUID(), guess: checkGuess(guess, answer) }]);
    checkResult(guess, guesses.length + 1);
  }

  function checkResult(guess, guessesLength) {
    if (guess === answer) return setResult('win');

    guessesLength === NUM_OF_GUESSES_ALLOWED && setResult('lose');
  }

  function resetGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setResult(null);
  }

  return (
    <>
      <GameGuesses guesses={guesses} />
      <GameInput setNewGuess={setNewGuess} result={result} guesses={guesses} />
      <GameResultBanner result={result} answer={answer} guesses={guesses} resetGame={resetGame} />
    </>
  );
}

export default Game;
