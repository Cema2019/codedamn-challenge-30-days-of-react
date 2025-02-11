/*You are given a simple Counter component that displays a count and two buttons to increment and decrement the count. You need to modify the component to store the count in the browser's local storage so that the count is persisted even when the page is refreshed.
We have already written some starting code for you.*/

import React, { useState, useEffect } from 'react'

function Counter() {
	const [count, setCount] = useState(0);

	// Retrieve data from local storage when the component mounts 
	useEffect(() => { 
		const savedCount = localStorage.getItem("count"); 
		if (savedCount !== null) { 
			setCount(JSON.parse(savedCount)); 
		} 
	}, []);

	useEffect(() => { 
		localStorage.setItem("count", JSON.stringify(count)); 
	}, [count]);

	return (
		<div>
			<h2 data-testid="count-id">Count: {count}</h2>
			<button data-testid="inc-id" onClick={() => setCount(count + 1)}>
				+
			</button>
			<button data-testid="dec-id" onClick={() => setCount(count - 1)}>
				-
			</button>
		</div>
	)
}

export default Counter
