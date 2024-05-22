import React from 'react'
const Navigation = () => {
  return (
    <nav className='container'>
      <div className='logo'>
        <img src="dologo.svg" alt="do some logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation
