import React from 'react'

import './style.css'
import { Layout, ContentBlock, UserInfo, Button } from '../../components'

function Page ({ changeLanguage, t }) {
  return (
    <Layout>
      <div className='translation'>
        <Button className='button' onClick={() => changeLanguage('ru')}>ru</Button>
        <Button className='button' onClick={() => changeLanguage('en')}>en</Button>
      </div>
      <div className='grid'>
        <ContentBlock>
          <UserInfo />
        </ContentBlock>
        <ContentBlock>
          <div className='anchors'>
            <Button onClick={() => alert('pressed')}>
              {t('study')}
            </Button>
            <Button onClick={() => alert('pressed')}>
              {t('experience')}
            </Button>
            <Button onClick={() => alert('pressed')}>
              {t('about')}
            </Button>
            <Button onClick={() => alert('pressed')}>
              {t('email')}
            </Button>
          </div>
        </ContentBlock>
        <ContentBlock>
          WIP
        </ContentBlock>
      </div>
    </Layout>
  )
}

export default Page
