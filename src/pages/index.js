import * as React from 'react'
import Layout from '../layout'

import Top from '../components/Top/top'
import A from '../components/a/A'
import B from '../components/b/B'
import C from '../components/c/C'

const IndexPage = () => {
  return (
    <Layout>
      <div id="top">
      <Top />
      </div>
      
      <div id="point">
        <A/>
      </div>
      <div id="menu">
        <B/>
      </div>
      <div id="access">
        <C/>
      </div>
    </Layout>
  )
}

export default IndexPage
