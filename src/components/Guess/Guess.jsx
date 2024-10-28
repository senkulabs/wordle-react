import { NUM_OF_LETTER_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
    return (
        <p className="guess">
            {range(NUM_OF_LETTER_ALLOWED).map((index) => {
                const cellClass = guess ? `cell ${guess[index].status}` : 'cell';
                return (
                    <span key={index} className={cellClass}>{guess ? guess[index].letter : ''}</span>
                )
            })}
        </p>
    );
}

export default Guess;