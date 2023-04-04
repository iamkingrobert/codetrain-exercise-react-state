import React, { useState } from "react";

function CounterApp() {
	const [number, setNumber] = useState(0);

  const count = () =>{
    setNumber(number -1)

  }
	return (
		<div>
			<h1>Counter App</h1>
			<h1>{number}</h1>
			<button onClick={count}>Decrease</button>
            <button onClick={() => setNumber(number +1)}>Increase</button>
		</div>
	);
}

export default CounterApp;