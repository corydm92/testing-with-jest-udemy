import React from "react";

/**
 * Funcitonal react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is true)
 */

export default props => {
	if (props.success) {
		return (
			<div data-test='component-congrats'>
				<span data-test='congrats-message'>
					Congradulations! You guessed the word!
				</span>
			</div>
		);
	} else {
		return <div data-test='component-congrats' />;
	}
};
