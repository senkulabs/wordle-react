import { sample } from "../../utils";
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// Make debugging easier
console.info({ answer });

function Game() {
    return <>Put a game here!</>;
}

export default Game;