import React from 'react'
import logo from '../Images/logo.png'
import './Spinner.css'

function Spinner() {
  return (
    <div className='spinnerContainer'><img data-testid='spinnerImg' className='spinnerImg' src={logo} alt='' /></div>
  )
}

export default Spinner