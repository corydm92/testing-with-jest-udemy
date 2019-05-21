import checkPropTypes from "check-prop-types";
/**
 * Return node(s) with the given test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute search
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`);
};

/**
 * Checking proptypes to see if the prop exists, and if it is the correct type.
 * @param {*} component
 * @param {*} conformingProps
 */

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		conformingProps,
		"prop",
		component.name
	);
	expect(propError).toBeUndefined();
};
