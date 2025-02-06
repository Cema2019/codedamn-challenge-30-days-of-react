/*Create a component called App that displays the number of times the user has hovered a button with the text “Hover Me”. The count should be displayed in an h1 element and updated each time the user hovers over the button. The initial value of the count should be set to 0.
We have already written some starting code for you.*/

import {useState} from "react";

const App = () => {

	const [hoverCount, setHoverCount] = useState(0)
	const handleHover = () => {
		setHoverCount(prevCount => prevCount + 1)
	}
	return (
		<div>
			<button data-testid="button"
			onMouseEnter={handleHover}>
				Hover Me</button>
			<h1 data-testid="count">{hoverCount}</h1>
		</div>
	)
}

export default App
