import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {obj} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
	const wrapper = shallow(<App {...props} />);

	if (state) {
		wrapper.setState(state);
	}

	return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) when given the data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Vlaue of data-test attribute for search
 * @return {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
	// console.log(wrapper.find(`[data-test='${val}']`).debug());
	return wrapper.find(`[data-test='${val}']`);
};

test("renders without error", () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, "component-app");
	expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
	const wrapper = setup();
	const button = findByTestAttr(wrapper, "increment-button");
	expect(button.length).toBe(1);
});

test("renders counter display", () => {
	const wrapper = setup();
	const counterDisplay = findByTestAttr(wrapper, "counter-display");
	expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
	const wrapper = setup();
	const initialCounterState = wrapper.state("counter");
	expect(initialCounterState).toBe(0);
});

test("clicking button increments counter display", () => {
	const counter = 7;
	const wrapper = setup(null, { counter });

	// Find button and click
	const button = findByTestAttr(wrapper, "increment-button");
	button.simulate("click");
	wrapper.update();

	// Find display and test value
	const counterDisplay = findByTestAttr(wrapper, "counter-display");
	expect(counterDisplay.text()).toContain(counter + 1);
});

test("renders decrement button", () => {
	const wrapper = setup();
	const button = findByTestAttr(wrapper, "decrement-button");
	expect(button.length).toBe(1);
});

test("counter decrements on button click", () => {
	const counter = 7;
	const wrapper = setup(null, { counter });

	// Finds button with attr 'decrement-button', simulates click
	const button = findByTestAttr(wrapper, "decrement-button");
	button.simulate("click");
	wrapper.update();

	// Checks display to see if counter has gone down
	const counterDisplay = findByTestAttr(wrapper, "counter-display");
	expect(counterDisplay.text()).toContain(counter - 1);
});

test("counter doesnt go below zero", () => {
	const counter = 0;
	const wrapper = setup(null, { counter });

	const decrementButton = findByTestAttr(wrapper, "decrement-button");
	decrementButton.simulate("click");
	wrapper.update();

	const counterDisplay = findByTestAttr(wrapper, "counter-display");
	expect(counterDisplay.text()).toContain(0);
});

test("make sure error does not display on render", () => {
	const wrapper = setup();

	// Make sure error-display is not visable at 0;
	const errorMessage = findByTestAttr(wrapper, "error-display");
	expect(errorMessage.length).toBe(0);
});

test("display error if decrement is clicked at 0", () => {
	const counter = 0;
	const wrapper = setup(null, { counter });

	// Simulate decrement at 0
	const decrementButton = findByTestAttr(wrapper, "decrement-button");
	decrementButton.simulate("click");
	wrapper.update();

	// Make sure error-display is visable after decremented click at 0
	const errorMessage = findByTestAttr(wrapper, "error-display");
	expect(errorMessage.length).toBe(1);
});

test("does not display error after increment is pressed", () => {
	const counter = 0;
	const wrapper = setup(null, { counter });

	// Simulate decrement at 0
	const decrementButton = findByTestAttr(wrapper, "decrement-button");
	decrementButton.simulate("click");
	wrapper.update();

	// Simulate increment at 0
	const incrementButton = findByTestAttr(wrapper, "increment-button");
	incrementButton.simulate("click");
	wrapper.update();

	// Check to see if error message exists
	const errorMessage = findByTestAttr(wrapper, "error-display");
	expect(errorMessage.length).toBe(0);
});
