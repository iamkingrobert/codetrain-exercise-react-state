import React, { Component } from "react";

export class FormClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			studentName: "",
			studentCourse: "",
			studentGen: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const studentName = e.target.studentName.value;
		const studentCourse = e.target.studentCourse.value;
		const studentGen = e.target.studentGen.value;

		this.setState({
			studentName,
			studentCourse,
			studentGen,
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="studentName" placeholder="Student Name" />
					<input type="text" name="studentCourse" placeholder="Student Course" />
					<input type="text" name="studentGen" placeholder="Student Gen" />
					<input type="submit" value="Submit" />
				</form>

				<h1>{this.state.studentName}</h1>
				<h1>{this.state.studentCourse}</h1>
				<h1>{this.state.studentGen}</h1>
			</div>
		);
	}
}

export default FormClassComponent;