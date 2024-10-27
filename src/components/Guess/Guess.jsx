import { NUM_OF_LETTER_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
    return (
        <p className="guess">
            {range(NUM_OF_LETTER_ALLOWED).map((index) => {
                return (
                    <span key={index} className="cell">{guess ? guess[index] : ''}</span>
                )
            })}
        </p>
    );
}

export default Guess;