import React from 'react'

import './style.css'

function Layout ({ children }) {
  return (
    <main className='main'>
      {children}
    </main>
  )
}

export default Layout
