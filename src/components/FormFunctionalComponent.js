import React, { useState } from "react";

const FormFunctionalComponent = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [course, setCourse] = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	const handleEmailChange = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};
	const handleCourseChange = (e) => {
		e.preventDefault();
		setCourse(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// Below, I Set the input value to empty after form submit
		setName("");
        setEmail("");
        setCourse("");
	};
	return (
		<div>
			<h1>Student function Form</h1>
			<form onSubmit={handleSubmit}>
				<label>Full name</label>
				<input type="text" value={name} onChange={handleChange} />
				<br></br>
				<label>Email</label>
				<input type="email" value={email} onChange={handleEmailChange} />
				<br></br>
				<label>Gen</label>
				<input type="text" value={course} onChange={handleCourseChange} />
				<br></br>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default FormFunctionalComponent;