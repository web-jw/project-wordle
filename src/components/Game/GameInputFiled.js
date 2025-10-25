import React from 'react';

function GameInputField({ value, setValue, result, submitGuess }) {
  return (
    <form className='guess-input-wrapper' onSubmit={submitGuess}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        pattern='[A-Z]{5}'
        autoComplete='false'
        maxLength={5}
        minLength={5}
        value={value}
        disabled={!!result}
        onChange={(e) => setValue(e.target.value.toUpperCase())}
        required
      />
    </form>
  );
}

export default GameInputField;
