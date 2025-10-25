import React from 'react';
import GameInputField from './GameInputFiled';
import GameInputKeyboard from './GameInputKeyboard';

function GameInput({ setNewGuess, result, guesses }) {
  const [value, setValue] = React.useState('');

  function submitGuess(e) {
    e.preventDefault();

    if (!setNewGuess) throw Error('setNewGuess is not provided');

    setNewGuess(value);
    setValue('');
  }

  return (
    <>
      <GameInputField value={value} setValue={setValue} submitGuess={submitGuess} result={result} />
      <GameInputKeyboard value={value} setValue={setValue} guesses={guesses} />
    </>
  );
}

export default GameInput;
