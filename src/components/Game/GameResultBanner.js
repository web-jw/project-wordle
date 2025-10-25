import GameResultBannerLose from './GameResultBannerLose';
import GameResultBannerWin from './GameResultBannerWin';

function GameResultBanner({ guesses = [], answer = '', result, resetGame }) {
  if (!result) return;

  return (
    <div className={`${result === 'win' ? 'happy' : 'sad'} banner`}>
      {result === 'win' && <GameResultBannerWin guessCount={guesses.length} />}
      {result === 'lose' && <GameResultBannerLose answer={answer} />}
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
}

export default GameResultBanner;
