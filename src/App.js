import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import logo from './logo.svg'
import './App.css'

// page uses the hook
function Page () {
  const { t, i18n } = useTranslation()

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <button onClick={() => changeLanguage('ru')}>ru</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <div className='App-intro'>
        Some text
        </div>
        <div>{t('name')}: Vladimir</div>
        <div>{t('about')}: programmer</div>
      </div>
    </div>
  )
}

// loading component for suspense fallback
const Loader = () => (
  <div className='App'>
    <img src={logo} className='App-logo' alt='logo' />
    <div>loading...</div>
  </div>
)

// here app catches the suspense from page in case translations are not yet loaded
export default function App () {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  )
}
