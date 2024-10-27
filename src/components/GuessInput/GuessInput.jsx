import { useState } from "react";

function GuessInput({ handleGuessInput }) {
    const [value, setValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        handleGuessInput(value);
        setValue('');
    }

    return (
    <>
        <form onSubmit={handleSubmit} className="guess-input-wrapper">
            <label htmlFor="guess-input">Enter guess:</label>
            <input required type="text" id="guess-input" minLength={5} maxLength={5} pattern="[a-zA-Z]{5}" title="5 letter word" value={value} onChange={(event) => setValue(event.target.value.toUpperCase())} />
        </form>
    </>);
}

export default GuessInput;