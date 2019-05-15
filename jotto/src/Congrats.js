import React from "react";
import PropTypes from "prop-types";

/**
 * Funcitonal react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is true)
 */

const Congrats = props => {
	if (props.success) {
		return (
			<div data-test='component-congrats' className='alert alert-success'>
				<span data-test='congrats-message'>
					Congratulations! You guessed the word!
				</span>
			</div>
		);
	} else {
		return <div data-test='component-congrats' />;
	}
};

Congrats.propTypes = {
	// succes: PropTypes.bool >>> Gives a warning if PropTypes isn't a type bool
	success: PropTypes.bool.isRequired // Gives a warning if isn't a bool OR if prop isn't there
};

export default Congrats;
