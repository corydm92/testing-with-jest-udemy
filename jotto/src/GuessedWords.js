import React, { Component } from "react";
import PropTypes from "prop-types";

function GuessedWords(props) {
	let content;
	if (props.guessedWords.length === 0) {
		content = (
			<span data-test='guess-instructions'>Try guessing the secret word!</span>
		);
	}
	return <div data-test='component-guessed-words'>{content} </div>;

	GuessedWords.propTypes = {
		guessedWords: PropTypes.arrayOf(
			PropTypes.shape({
				guessedWord: PropTypes.string.isRequired,
				letterMatchCount: PropTypes.number.isRequired
			})
		).isRequired
	};
}

export default GuessedWords;
