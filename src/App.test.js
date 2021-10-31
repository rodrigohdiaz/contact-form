import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import FormComponent from './components/ContactForm'


test('email input', () => {
  render(<FormComponent />)
  const emailInput = screen.getByPlaceholderText('Please enter your email address')
  fireEvent.change(emailInput, { target: { value: 'test email' } })
  expect(emailInput.value).toBe('test email')
})

test('password input', () => {
  render(<FormComponent />)
  const passwordInput = screen.getByPlaceholderText('Please enter password')
  fireEvent.change(passwordInput, { target: { value: 'test password' } }) 
  expect(passwordInput.value).toBe('test password') 
})
