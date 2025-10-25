import styles from './GameInputKeyboard.module.css';

const rows = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function GameInputKeyboard({ value, setValue, guesses }) {
  function pressKey(key) {
    if (value.length === 5) return;

    setValue(value + key);
  }

  const selectedLetters = guesses.reduce((acc, { guess }) => {
    guess.forEach(({ letter, status }) => {
      if (acc[letter]) return;
      acc[letter] = status;
    });

    return acc;
  }, {});

  function prepLetterClass(letter) {
    return styles.letter + ' ' + styles[selectedLetters[letter]];
  }

  return (
    <div>
      {rows.map((row, index) => (
        <div className={styles.row} key={index}>
          {row.map((letter) => (
            <button className={prepLetterClass(letter)} key={letter} onClick={() => pressKey(letter)}>
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameInputKeyboard;
