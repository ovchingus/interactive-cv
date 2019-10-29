import React from 'react'

import './style.css'
import { Layout, ContentBlock, UserInfo, Button } from '../../components'

function Page () {
  return (
    <Layout>
      <div className='grid'>
        <ContentBlock>
          <UserInfo />
        </ContentBlock>
        <ContentBlock>
          <div className='anchors btn'>
            <Button onClick={() => alert('pressed')}>
              Styduing
            </Button>
            <Button onClick={() => alert('pressed')}>
              Experience
            </Button>
            <Button onClick={() => alert('pressed')}>
              About
            </Button>
            <Button onClick={() => alert('pressed')}>
              Else
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
