function GameResultBannerWin({ guessCount }) {
  return (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong> {guessCount} guesses</strong>.
    </p>
  );
}

export default GameResultBannerWin;
