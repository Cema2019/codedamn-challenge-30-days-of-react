/*In this lab, you'll create a simple application using React that calculates the Equated Monthly Installment (EMI) based on the total loan amount and the number of monthly payments.

Objective
Your task is to build an EMI calculator that takes two inputs - the total loan amount and the number of payments - and displays the amount to be paid each month.

Steps to Build the App
Setup Your Environment: Create a new React application and set up the necessary components.
Create Input Fields:
Create an input field for the total loan amount. Assign it the ID totalCost.
Add another input field for the number of monthly payments. This should have the ID numberOfIntervals.
Implement the Calculate Button: Add a button that, when clicked, calculates the monthly payment. This button must have the ID calculate.
Display Output: Show the result of the calculation in a div element. The ID of this element should be output. The monthly installment should be displayed as a floating-point number, rounded to two decimal places.
Testing IDs
Your implementation will be tested using these specific IDs:

totalCost for the total loan amount input field.
numberOfIntervals for the number of payments input field.
calculate for the calculate button.
output for the div displaying the calculated monthly installment.
Challenges
Challenge 1: Create Required Input Elements and Button
Input for Total Cost: Create an input element for entering the total loan amount. This input must have the ID totalCost.
Input for Number of Payments: Add another input for specifying the number of monthly payments. Assign it the ID numberOfIntervals.
Calculate Button: Implement a button that triggers the EMI calculation. This button should be identifiable with the ID calculate.
Challenge 2: Implement Calculation and Display Output
Calculate Monthly Payment: On clicking the calculate button, the application should compute the monthly installment. The installment is calculated by dividing the total cost by the number of intervals.
Display Result: Show the calculated monthly installment in a div element with the ID output. The amount should be displayed as a floating-point number with two decimal places.*/

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
	const [cost, setCost] = useState('')
	const [interval, setInterval] = useState('')
	const handleTotal = () => {
		if (!cost || !interval || Number(interval) === 0) {
			alert('Please enter valid number inputs')
			return
		}
		document.getElementById('output').innerText = `Monthly Installment: $${(
			Number(cost) / Number(interval)
		).toFixed(2)}`
	}

	return (
		<div className="container mt-5" style={{ maxWidth: '500px' }}>
			<h1 className="text-center mb-4">EMI Calculator</h1>
			<div className="card shadow p-4">
				<div className="mb-3">
					<label htmlFor="totalCost" className="form-label">
						Total Loan Amount
					</label>
					<input
						type="number"
						id="totalCost"
						value={cost}
						onChange={(e) => setCost(e.target.value)}
						className="form-control"
						placeholder="Enter total loan amount"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="numberOfIntervals" className="form-label">
						Number of Payments (Months)
					</label>
					<input
						type="number"
						id="numberOfIntervals"
						value={interval}
						onChange={(e) => setInterval(e.target.value)}
						className="form-control"
						placeholder="Enter number of months"
					/>
				</div>
				<button
					id="calculate"
					className="btn btn-primary w-50 mx-auto"
					onClick={handleTotal}
				>
					Calculate
				</button>
			</div>
			<div
				id="output"
				className="alert alert-info mt-4 text-center"
			>
			</div>
		</div>
	)
}

