import { string, object } from 'yup';

export const loginFormValidationSchema = object({
  email: string().email('Invalid email address').required('Email is required'),
  password: string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const signUpFormValidationSchema = object({
  name: string().required('Name is required'),
  email: string().email('Invalid email address').required('Email is required'),
  password: string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const otpFormValidationSchema = object({
  otp: string()
    .length(6, 'OTP must be exactly 6 digits')
    .required('OTP is required'),
});
