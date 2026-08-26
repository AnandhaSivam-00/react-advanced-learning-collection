import PropTypes from 'prop-types';
import { getFarewellText } from '../assets/farewell_messages';
import { languages } from '../assets/languages';
import clsx from 'clsx';

const Notification = ({
  isGameOver = false,
  isGameWon = false,
  isLatestGuessWrong = false,
  lostLanguageIndex = 0
}) => {
  const isGameLost = isGameOver && !isGameWon;
  const showFarewell = isLatestGuessWrong && !isGameOver && !isGameWon;

  const notificationClass = clsx({
    'game-won': isGameWon,
    'game-lost': isGameLost,
    'wrong-selection': showFarewell
  });

  if(!isGameWon && !isGameLost && !showFarewell) {
    /**
     * If no notification should be shown (e.g. correct guess in middle of game)
     * we return a visually hidden empty section to maintain layout height or just empty.The original didn't 
     * mount unless guessedLetters.length > 0 but we might have a correct first guess.Let's render 
     * an invisible spacer to keep UI from jumping, or just nothing.The original just rendered the section with no content inside 
     * if it wasn't wrong, won, or lost.
     * */
    return (
      <section className='d-flex flex-column justify-content-center align-items-center m-1 p-2 notification-container' style={{ visibility: 'hidden' }}></section>
    );
  }

  return (
      <section 
        className={`d-flex flex-column justify-content-center align-items-center text-white m-1 p-2 notification-container ${notificationClass}`}
        aria-live='polite'
        role='status'
      >
        {isGameWon ? ( 
          <>
            <h3 className='p-2 m-0'>You win!</h3>
            <p className='m-0 pb-2'>Well done! 🥳</p>
          </> 
        ) : isGameLost ? ( 
          <>
            <h3 className='p-2 m-0'>Game over!</h3> 
            <p className='m-0 pb-2'>You lose! Better start learning Assembly 😭</p>
          </>
        ) : showFarewell ? (
          <p className='p-2 m-0 fst-italic'>{getFarewellText(languages[lostLanguageIndex]?.name || '')}</p>
        ) : null}
      </section>
  )
}

Notification.propTypes = {
  isGameOver: PropTypes.bool,
  isGameWon: PropTypes.bool,
  isLatestGuessWrong: PropTypes.bool,
  lostLanguageIndex: PropTypes.number,
};

export default Notification 