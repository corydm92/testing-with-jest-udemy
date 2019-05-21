import { correctGuess, actionTypes } from "./";

describe("correctGuess", () => {
	test("action returns type 'CORRECT_GUESS'", () => {
		const action = correctGuess();
		expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
	});
});
