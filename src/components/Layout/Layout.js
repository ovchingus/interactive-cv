import React from 'react'

import './style.css'

function Layout ({ children }) {
  return (
    <div className='background'>
      <div className='main'>
        {children}
      </div>
    </div>
  )
}

export default Layout
