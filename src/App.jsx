import { useState } from 'react'
import React from 'react'
import './App.css'


function App() {
 const [firstName, setFirstName] = useState('')
 const [lastName, setLastName] = useState('')
 const [submitted, setSubmitted] = useState(false)


  return (
    <div className='form'>
      <h1>Full Name Display</h1>
      <form  onSubmit={(e) => e.preventDefault()}>
        <label  htmlFor="firstName">
          First Name:
          <input
          id='firstName'
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label  htmlFor="lastName">
          Last Name:
          <input
          id='lastName'
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          onClick={() => {
            if(firstName && lastName){setSubmitted(true)}
            console.log(`First Name: ${firstName}, Last Name: ${lastName}`)
          }}> Submit </button>
      </form>
      {submitted && (
        <h5>Full Name: {firstName} {lastName}</h5>
      )}
    </div>
  );
}

export default App
