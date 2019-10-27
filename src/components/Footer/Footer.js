import React from 'react'

import './style.css'

function Footer () {
  return (
    <footer className='footer'>
      <div className='email'>
        <input className='input-form' placeholder='Send me a message!' />
      </div>
      <div className='contacts'>
        <ul>
          <li><a href='tel:+79045133706'>+7(904)-513-37-06</a></li>
          <li><a href='mailto:maxpavlov9991@gmail.com'>maxpavlov9991@gmail.com</a></li>
          <li><a href='https://github.com/maxpavlov9991'>GitHub</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
