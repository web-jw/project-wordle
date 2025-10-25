import { range } from '../../utils';

function GameGuess({ letters }) {
  letters = letters || range(5).map(() => ({ letter: ' ' }));

  if (!letters[0]?.letter) throw Error('Invalid letters provided');

  function prepLetterClassName(status) {
    return 'cell' + (status ? ` ${status}` : '');
  }

  return (
    <p className='guess'>
      {letters.map(({ letter, status }, index) => (
        <span className={prepLetterClassName(status)} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default GameGuess;
