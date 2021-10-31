import React from 'react'
import { mount } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import FormComponent from './components/ContactForm'
import ColourSelector from './components/ColorSelection'


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


test('should select colur',() =>{
  render(<ColourSelector />)
  const colourPick = mount(<ColourSelector/>)
  colourPick.find('select').simulate('change', {target: {value: 'green'}})
  expect(colourPick.find('select').props().value).toBe('green')
})