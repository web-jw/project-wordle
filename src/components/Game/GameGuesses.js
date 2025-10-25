import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

import GameGuess from './GameGuess';

function GameGuesses({ guesses = [] }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => (
        <GameGuess letters={guesses[number]?.guess} key={guesses?.[number]?.id || number} />
      ))}
    </div>
  );
}

export default GameGuesses;
