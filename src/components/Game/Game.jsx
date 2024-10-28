import { sample } from "../../utils";
import { WORDS } from '../../data';
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { useState } from "react";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// Make debugging easier
console.info({ answer });

function Game() {
    // running | win | lose
    const [gameStatus, setGameStatus] = useState('running');
    const [guesses, setGuesses] = useState([]);

    function handleGuessInput(guess) {
        const updatedGuess = checkGuess(guess, answer);
        const updatedGuesses = [...guesses, updatedGuess];
        if (updatedGuess.length === NUM_OF_GUESSES_ALLOWED) {
            if (guess === answer) {
                setGameStatus('win');
            } else {
                setGameStatus('lose');
            }
        } else {
            if (guess === answer) {
                setGameStatus('win');
            }
        }
        setGuesses(updatedGuesses);
    }

    return (
        <>
            <GuessResults guesses={guesses} />
            <GuessInput gameStatus={gameStatus} handleGuessInput={handleGuessInput} />
            { gameStatus === 'win' && (
                <div className="happy banner">
                    <p>
                    <strong>Congratulations!</strong> Got it in {' '}
                    <strong>{guesses.length} {guesses.length > 1 ? 'guesses' : 'guess'}</strong>.
                    </p>
                </div>
            )}
            { gameStatus === 'lose' && (
                <div className="sad banner">
                    <p>Sorry, the correct answer is <strong>{answer}</strong></p>
                </div>
            )}
        </>
    )    
}

export default Game;