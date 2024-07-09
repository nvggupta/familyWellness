import React from 'react'
import "../components/style.css"
function Nav() {
  return (
   <>
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Service</li>
        <li className='cursor-pointer'>FAQ</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
    </nav>
   </>
  )
}

export default Nav