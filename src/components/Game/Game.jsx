import { sample } from "../../utils";
import { WORDS } from '../../data';
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { useState } from "react";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// Make debugging easier
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = useState([]);

    function handleGuessInput(guess) {
        const updatedGuesses = [...guesses, guess];
        setGuesses(updatedGuesses);
    }

    return (
        <>
            <p>Put a game here!</p>
            <GuessResults guesses={guesses} />
            <GuessInput handleGuessInput={handleGuessInput} />
        </>
    )    
}

export default Game;