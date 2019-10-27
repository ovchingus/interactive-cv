import React from 'react'

import style from './style.css'

function Header () {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <a href='#' className={style.logo-text}>Logo</a>
      </div>
      <div className={style.links}>
        <a href='#'>Link#1</a>
        <a href='#'>Link#2</a>
        <a href='#'>Link#3</a>
      </div>
      <div className={style.profile}>
        <a href='#'>Profile</a>
      </div>
    </header>
  )
}

export default Header
