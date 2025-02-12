/*In this coding challenge we have provided you with a very basic sign-up form that collects some information form the users. Your task is to add validation to the form to improve the user experience.

You need to make sure that:

The first name is not empty.
The last name is not empty.
Email is a valid email address.
Password is at least 8 characters long.
Confirm password field has the same value as the password.
Match the above conditions to relevant error messages in Example section and display them below the relevant input fields. You should update the handleSubmit method to show the alert only if all of the input values are accepted, alternatively display only the relevant error messages.

Errors should be displayed only after the user has pressed the Sign Up button, if there are no errors call console.log(’Form submitted successfully’).*/

import React, { useState } from 'react'
import styled from 'styled-components'

const SignUpForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const [errors, setErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const handleSubmit = (e) => {
		e.preventDefault()

		const newErrors = {}
		let isValid = true

		// First Name validation
		if (!formData.firstName) {
			newErrors.firstName = 'First name cannot be empty.'
			isValid = false
		}

		// Last Name validation
		if (!formData.lastName) {
			newErrors.lastName = 'Last name cannot be empty.'
			isValid = false
		}

		// Email validation
		if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Invalid email address.'
			isValid = false
		}

		// Password validation
		if (formData.password.length < 8) {
			newErrors.password = 'Password must be greater than 7 characters.'
			isValid = false
		}

		// Confirm Password validation
		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = 'Passwords do not match.'
			isValid = false
		}

		if (isValid) {
			console.log('Form submitted successfully')
			// Handle form submission logic here
		} else {
			setErrors(newErrors)
		}
	}

	const handleChange = ({target: {name, value}}) => setFormData({ ...formData, [name]: value })

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<input
					data-testid="first-name-id"
					type="text"
					name="firstName"
					placeholder="First Name"
					value={formData.firstName}
					onChange={handleChange}
				/>
				<p data-testid="first-name-error-id" className="error">
					{errors.firstName}
				</p>

				<input
					data-testid="last-name-id"
					type="text"
					name="lastName"
					placeholder="Last Name"
					value={formData.lastName}
					onChange={handleChange}
				/>
				<p data-testid="last-name-error-id" className="error">
					{errors.lastName}
				</p>

				<input
					data-testid="email-id"
					type="email"
					name="email"
					placeholder="Email Address"
					value={formData.email}
					onChange={handleChange}
				/>
				<p data-testid="email-error-id" className="error">
					{errors.email}
				</p>

				<input
					data-testid="password-id"
					type="password"
					name="password"
					placeholder="Password"
					value={formData.password}
					onChange={handleChange}
				/>
				<p data-testid="password-error-id" className="error">
					{errors.password}
				</p>

				<input
					data-testid="confirm-password-id"
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					value={formData.confirmPassword}
					onChange={handleChange}
				/>
				<p data-testid="confirm-password-error-id" className="error">
					{errors.confirmPassword}
				</p>

				<button type="submit">Sign Up</button>
			</form>
		</Wrapper>
	)
}

export default SignUpForm

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px);
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`
