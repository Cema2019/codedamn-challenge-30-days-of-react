import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  FormHelperText,
  FormControl,
} from '@mui/material';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    let isValid = true;

    // First Name validation
    if (!formData.firstName) {
      newErrors.firstName = 'First name cannot be empty.';
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName) {
      newErrors.lastName = 'Last name cannot be empty.';
      isValid = false;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
      isValid = false;
    }

    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be greater than 7 characters.';
      isValid = false;
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      isValid = false;
    }

    if (isValid) {
      console.log('Form submitted successfully');
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 400,
        margin: 'auto',
        padding: 2,
        fontFamily: 'sans-serif',
        backgroundColor: '#f7f7f7',
        borderRadius: 2,
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <FormControl
          fullWidth
          margin="normal"
          error={Boolean(errors.firstName)}
        >
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            variant="outlined"
          />
          <FormHelperText>{errors.firstName}</FormHelperText>
        </FormControl>

        <FormControl fullWidth margin="normal" error={Boolean(errors.lastName)}>
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            variant="outlined"
          />
          <FormHelperText>{errors.lastName}</FormHelperText>
        </FormControl>

        <FormControl fullWidth margin="normal" error={Boolean(errors.email)}>
          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
          />
          <FormHelperText>{errors.email}</FormHelperText>
        </FormControl>

        <FormControl fullWidth margin="normal" error={Boolean(errors.password)}>
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
          />
          <FormHelperText>{errors.password}</FormHelperText>
        </FormControl>

        <FormControl
          fullWidth
          margin="normal"
          error={Boolean(errors.confirmPassword)}
        >
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            variant="outlined"
          />
          <FormHelperText>{errors.confirmPassword}</FormHelperText>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            marginTop: 2,
            padding: '10px 20px',
            fontSize: '16px',
            width: '100%',
          }}
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUpForm;
