import React from 'react'
import './styles.css'

function UserInfo () {
  return (
    <div className='profile-block'>
      <div className='profile-img'>
        <div className='img-block'>
          <img className='img' src='https://i0.wp.com/www.gottabemobile.com/wp-content/uploads/2018/09/How-to-Use-Memoji-iOS-12-iPhone-Xs-1.jpg?fit=1027%2C1027&ssl=1' alt='ProfilePhoto' />
        </div>
      </div>
      <div className='profile-info'>
        <div className='text'>
          Maksim the programmer
        </div>
      </div>
    </div>
  )
}

export default UserInfo
