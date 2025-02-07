/*Write a custom hook called useTheme that holds the current value of the theme which can be either “light” or “dark”. 
The hook should be able to store and manage the information on whether the page should be using light or dark mode. 
It should return an object with two properties.*/

import {useState} from 'react';

export const useTheme = () => {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
	};
	return {theme, toggleTheme};
}

const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div
			style={{
				height: '100vh',
				transition: '0.3s ease-in',
				backgroundColor: theme === 'light' ? 'white' : 'black',
			}}
		>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	)
}

export default App
