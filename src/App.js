import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import logo from './assets/logo.svg'
import { Page } from './modules/Page'

// page uses the hook
function Default () {
  const { i18n, t } = useTranslation()

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <Page changeLanguage={changeLanguage} t={t} />
  )
}

// TODO: make an loader component
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
      <Default />
    </Suspense>
  )
}
