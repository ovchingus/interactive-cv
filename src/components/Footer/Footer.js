import React from 'react'

import './style.css'

function Footer ({ changeLng }) {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <a className='contacts' href='tel:+79045133706'>+7(904)-513-37-06</a>
        <a className='contacts' href='mailto:maxpavlov9991@gmail.com'>maxpavlov9991@gmail.com</a>
        <a className='contacts' href='https://github.com/maxpavlov9991'>GitHub</a>
      </div>
    </footer>
  )
}

export default Footer
