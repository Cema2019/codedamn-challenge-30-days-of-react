/*Sam is learning React and wanted to create a counter that when clicked on a button increments 3 times. The code written by Sam has been shared with you.

Help Sam figure out why the code only increments by one count instead of 3.*/

import { useState } from "react";

export default function Counter() {
	const [number, setNumber] = useState(0);

	return (
		<>
			<div className="card">
				<h1 data-testid="counter">{number}</h1>
				<button
					data-testid="incrementButton"
					onClick={() => {
						setNumber(number + 3);
					}}
				>
					Increment 3 times
				</button>
			</div>
		</>
	);
}
