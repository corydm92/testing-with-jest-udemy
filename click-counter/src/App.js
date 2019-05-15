import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			displayError: false
		};

		this.handleDecrement = this.handleDecrement.bind(this);
		this.handleIncrement = this.handleIncrement.bind(this);
	}

	handleIncrement() {
		this.setState({ counter: this.state.counter + 1, displayError: false });
	}

	handleDecrement() {
		switch (this.state.counter) {
			case 0:
				return this.setState({ displayError: true });
			default:
				this.setState({ counter: this.state.counter - 1 });
		}
	}

	render() {
		let errorMessage = () => {
			switch (this.state.displayError) {
				case true:
					return (
						<div data-test='error-display'>
							<p>Error: Cannot Decrement Below 0</p>
						</div>
					);
				default:
					return null;
			}
		};

		return (
			<div data-test='component-app'>
				<h1 data-test='counter-display'>
					The counter is currently {this.state.counter}
				</h1>

				{errorMessage()}

				<button data-test='increment-button' onClick={this.handleIncrement}>
					Increment counter
				</button>
				<button data-test='decrement-button' onClick={this.handleDecrement}>
					Decrement Counter
				</button>
			</div>
		);
	}
}

export default App;
