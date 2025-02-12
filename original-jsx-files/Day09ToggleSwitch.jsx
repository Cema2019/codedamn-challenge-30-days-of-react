/*In this lab, you will be building a simple toggle button using React. This button should be able to toggle its appearance and label based on user interactions.

Instructions
Setup: Start by creating a new functional component for your toggle button.

State Management: Use the useState hook to manage the state of the button. Consider what pieces of state you might need. At a minimum, you'll need to track whether the button is in the "on" or "off" state.

Styling: Ensure your button meets the styling requirements outlined in the challenges. Remember to use named CSS colors for background and text color.

Event Handling: Add an onClick event to your button. When clicked, the button should toggle between the "on" and "off" states. You might need to utilize the state updater function from useState here.

Continuous Toggling: Ensure your button can toggle its state and appearance continuously on multiple clicks.*/

import {useState} from "react";

export default function App() {

	const [state, setState] = useState({
		text: 'on',
		style: {
			backgroundColor: "black", 
			color: "white"
		}
	  });

	const handleStateChange = () => {
		setState(prevState => ({
			...prevState,  
			text: prevState.text === 'on' ? 'off' : 'on', 
			style: prevState.text === 'on'
			? { backgroundColor: "lightgray", color: "black" }
			: {	backgroundColor: "black", color: "white" }
		  }))
	}

	return (
		<>
			<button 
			id="toggle"
            style={state.style}
			onClick={handleStateChange}>{state.text}</button>
		</>
	);
}
