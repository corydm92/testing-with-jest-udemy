/**
 * Return node(s) with the given test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute search
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`);
};
