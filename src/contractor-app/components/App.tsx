import { Layout } from 'antd'
import * as React from 'react'
import { Provider } from 'react-redux'

import { store } from '../lib/store'
import { Router } from './Router'

export const App: React.FunctionComponent = () => (
  <Provider store={store()}>
    <Layout style={{ minHeight: '100vh' }}>
      <Router />
    </Layout>
  </Provider>
)
