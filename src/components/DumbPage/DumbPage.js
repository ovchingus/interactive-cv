import React from 'react'
import './style.css'

import { useTranslation } from 'react-i18next'
import { Layout } from '../../components/Layout'
import { ContentBlock } from '../ContentBlock'
import { UserInfo } from '../UserInfo'

function DumbPage ({ changeLanguage }) {
  const { t } = useTranslation()

  return (
    <Layout>
      <ContentBlock>
        <UserInfo />
      </ContentBlock>
    </Layout>
  )
}

export default DumbPage
