import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from "../../utils";

function GuessResults({ guesses }) {
    return (
        <div className="guess-results">
            { range(NUM_OF_GUESSES_ALLOWED).map((index) => {
                return <Guess key={index} guess={guesses[index]}/>
            })}
        </div>
    )
}

export default GuessResults;