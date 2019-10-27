import React from 'react'

import './style.css'

function Header () {
  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='logo'>
          <a href='#' className='logotext'>Logo</a>
        </div>
        <div className='links'>
          <a href='#'>Link#1</a>
          <a href='#'>Link#2</a>
          <a href='#'>Link#3</a>
        </div>
        <div className='profile'>
          <a href='#'>Profile</a>
        </div>
      </div>
    </header>
  )
}

export default Header
