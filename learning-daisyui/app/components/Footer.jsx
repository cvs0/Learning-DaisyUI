import React from 'react'

const Footer = () => {
  return (
    <div className="navbar bg-blue-300 rounded-box sticky bottom-0">
      <div className='container mx-auto'>
        <p>&copy; {new Date().getFullYear()} cvs0</p>
      </div>
    </div>
  )
}

export default Footer