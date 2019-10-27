import React from 'react'
import './style.css'

import { useTranslation } from 'react-i18next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

function DumbPage ({ changeLanguage }) {
  const { t } = useTranslation()

  return (
    <div className='all-block'>
      <Header />
      <div className='main-content'>

        <main className='main'>
          <div className='profile-block content-block'>
            <div className='profile-img'>
              <div className='img-block'>
                <img className='img' src='https://i0.wp.com/www.gottabemobile.com/wp-content/uploads/2018/09/How-to-Use-Memoji-iOS-12-iPhone-Xs-1.jpg?fit=1027%2C1027&ssl=1' alt='ProfilePhoto' />
              </div>
            </div>
            <div className='profile-info'>
              <span>{t('profile.text')}</span>
            </div>
          </div>
          <div className='something-block content-block'>
            <button onClick={() => changeLanguage('ru')}>ru</button>
            <button onClick={() => changeLanguage('en')}>en</button>
          </div>
          <div className='third-block content-block'>
            <span>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </span>
          </div>
          <div className='fourth-block content-block'>
            <span>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
            </span>
          </div>
          <div className='fifth-block content-block'>
            <span>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
            </span>
          </div>
        </main>

        <Footer />

      </div>
    </div>
  )
}

export default DumbPage
