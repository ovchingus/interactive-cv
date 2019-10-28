import React from 'react'

import './style.css'
import { Layout, ContentBlock, UserInfo } from '../../components'

function Page () {
  return (
    <Layout>
      <div className='grid'>
        <ContentBlock>
          <UserInfo />
        </ContentBlock>
        <ContentBlock>
          <UserInfo />
        </ContentBlock>
        <ContentBlock>
          <UserInfo />
        </ContentBlock>
      </div>
    </Layout>
  )
}

export default Page
