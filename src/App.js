import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import logo from './assets/logo.svg'
import './App.css'
import { DumbPage } from './components/DumbPage'

// page uses the hook
function Page () {
  const { i18n } = useTranslation()

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <DumbPage changeLanguage={changeLanguage} />
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
