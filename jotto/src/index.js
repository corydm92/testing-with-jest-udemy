import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./configureStore";

// import reducers from "./reducers";
// import thunk from "redux-thunk";
// import { createStore, applyMiddleware } from "redux";
// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
