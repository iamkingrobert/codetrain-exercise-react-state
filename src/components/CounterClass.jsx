
import React, { Component } from "react";

export default class CounterClass extends Component{

	constructor(props){
		super(props);
		this.state = { number: 0 };
	}

	decrement = () => {
		this.setState({ number: this.state.number - 1 });
	};
	render() {
		return (
			<div>
				<h1>Counter Class App</h1>
				<h1>{this.state.number}</h1>
                <button onClick={this.decrement}>Decrement</button>

				<button onClick={() => {
						this.setState({ number: this.state.number + 1 });}}>Increment</button>
			</div>
		);
	}
}