import React from "react";
import PropTypes from "prop-types";

function GuessedWords(props) {
	let content;
	if (props.guessedWords.length === 0) {
		content = (
			<span data-test='guess-instructions'>Try guessing the secret word!</span>
		);
	} else {
		let guessedWordsRows = props.guessedWords.map((word, index) => (
			<tr data-test='guessed-word' key={index}>
				<td>{word.guessedWord}</td>
				<td>{word.letterMatchCount}</td>
			</tr>
		));

		content = (
			<div data-test='guessed-words'>
				<h3>Guessed Words</h3>
				<table>
					<thead>
						<tr>
							<th>Guess</th>
							<th>Matching Letters</th>
						</tr>
						<tbody>{guessedWordsRows}</tbody>
					</thead>
				</table>
			</div>
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

// My code before following along with the course
//
// function GuessedWords(props) {
//   let content;
//   if (props.guessedWords.length === 0) {
//     content = (
//       <span data-test='guess-instructions'>Try guessing the secret word!</span>
//     );
//   } else {
//     content = (
//       <table data-test='guessed-words'>
//         <tr>
//           <td>Guessed Words</td>
//           <td>Number Correct</td>
//         </tr>
//         {props.guessedWords.map(word => {
//           let { guessedWord, letterMatchCount } = word;
//           return (
//             <tr key={guessedWord} data-test='guessed-word'>
//               <td>{guessedWord}</td>
//               <td>{letterMatchCount}</td>
//             </tr>
//           );
//         })}
//       </table>
//     );
//   }

//   return <div data-test='component-guessed-words'>{content} </div>;
