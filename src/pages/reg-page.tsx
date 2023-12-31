import React from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { RegModule } from '../modules/reg-module'

const RegPage = () => (
  <BaseLayoutWithHeaderFooter position={'center'}>
    <RegModule />
  </BaseLayoutWithHeaderFooter>
)

export default RegPage
