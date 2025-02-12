/*In this lab, you'll build a simple React application that demonstrates pagination functionality. This app will interact with the jsonplaceholder API to fetch and display data. The main features include automatically loading data on page load and fetching additional data upon user interaction.

Steps for Building the App
Initial Setup: Create a basic React application.
Fetch Data: On app load, fetch the first 10 records from the jsonplaceholder API.
Display Data: Show the fetched data in a table on the application's main view.
Implement Pagination:
Add a button to load the next set of 10 records.
Ensure the button has an ID of #next for testing purposes.
Update Display: Modify the table to show the new set of records each time the 'Next' button is clicked.*/

import React, { useState, useEffect } from 'react';

	const App = () => {
		const [data, setData] = useState([]);
		const [page, setPage] = useState(1);
	  
		// Function to fetch data from the API
		const fetchData = async () => {
		  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
		  const newData = await response.json();
		  setData([...data, ...newData]);
		};
	  
		// useEffect to fetch data on component mount and page changes
		useEffect(() => {
		  fetchData();
		}, [page]);

  const handleNextClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <h1>Posts</h1>
      <table style={{ width: 'auto', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #e2e8f0', padding: '0.5rem' }}>ID</th>
            <th style={{ border: '1px solid #e2e8f0', padding: '0.5rem' }}>Title</th>
            <th style={{ border: '1px solid #e2e8f0', padding: '0.5rem' }}>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map(post => (
            <tr key={post.id}>
              <td style={{ border: '1px solid #cbd5e1', padding: '0.5rem' }}>{post.id}</td>
              <td style={{ border: '1px solid #cbd5e1', padding: '0.5rem' }}>{post.title}</td>
              <td style={{ border: '1px solid #cbd5e1', padding: '0.5rem' }}>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button id="next" onClick={handleNextClick} 
	  style={{ marginTop: '1rem', backgroundColor: '#3b82f6', color: 'white', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>
        Next
      </button>
   </div>
   );
};

export default App;

