import * as React from 'react'
import Layout from '../layout'

import Top from '../components/Top/top'
import OurMessage from '../components/OurMessage/OurMessage'
import ProductHighlights from '../components/ProductHighlights/ProductHighlights'
import QualityAssurance from '../components/QualityAssurance/QualityAssurance'

const IndexPage = () => {
  return (
    <Layout>
      
      <Top />
      <OurMessage />
      <ProductHighlights />
      <QualityAssurance />
    </Layout>
  )
}

export default IndexPage
