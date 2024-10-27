import { sample } from "../../utils";
import { WORDS } from '../../data';
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// Make debugging easier
console.info({ answer });

function Game() {
    return (
        <>
            <p>Put a game here!</p>
            <GuessInput />
        </>
    )    
}

export default Game;