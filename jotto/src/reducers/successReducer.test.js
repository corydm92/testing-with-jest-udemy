import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test("returns false on initialization, when no action has been ran", () => {
	const newState = successReducer(undefined, {});
	expect(newState).toBe(false);
});

test("returns true upon receiving action type 'CORRECT_GUESS'", () => {
	const newState = successReducer(undefined, {
		type: actionTypes.CORRECT_GUESS
	});
	expect(newState).toBe(true);
});
