import React from 'react'
import './style.css'

import { useTranslation } from 'react-i18next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Main } from '../../components/Main'

function DumbPage ({ changeLanguage }) {
  const { t } = useTranslation()

  return (
    <div className='all-block'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default DumbPage
