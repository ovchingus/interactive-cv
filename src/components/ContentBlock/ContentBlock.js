import React from 'react'

import './style.css'

function ContentBlock ({ children }) {
  return (
    <div className='content-block'>
      {children}
    </div>
  )
}

export default ContentBlock
